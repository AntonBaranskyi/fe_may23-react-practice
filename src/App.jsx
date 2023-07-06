/*eslint-disable*/
import React, { useState } from "react";
import "./App.scss";

import classNames from "classnames";
import usersFromServer from "./api/users";
import categoriesFromServer from "./api/categories";
import productsFromServer from "./api/products";

// eslint-disable-next-line max-len
const getCategory = (productID) =>
  categoriesFromServer.find((category) => category.id === productID);

const productsCategory = productsFromServer.map((product) => {
  const category = getCategory(product.categoryId);
  const { ownerId } = category;

  return {
    ...product,
    category,
    ownerId,
  };
});

const products = productsCategory.map((product) => {
  const user = usersFromServer.find((us) => us.id === product.ownerId);

  return { ...product, user };
});

const filterProducts = (allProducts, { searchField, filterNameField }) => {
  const copyProducts = [...allProducts];

  if (searchField) {
    const lowerSearch = searchField.trim().toLowerCase();

    if (filterNameField) {
      const withUsers = copyProducts.filter(
        (item) => item.user.name === filterNameField
      );

      return withUsers.filter((product) =>
        product.name.toLowerCase().includes(lowerSearch)
      );
    } else {
      return copyProducts.filter((product) =>
        product.name.toLowerCase().includes(lowerSearch)
      );
    }
  }

  if (filterNameField) {
    return copyProducts.filter(
      (product) => product.user.name === filterNameField
    );
  }

  return copyProducts;
};

export const App = () => {
  const [searchField, setSearchField] = useState("");
  const [filterNameField, setFilterNameField] = useState("");
  const [filterCategoryField, setFilterCategoryField] = useState("");

  const visibleProducts = filterProducts(products, {
    searchField,
    filterNameField,
  });

  const resetFilters = () => {
    setFilterNameField("");
    setSearchField("");
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                onClick={() => setFilterNameField("")}
                data-cy="FilterAllUsers"
                href="#/"
                className={classNames({ "is-active": !filterNameField })}
              >
                All
              </a>

              {usersFromServer.map((user) => (
                <a
                  onClick={() => setFilterNameField(user.name)}
                  key={user.id}
                  data-cy="FilterUser"
                  href="#/"
                  className={classNames({
                    "is-active": filterNameField === user.name,
                  })}
                >
                  {user.name}
                </a>
              ))}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={searchField}
                  onChange={(event) => setSearchField(event.target.value)}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                <span className="icon is-right">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  {searchField && (
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => setSearchField("")}
                    />
                  )}
                </span>
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className="button is-success mr-6 is-outlined"
              >
                All
              </a>

              {categoriesFromServer.map((category) => (
                <a
                  key={category.id}
                  data-cy="Category"
                  className="button mr-2 my-1"
                  href="#/"
                  onClick={() => setFilterCategoryField(category.title)}
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={resetFilters}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {visibleProducts.length === 0 ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <table
              data-cy="ProductTable"
              className="table is-striped is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      ID
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      Product
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort-down" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      Category
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort-up" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      User
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort" />
                        </span>
                      </a>
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleProducts.map((product) => (
                  <tr key={product.id} data-cy="Product">
                    <td className="has-text-weight-bold" data-cy="ProductId">
                      {product.id}
                    </td>

                    <td data-cy="ProductName">{product.name}</td>
                    <td data-cy="ProductCategory">{`${product.category.icon} - ${product.category.title}`}</td>

                    <td
                      data-cy="ProductUser"
                      className={classNames({
                        "has-text-link": product.user.sex === "m",
                        "has-text-danger": product.user.sex === "f",
                      })}
                    >
                      {product.user.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
