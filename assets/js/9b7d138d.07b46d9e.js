(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(91)),c={id:"discount",title:"Discount"},a={unversionedId:"discount",id:"discount",isDocsHomePage:!1,title:"Discount",description:"Get discount list",source:"@site/docs/discount.md",slug:"/discount",permalink:"/sherl-sdk-js/docs/discount",editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/discount.md",version:"current",sidebar:"sidebar",previous:{title:"Order",permalink:"/sherl-sdk-js/docs/order"},next:{title:"Place",permalink:"/sherl-sdk-js/docs/place"}},s=[{value:"Get discount list",id:"get-discount-list",children:[]},{value:"Get one discount by id",id:"get-one-discount-by-id",children:[]},{value:"Get one discount by params",id:"get-one-discount-by-params",children:[]},{value:"Post Discount",id:"post-discount",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"get-discount-list"},"Get discount list"),Object(i.b)("p",null,"Retrieve a list of all public discount, which you can filter with parameters"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// Require authentication\nconst discounts = await Sherl.discount.getDiscounts(1, 10, {\n  /* Filters */\n});\n\n// Public\nconst discounts = await Sherl.discount.getPublicDiscounts(1, 10, {\n  /* Filters */\n});\n")),Object(i.b)("p",null,"Return a paginated array of Discount."),Object(i.b)("h2",{id:"get-one-discount-by-id"},"Get one discount by id"),Object(i.b)("p",null,"Retrieve a discount by ID."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const discount = await Sherl.discount.getDiscount('discount-id');\n")),Object(i.b)("p",null,"Return a Discount."),Object(i.b)("h2",{id:"get-one-discount-by-params"},"Get one discount by params"),Object(i.b)("p",null,"Retrieve a discount by parameters."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const discount = await Sherl.discount.getDiscountByParams({\n  your_key: 'Your_value',\n  your_key: 'Your_value',\n});\n")),Object(i.b)("p",null,"Return a Discount."),Object(i.b)("h2",{id:"post-discount"},"Post Discount"),Object(i.b)("p",null,"Create a discount."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const discount = await Sherl.discount.postDiscount({\n  id: 'string';\n  name: 'string';\n  availableFrom: 'Date';\n  availableUntil: 'Date';\n  enabled: boolean;\n  highlight: boolean;\n  cumulative: boolean;\n  discountType: 'percent';\n  code: 'string';\n  percentage: number;\n  amount: number;\n  quantity: number;\n  quantityPerUser: number;\n  customers: ['string'];\n  visibleToPublic: boolean;\n  productRestrictions: [\n    {\n      requiredQuantity: number;\n      productUri: 'string';\n      categoryUri: 'string';\n    },\n  ];\n  dateRestrictions: [\n    {\n      date: 'Date';\n      dayOfWeek: 'string';\n      fromHour: 'Date';\n      toHour: 'Date';\n    },\n  ];\n})\n")),Object(i.b)("p",null,"Create a Discount."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||i;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);