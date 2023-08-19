/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _pages_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/App/App */ "./src/pages/App/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");





const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/App/App.js":
/*!******************************!*\
  !*** ./src/pages/App/App.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.css */ "./src/pages/App/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/users-service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _NewOrderPage_NewOrderPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NewOrderPage/NewOrderPage */ "./src/pages/NewOrderPage/NewOrderPage.js");
/* harmony import */ var _OrderHistoryPage_OrderHistoryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OrderHistoryPage/OrderHistoryPage */ "./src/pages/OrderHistoryPage/OrderHistoryPage.js");







function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/users-service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: (_App_module_css__WEBPACK_IMPORTED_MODULE_1___default().App)
  }, user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/order/new",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NewOrderPage_NewOrderPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/order",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrderHistoryPage_OrderHistoryPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, {
      to: "/order/new"
    })
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUser: setUser
  }));
}

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.css */ "./src/pages/AuthPage/AuthPage.module.css");
/* harmony import */ var _AuthPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AuthPage_module_css__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/LoginForm/LoginForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/SignUpForm/SignUpForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Logo/Logo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/React.createElement("main", {
    className: (_AuthPage_module_css__WEBPACK_IMPORTED_MODULE_1___default().AuthPage)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Logo/Logo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/SignUpForm/SignUpForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement("div", {
    className: (_AuthPage_module_css__WEBPACK_IMPORTED_MODULE_1___default().divider)
  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/LoginForm/LoginForm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)));
}

/***/ }),

/***/ "./src/pages/NewOrderPage/NewOrderPage.js":
/*!************************************************!*\
  !*** ./src/pages/NewOrderPage/NewOrderPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewOrderPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/items-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/orders-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _NewOrderPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewOrderPage.module.css */ "./src/pages/NewOrderPage/NewOrderPage.module.css");
/* harmony import */ var _NewOrderPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NewOrderPage_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Logo/Logo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/NavBar/NavBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MenuList/MenuList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/CategoryList/CategoryList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/OrderDetail/OrderDetail'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/UserLogOut/UserLogOut'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











function NewOrderPage(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const [menuItems, setMenuItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [activeCat, setActiveCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const categoriesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function getItems() {
      return _getItems.apply(this, arguments);
    }
    function _getItems() {
      _getItems = _asyncToGenerator(function* () {
        const items = yield Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/items-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        categoriesRef.current = items.reduce((cats, item) => {
          const cat = item.category.name;
          return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setMenuItems(items);
        setActiveCat(categoriesRef.current[0]);
      });
      return _getItems.apply(this, arguments);
    }
    getItems();
    function getCart() {
      return _getCart.apply(this, arguments);
    }
    function _getCart() {
      _getCart = _asyncToGenerator(function* () {
        const cart = yield Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/orders-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        setCart(cart);
      });
      return _getCart.apply(this, arguments);
    }
    getCart();
  }, []);
  function handleAddToOrder(_x) {
    return _handleAddToOrder.apply(this, arguments);
  }
  function _handleAddToOrder() {
    _handleAddToOrder = _asyncToGenerator(function* (itemId) {
      const updatedCart = yield Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/orders-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(itemId, newQty);
      setCart(updatedCart);
    });
    return _handleAddToOrder.apply(this, arguments);
  }
  function handleCheckout() {
    return _handleCheckout.apply(this, arguments);
  }
  function _handleCheckout() {
    _handleCheckout = _asyncToGenerator(function* () {
      yield Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/orders-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      navigate('/orders');
    });
    return _handleCheckout.apply(this, arguments);
  }
  return /*#__PURE__*/React.createElement("main", {
    className: (_NewOrderPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().NewOrderPage)
  }, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Logo/Logo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement("h1", null, "Super Smoothies"), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/UserLogOut/UserLogOut'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    user: user
  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/NavBar/NavBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MenuList/MenuList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    menuItems: menuItems.filter(itme => item.category.name === activeCat),
    handleAddToOrder: handleAddToOrder
  }), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/OrderDetail/OrderDetail'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    order: cart,
    handleChangeQty: handleChangeQty,
    handleCheckout: handleCheckout
  })));
}

/***/ }),

/***/ "./src/pages/OrderHistoryPage/OrderHistoryPage.js":
/*!********************************************************!*\
  !*** ./src/pages/OrderHistoryPage/OrderHistoryPage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderHistoryPage)
/* harmony export */ });
/* harmony import */ var _OrderHistoryPage_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderHistoryPage.module.css */ "./src/pages/OrderHistoryPage/OrderHistoryPage.module.css");
/* harmony import */ var _OrderHistoryPage_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_OrderHistoryPage_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/orders-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Logo/Logo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/UserLogOut/UserLogOut'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/OrderList/OrderList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/OrderDetail/OrderDetail'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function OrderHistoryPage(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [activeOrder, setActiveOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    function fetchOrderHistory() {
      return _fetchOrderHistory.apply(this, arguments);
    }
    function _fetchOrderHistory() {
      _fetchOrderHistory = _asyncToGenerator(function* () {
        const orders = yield Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utilities/orders-api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        setOrders(orders);
      });
      return _fetchOrderHistory.apply(this, arguments);
    }
    fetchOrderHistory();
  }, []);
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }
  return /*#__PURE__*/React.createElement("main", {
    className: (_OrderHistoryPage_module_css__WEBPACK_IMPORTED_MODULE_0___default().OrderHistoryPage)
  }, /*#__PURE__*/React.createElement("aside", {
    className: (_OrderHistoryPage_module_css__WEBPACK_IMPORTED_MODULE_0___default().aside)
  }, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Logo/Logo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "orders/new",
    className: "button button-sm"
  }, "New Order"), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/UserLogOut/UserLogOut'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    user: user,
    setUer: setUser
  })), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/OrderList/OrderList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    orders: orders,
    activeOrder: activeOrder,
    handleSelectOrder: handleSelectOrder
  }), /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/OrderDetail/OrderDetail'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    order: activeOrder
  }));
}

/***/ }),

/***/ "./src/pages/App/App.module.css":
/*!**************************************!*\
  !*** ./src/pages/App/App.module.css ***!
  \**************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .App {\n|     height: 100%;\n| }");

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.module.css":
/*!************************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.module.css ***!
  \************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .AuthPage {\n|     height: 100%;\n|     display: flex;");

/***/ }),

/***/ "./src/pages/NewOrderPage/NewOrderPage.module.css":
/*!********************************************************!*\
  !*** ./src/pages/NewOrderPage/NewOrderPage.module.css ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .NewOrderPage {\n|     height: 100%;\n|     display: grid;");

/***/ }),

/***/ "./src/pages/OrderHistoryPage/OrderHistoryPage.module.css":
/*!****************************************************************!*\
  !*** ./src/pages/OrderHistoryPage/OrderHistoryPage.module.css ***!
  \****************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .OrderHistoryPage {\n|     height: 100%;\n|     display: grid;");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> :root {\n|     --white: #FFFFFF;\n|     --tan-1: #FBF9F6;");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.ce58ece43784e25b94aa2061148e9012.js.map