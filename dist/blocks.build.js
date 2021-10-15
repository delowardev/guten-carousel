/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 2);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit__ = __webpack_require__(/*! ./edit */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save__ = __webpack_require__(/*! ./save */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(/*! ./style.scss */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);\n/**\n * BLOCK: slider-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n// import js\n\n\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('core/guten-carousel', {\n\ttitle: __('Carousel'), // Block title.\n\ticon: 'shield',\n\tcategory: 'common',\n\tkeywords: [__('Carousel'), __('Slider')],\n\tedit: __WEBPACK_IMPORTED_MODULE_0__edit__[\"a\" /* default */],\n\tsave: __WEBPACK_IMPORTED_MODULE_1__save__[\"a\" /* default */],\n\tattributes: {\n\t\timages: {\n\t\t\ttype: 'array',\n\t\t\tdefault: []\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHNsaWRlci1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyBpbXBvcnQganNcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnO1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NvcmUvZ3V0ZW4tY2Fyb3VzZWwnLCB7XG5cdHRpdGxlOiBfXygnQ2Fyb3VzZWwnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGtleXdvcmRzOiBbX18oJ0Nhcm91c2VsJyksIF9fKCdTbGlkZXInKV0sXG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6IFNhdmUsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZXM6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRkZWZhdWx0OiBbXVxuXHRcdH1cblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Edit;\nvar Platform = wp.element.Platform;\nvar __ = wp.i18n.__;\nvar MediaPlaceholder = wp.blockEditor.MediaPlaceholder;\n\n\nvar ALLOWED_MEDIA_TYPES = ['image', 'video'];\n\nvar PLACEHOLDER_TEXT = Platform.isNative ? __('ADD MEDIA') : __('Drag images, upload new ones or select files from your library.');\n\nfunction Edit(props) {\n\tvar className = props.className,\n\t    images = props.attributes.images,\n\t    setAttributes = props.setAttributes;\n\n\n\tvar setImages = function setImages(_img) {\n\t\tsetAttributes({ images: _img });\n\t};\n\n\tvar hasImages = !!images.length;\n\tvar hasImageIds = hasImages && images.some(function (image) {\n\t\treturn !!image.id;\n\t});\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: className },\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'images' },\n\t\t\timages.map(function (img) {\n\t\t\t\treturn wp.element.createElement('img', { key: img.id, src: img.url, alt: img.alt });\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(MediaPlaceholder, {\n\t\t\taddToGallery: hasImageIds,\n\t\t\tisAppender: hasImages,\n\t\t\tonSelect: setImages,\n\t\t\tmultiple: true,\n\t\t\tvalue: images,\n\t\t\taccept: 'image/*,video/*',\n\t\t\tallowedTypes: ALLOWED_MEDIA_TYPES,\n\t\t\tlabels: {\n\t\t\t\ttitle: !hasImages && __('Carousel'),\n\t\t\t\tinstructions: !hasImages && PLACEHOLDER_TEXT\n\t\t\t}\n\t\t})\n\t);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0LmpzPzNmZTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXRmb3JtID0gd3AuZWxlbWVudC5QbGF0Zm9ybTtcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgTWVkaWFQbGFjZWhvbGRlciA9IHdwLmJsb2NrRWRpdG9yLk1lZGlhUGxhY2Vob2xkZXI7XG5cblxudmFyIEFMTE9XRURfTUVESUFfVFlQRVMgPSBbJ2ltYWdlJywgJ3ZpZGVvJ107XG5cbnZhciBQTEFDRUhPTERFUl9URVhUID0gUGxhdGZvcm0uaXNOYXRpdmUgPyBfXygnQUREIE1FRElBJykgOiBfXygnRHJhZyBpbWFnZXMsIHVwbG9hZCBuZXcgb25lcyBvciBzZWxlY3QgZmlsZXMgZnJvbSB5b3VyIGxpYnJhcnkuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0dmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0ICAgIGltYWdlcyA9IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VzLFxuXHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuXHR2YXIgc2V0SW1hZ2VzID0gZnVuY3Rpb24gc2V0SW1hZ2VzKF9pbWcpIHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VzOiBfaW1nIH0pO1xuXHR9O1xuXG5cdHZhciBoYXNJbWFnZXMgPSAhIWltYWdlcy5sZW5ndGg7XG5cdHZhciBoYXNJbWFnZUlkcyA9IGhhc0ltYWdlcyAmJiBpbWFnZXMuc29tZShmdW5jdGlvbiAoaW1hZ2UpIHtcblx0XHRyZXR1cm4gISFpbWFnZS5pZDtcblx0fSk7XG5cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHQnZGl2Jyxcblx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2ltYWdlcycgfSxcblx0XHRcdGltYWdlcy5tYXAoZnVuY3Rpb24gKGltZykge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IGtleTogaW1nLmlkLCBzcmM6IGltZy51cmwsIGFsdDogaW1nLmFsdCB9KTtcblx0XHRcdH0pXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFQbGFjZWhvbGRlciwge1xuXHRcdFx0YWRkVG9HYWxsZXJ5OiBoYXNJbWFnZUlkcyxcblx0XHRcdGlzQXBwZW5kZXI6IGhhc0ltYWdlcyxcblx0XHRcdG9uU2VsZWN0OiBzZXRJbWFnZXMsXG5cdFx0XHRtdWx0aXBsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBpbWFnZXMsXG5cdFx0XHRhY2NlcHQ6ICdpbWFnZS8qLHZpZGVvLyonLFxuXHRcdFx0YWxsb3dlZFR5cGVzOiBBTExPV0VEX01FRElBX1RZUEVTLFxuXHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdHRpdGxlOiAhaGFzSW1hZ2VzICYmIF9fKCdDYXJvdXNlbCcpLFxuXHRcdFx0XHRpbnN0cnVjdGlvbnM6ICFoYXNJbWFnZXMgJiYgUExBQ0VIT0xERVJfVEVYVFxuXHRcdFx0fVxuXHRcdH0pXG5cdCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!***************************!*\
  !*** ./src/block/save.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Save;\nfunction Save(props) {\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: props.className },\n\t\t\"Save\"\n\t);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svc2F2ZS5qcz9jNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUocHJvcHMpIHtcblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcIlNhdmVcIlxuXHQpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3NhdmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svZWRpdG9yLnNjc3M/NDlkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svc3R5bGUuc2Nzcz84MGYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ })
/******/ ]);