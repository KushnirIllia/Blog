/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../Personal Blog\u0000#project/src/assets/js/mobileNav.js":
/*!************************************************************!*\
  !*** ../Personal Blog #project/src/assets/js/mobileNav.js ***!
  \************************************************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle'),\r\n  sidebar = document.getElementById('sidebar'),\r\n  page = document.getElementById('page'),\r\n  body = document.body\r\n\r\nburger.addEventListener('click', () => {\r\n  if (body.classList.contains('show-sidebar')) {\r\n    closeSidebar()\r\n  } else {\r\n    showSidebar()\r\n  }\r\n})\r\n\r\nfunction showSidebar() {\r\n  let mask = document.createElement('div')\r\n  mask.classList.add('page__mask')\r\n  mask.addEventListener('click', closeSidebar)\r\n\r\n  page.appendChild(mask)\r\n\r\n  body.classList.add('show-sidebar')\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove('show-sidebar')\r\n  document.querySelector('.page__mask').remove()\r\n}\n\n//# sourceURL=webpack://brainscloud/../Personal_Blog%00#project/src/assets/js/mobileNav.js?");

/***/ }),

/***/ "../Personal Blog\u0000#project/src/assets/js/modal.js":
/*!********************************************************!*\
  !*** ../Personal Blog #project/src/assets/js/modal.js ***!
  \********************************************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]'),\r\n  modalClose = document.querySelectorAll('.modal__close'),\r\n  modal = document.querySelectorAll('.modal'),\r\n  body = document.body\r\n\r\nmodalBtn.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let $this = event.currentTarget\r\n    let modalId = $this.getAttribute('data-modal')\r\n    let modal = document.getElementById(modalId)\r\n    let modalContent = modal.querySelector('.modal__content')\r\n\r\n    modalContent.addEventListener('click', e => {\r\n      e.stopPropagation()\r\n    })\r\n\r\n    modal.classList.add('show')\r\n    body.classList.add('no-scroll')\r\n\r\n    setTimeout(() => {\r\n      modalContent.style.transform = 'none'\r\n      modalContent.style.opacity = '1'\r\n    }, 1)\r\n\r\n  })\r\n})\r\n\r\nmodalClose.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.target.closest('.modal')\r\n\r\n    closeModal(currentModal)\r\n  })\r\n})\r\n\r\nmodal.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.target\r\n\r\n    closeModal(currentModal)\r\n\r\n  })\r\n})\r\n\r\n\r\nfunction closeModal(currentModal) {\r\n  let modalContent = currentModal.querySelector('.modal__content')\r\n  modalContent.removeAttribute('style')\r\n\r\n  setTimeout(() => {\r\n    currentModal.classList.remove('show')\r\n    body.classList.remove('no-scroll')\r\n  }, 200)\r\n}\n\n//# sourceURL=webpack://brainscloud/../Personal_Blog%00#project/src/assets/js/modal.js?");

/***/ }),

/***/ "../Personal Blog\u0000#project/src/assets/js/textarea.js":
/*!***********************************************************!*\
  !*** ../Personal Blog #project/src/assets/js/textarea.js ***!
  \***********************************************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]')\n\ntextArea.forEach(text => {\n  let textAreaH = text.offsetHeight\n  text.addEventListener('input', (event) => {\n    let $this = event.target\n\n    $this.style.height = `${textAreaH}px`\n    $this.style.height = $this.scrollHeight + 'px'\n  })\n})\n\n//# sourceURL=webpack://brainscloud/../Personal_Blog%00#project/src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["../Personal Blog\u0000#project/src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["../Personal Blog\u0000#project/src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../Personal Blog\u0000#project/src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;