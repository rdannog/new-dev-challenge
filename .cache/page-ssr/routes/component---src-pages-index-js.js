"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 9966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "/home/vainaweb/Área de Trabalho/new-dev-challenge/node_modules/react/index.js"
var index_js_ = __webpack_require__(1057);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(9550);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 5 modules
var gatsby_browser_entry = __webpack_require__(9572);
;// CONCATENATED MODULE: ./src/components/Header/style.js
const GlobalStyle=(0,styled_components_esm.createGlobalStyle)(["*{margin:0;padding:0;box-sizing:border-box;list-style:none;text-decoration:none;cursor:default;color:white;}body{background-color:black;}"]);const Navigation=styled_components_esm["default"].nav.withConfig({displayName:"style__Navigation",componentId:"sc-19nh39c-0"})(["display:flex;align-items:center;justify-content:center;width:100%;height:15vh;background-color:black;border-bottom:1px solid white;"]);const Container=styled_components_esm["default"].ul.withConfig({displayName:"style__Container",componentId:"sc-19nh39c-1"})(["display:flex;align-items:center;justify-content:space-evenly;width:70%;height:15vh;"]);const StyledLink=(0,styled_components_esm["default"])(gatsby_browser_entry.Link).withConfig({displayName:"style__StyledLink",componentId:"sc-19nh39c-2"})(["font-size:1.5em;font-family:Arial,Helvetica,sans-serif;&:hover{cursor:pointer;color:darkgoldenrod;}"]);
;// CONCATENATED MODULE: ./src/components/Header/header.js
class Header extends (index_js_default()).Component{render(){return/*#__PURE__*/index_js_default().createElement(Navigation,null,/*#__PURE__*/index_js_default().createElement(GlobalStyle,null),/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/"},"Home"),/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/films"},"Films"),/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/people"},"People"),/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/planets"},"Planets"),/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/species"},"Species"),/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/starships"},"Starships"),/*#__PURE__*/index_js_default().createElement(StyledLink,{to:"/vehicle"},"Vehicle")));}}

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1057);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9966);
class Home extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component){render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null));}}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map