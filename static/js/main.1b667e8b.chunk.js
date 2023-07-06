(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(9),s=c.n(n),r=(c(14),c(15),c(6)),i=c(8),l=c(4),d=(c(16),c(2)),o=c.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],u=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t,c=(t=e.categoryId,u.find((function(e){return e.id===t}))),a=c.ownerId;return Object(l.a)(Object(l.a)({},e),{},{category:c,ownerId:a})})).map((function(e){var t=j.find((function(t){return t.id===e.ownerId}));return Object(l.a)(Object(l.a)({},e),{},{user:t})})),m=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),d=l[0],m=l[1],f=Object(a.useState)([]),x=Object(r.a)(f,2),O=x[0],p=x[1],y=function(e,t){var c=t.searchField,a=t.filterNameField,n=t.filterCategoryField,s=Object(i.a)(e);if(c){var r=c.trim().toLowerCase();return a?s.filter((function(e){return e.user.name===a})).filter((function(e){return e.name.toLowerCase().includes(r)})):s.filter((function(e){return e.name.toLowerCase().includes(r)}))}return a?s.filter((function(e){return e.user.name===a})):n.length>0?s.filter((function(e){return n.some((function(t){return t===e.category.title}))})):s}(b,{searchField:c,filterNameField:d,filterCategoryField:O});return console.log(b),Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{onClick:function(){return m("")},"data-cy":"FilterAllUsers",href:"#/",className:o()({"is-active":!d}),children:"All"}),j.map((function(e){return Object(h.jsx)("a",{onClick:function(){return m(e.name)},"data-cy":"FilterUser",href:"#/",className:o()({"is-active":d===e.name}),children:e.name},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:c,onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(h.jsx)("span",{className:"icon is-right",children:c&&Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",onClick:function(){return p((function(e){return[]}))},className:o()({"button is-success mr-6":!0,"is-outlined":O.length>0}),children:"All"}),u.map((function(e){return Object(h.jsx)("a",{"data-cy":"Category",className:o()({"button mr-2 my-1":!0,"is-info":O.includes(e.title)}),href:"#/",onClick:function(){return function(e){O.includes(e.title)?p((function(t){return t.filter((function(t){return t!==e.title}))})):p((function(t){return[].concat(Object(i.a)(t),[e.title])}))}(e)},children:e.title},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){m(""),n(""),p((function(e){return[]}))},children:"Reset all filters"})})]})}),Object(h.jsx)("div",{className:"box table-container",children:0===y.length?Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}):Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(h.jsx)("tbody",{children:y.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(h.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===e.user.sex,"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]})})]})})};s.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1b667e8b.chunk.js.map