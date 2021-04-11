/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/calendar.svg */ "./src/images/calendar.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_calendar_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main {\n  width: 100vw;\n  height: 100vh;\n  background-color: #333333;\n  overflow-y: hidden;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\n.list-container {\n  padding: 0px 100px 100px 100px;\n  height: 100%;\n  overflow: auto;\n}\n\n.list-nav {\n  color: #ffffffc7;\n  padding: 40px 0 10px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-items: center;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.171);\n}\n.list-nav .list-heading {\n  font-size: 25px;\n  font-weight: bold;\n}\n.list-nav .list-sort {\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.3s;\n}\n.list-nav .list-sort:hover {\n  transform: scale(1.1);\n}\n\n.list-content {\n  padding-top: 15px;\n  color: rgba(255, 255, 255, 0.856);\n  user-select: none;\n}\n.list-content .task-heading {\n  font-size: 20px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.list-content .task-heading:hover {\n  color: #e44f4a;\n}\n.list-content .section-title {\n  pointer-events: none;\n}\n.list-content .task_list {\n  margin-bottom: 30px;\n}\n.list-content .total_completed_tasks {\n  pointer-events: none;\n}\n.list-content .show_completed_task_icon {\n  position: absolute;\n  right: 3px;\n  transition: 0.3s all;\n  font-size: 30px;\n  transform: rotate(270deg);\n  pointer-events: none;\n}\n.list-content .show_completed_task_icon:hover {\n  cursor: pointer;\n  font-size: 35px;\n}\n.list-content .show_completed_task_icon:active {\n  font-size: 40px;\n}\n\n.task_list_item {\n  padding: 10px;\n  border-radius: 7px;\n  margin: 10px 0;\n  background-color: #272727;\n  box-shadow: inset -1px -1px 1px 1px rgba(110, 110, 110, 0.287);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 45px;\n}\n.task_list_item .item_check {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(204, 204, 204, 0.5);\n  position: absolute;\n  border-radius: 50px;\n  transition: 0.3s all;\n}\n.task_list_item .item_check:hover {\n  background-color: rgba(168, 83, 83, 0.274);\n  cursor: pointer;\n}\n.task_list_item .item_check:hover .checkmark {\n  display: block;\n}\n.task_list_item .item_check:active {\n  background-color: rgba(184, 43, 43, 0.623);\n  transform: scale(1.15);\n}\n.task_list_item .item_check .checkmark {\n  display: none;\n  position: absolute;\n  top: -3px;\n  left: 2px;\n  pointer-events: none;\n  transform: scale(0.7);\n}\n.task_list_item .item_title {\n  margin-left: 25px;\n  font-size: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n}\n.task_list_item .item_tools {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.task_list_item .item_tools .item_due {\n  font-size: 0.7em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-right: 7px;\n  background-color: #3c91c2;\n  border-radius: 50px;\n}\n.task_list_item .item_tools .edit_icon {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n.task_list_item .item_tools .edit_icon:hover {\n  transform: scale(1.1);\n}\n.task_list_item .item_tools .delete_icon {\n  width: 20px;\n  height: 16px;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n.task_list_item .item_tools .delete_icon:hover {\n  transform: scale(1.1);\n}\n\n.plus_add_button {\n  display: flex;\n  flex-direction: row;\n  justify-content: initial;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  padding-bottom: 5px;\n  user-select: none;\n  color: rgba(202, 202, 202, 0.698);\n}\n.plus_add_button:hover {\n  color: rgba(255, 255, 255, 0.856);\n}\n.plus_add_button:hover .plus-icon {\n  border-radius: 50px;\n  background-color: #3c91c2;\n}\n.plus_add_button .plus-icon {\n  width: 20px;\n  height: 20px;\n  pointer-events: none;\n}\n.plus_add_button .add_task {\n  pointer-events: none;\n}\n\n.item_due-overdue {\n  border-radius: 50px;\n  padding: 2px 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  background-color: #c02525;\n}\n\n.item_due-today {\n  border-radius: 50px;\n  padding: 2px 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  background-color: #d8b000;\n}\n\n.item_due-someday {\n  border-radius: 50px;\n  padding: 2px 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  background-color: #71c206;\n}\n\n.subtask {\n  padding-left: 20px;\n}\n\n.button-style1 {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-color: #3c91c2;\n  color: rgba(255, 255, 255, 0.856);\n  border-radius: 10px;\n  padding: 7px;\n  cursor: pointer;\n}\n\n.button-style2 {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.856);\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n::placeholder {\n  color: rgba(202, 202, 202, 0.698);\n}\n\n.disabled {\n  opacity: 0.4;\n}\n\n.popper {\n  position: absolute;\n  right: -40px;\n  top: 30px;\n  background-color: #121212;\n  padding: 10px;\n}\n.popper .drop_down_menu {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.form_top {\n  padding: 10px;\n  border-radius: 7px;\n  margin: 10px 0;\n  background-color: #272727;\n  box-shadow: inset -1px -1px 1px 1px rgba(110, 110, 110, 0.287);\n}\n\n.form_title {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.856);\n  width: 100%;\n  resize: vertical;\n  border: none;\n  background-color: transparent;\n  height: 100%;\n  cursor: text;\n  word-wrap: break-word;\n  outline: none;\n}\n\n.form_extra {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.form_extra .form_tools {\n  display: flex;\n  flex-direction: row;\n  justify-content: initial;\n  align-items: center;\n  margin: 10px 0;\n  gap: 10px;\n}\n.form_extra .form_tools .form_icon {\n  height: 20px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-color: #555;\n  color: rgba(255, 255, 255, 0.856);\n}\n\n.form_bottom {\n  margin-bottom: 15px;\n}\n\n@media (max-width: 800px) {\n  .list-container {\n    padding: 0 30px 100px 30px !important;\n  }\n\n  .task_list_item {\n    height: 100%;\n    gap: 10px;\n    justify-content: initial;\n    align-items: flex-start;\n  }\n  .task_list_item > .item_title {\n    width: 100%;\n    height: 100%;\n    overflow: initial;\n    overflow-x: hidden;\n    padding-right: 20px;\n  }\n  .task_list_item .item_due {\n    font-size: 0.7em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n.date_Wrapper, option, .importance_Wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  gap: 3px;\n  cursor: pointer;\n  border: 2px solid rgba(255, 255, 255, 0.205);\n  padding: 5px;\n  border-radius: 10px;\n}\n.date_Wrapper:hover, option:hover, .importance_Wrapper:hover {\n  background-color: rgba(255, 255, 255, 0.105);\n}\n.date_Wrapper .date_value, option .date_value, .importance_Wrapper .date_value {\n  pointer-events: none;\n  padding-right: 3px;\n}\n.date_Wrapper .datepicker-toggle, option .datepicker-toggle, .importance_Wrapper .datepicker-toggle {\n  margin-top: 4px;\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n.date_Wrapper .datepicker-toggle-button, option .datepicker-toggle-button, .importance_Wrapper .datepicker-toggle-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 90%;\n  height: 90%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  filter: invert(51%) sepia(72%) saturate(2463%) hue-rotate(159deg) brightness(91%) contrast(101%);\n}\n.date_Wrapper .datepicker-input, option .datepicker-input, .importance_Wrapper .datepicker-input {\n  position: absolute;\n  left: -6px;\n  top: -12px;\n  width: 89px;\n  height: 38px;\n  opacity: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.date_Wrapper .datepicker-input::-webkit-calendar-picker-indicator, option .datepicker-input::-webkit-calendar-picker-indicator, .importance_Wrapper .datepicker-input::-webkit-calendar-picker-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.importance_Wrapper {\n  background-color: transparent;\n  outline: none;\n  color: rgba(255, 255, 255, 0.856);\n}\n\noption {\n  background-color: #292929;\n}", "",{"version":3,"sources":["webpack://./_main.scss","webpack://./_var.scss","webpack://./style.scss","webpack://./_base.scss","webpack://./_list.scss","webpack://./_mixin.scss","webpack://./_utility.scss","webpack://./_tooltips.scss","webpack://./_form.scss","webpack://./_mediaqueries.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"var\";\r\n@use \"mixin\";\r\n\r\n\r\nmain {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: var.$main-color;\r\n    overflow-y: hidden;\r\n\r\n \r\n}\r\n","//dark theme mode\r\n\r\n// Color ----------------->       \r\n\r\n//base\r\n$heading-color: #222222;\r\n$main-color: #333333;\r\n\r\n// list\r\n$listHeading-color: #ffffffc7;\r\n$borderbottom-color: 1px solid rgba(204, 204, 204, 0.171);  \r\n\r\n//task\r\n$taskTitle-color: rgba(255, 255, 255, 0.856);\r\n$task-backgroundColor: rgb(39, 39, 39);\r\n\r\n//due date \r\n$task-dateColor1: rgb(192, 37, 37);\r\n$task-dateColor2: rgb(216, 176, 0);\r\n$task-dateColor3: rgb(113, 194, 6);\r\n\r\n//add task \r\n$plusIcon-color: rgb(60, 145, 194);  \r\n// edit button \r\n$buttonText-color: rgba(255, 255, 255, 0.856);\r\n$placeholder-color: rgba(202, 202, 202, 0.698);\r\n\r\n// date\r\n$dateBorder-color: rgba(255, 255, 255, 0.205);\r\n$datebackground-color: rgba(255, 255, 255, 0.105);\r\n//size \r\n$title-size: 20px;\r\n$normal-size: 16px;\r\n$date-size: 14px;\r\n\r\n// sizing ---------------->\r\n$heading-width: 70px; ","main {\n  width: 100vw;\n  height: 100vh;\n  background-color: #333333;\n  overflow-y: hidden;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\n.list-container {\n  padding: 0px 100px 100px 100px;\n  height: 100%;\n  overflow: auto;\n}\n\n.list-nav {\n  color: #ffffffc7;\n  padding: 40px 0 10px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-items: center;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.171);\n}\n.list-nav .list-heading {\n  font-size: 25px;\n  font-weight: bold;\n}\n.list-nav .list-sort {\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.3s;\n}\n.list-nav .list-sort:hover {\n  transform: scale(1.1);\n}\n\n.list-content {\n  padding-top: 15px;\n  color: rgba(255, 255, 255, 0.856);\n  user-select: none;\n}\n.list-content .task-heading {\n  font-size: 20px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.list-content .task-heading:hover {\n  color: #e44f4a;\n}\n.list-content .section-title {\n  pointer-events: none;\n}\n.list-content .task_list {\n  margin-bottom: 30px;\n}\n.list-content .total_completed_tasks {\n  pointer-events: none;\n}\n.list-content .show_completed_task_icon {\n  position: absolute;\n  right: 3px;\n  transition: 0.3s all;\n  font-size: 30px;\n  transform: rotate(270deg);\n  pointer-events: none;\n}\n.list-content .show_completed_task_icon:hover {\n  cursor: pointer;\n  font-size: 35px;\n}\n.list-content .show_completed_task_icon:active {\n  font-size: 40px;\n}\n\n.task_list_item {\n  padding: 10px;\n  border-radius: 7px;\n  margin: 10px 0;\n  background-color: #272727;\n  box-shadow: inset -1px -1px 1px 1px rgba(110, 110, 110, 0.287);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 45px;\n}\n.task_list_item .item_check {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(204, 204, 204, 0.5);\n  position: absolute;\n  border-radius: 50px;\n  transition: 0.3s all;\n}\n.task_list_item .item_check:hover {\n  background-color: rgba(168, 83, 83, 0.274);\n  cursor: pointer;\n}\n.task_list_item .item_check:hover .checkmark {\n  display: block;\n}\n.task_list_item .item_check:active {\n  background-color: rgba(184, 43, 43, 0.623);\n  transform: scale(1.15);\n}\n.task_list_item .item_check .checkmark {\n  display: none;\n  position: absolute;\n  top: -3px;\n  left: 2px;\n  pointer-events: none;\n  transform: scale(0.7);\n}\n.task_list_item .item_title {\n  margin-left: 25px;\n  font-size: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n}\n.task_list_item .item_tools {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n.task_list_item .item_tools .item_due {\n  font-size: 0.7em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-right: 7px;\n  background-color: #3c91c2;\n  border-radius: 50px;\n}\n.task_list_item .item_tools .edit_icon {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n.task_list_item .item_tools .edit_icon:hover {\n  transform: scale(1.1);\n}\n.task_list_item .item_tools .delete_icon {\n  width: 20px;\n  height: 16px;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n.task_list_item .item_tools .delete_icon:hover {\n  transform: scale(1.1);\n}\n\n.plus_add_button {\n  display: flex;\n  flex-direction: row;\n  justify-content: initial;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  padding-bottom: 5px;\n  user-select: none;\n  color: rgba(202, 202, 202, 0.698);\n}\n.plus_add_button:hover {\n  color: rgba(255, 255, 255, 0.856);\n}\n.plus_add_button:hover .plus-icon {\n  border-radius: 50px;\n  background-color: #3c91c2;\n}\n.plus_add_button .plus-icon {\n  width: 20px;\n  height: 20px;\n  pointer-events: none;\n}\n.plus_add_button .add_task {\n  pointer-events: none;\n}\n\n.item_due-overdue {\n  border-radius: 50px;\n  padding: 2px 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  background-color: #c02525;\n}\n\n.item_due-today {\n  border-radius: 50px;\n  padding: 2px 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  background-color: #d8b000;\n}\n\n.item_due-someday {\n  border-radius: 50px;\n  padding: 2px 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 25px;\n  background-color: #71c206;\n}\n\n.subtask {\n  padding-left: 20px;\n}\n\n.button-style1 {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-color: #3c91c2;\n  color: rgba(255, 255, 255, 0.856);\n  border-radius: 10px;\n  padding: 7px;\n  cursor: pointer;\n}\n\n.button-style2 {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.856);\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n::placeholder {\n  color: rgba(202, 202, 202, 0.698);\n}\n\n.disabled {\n  opacity: 0.4;\n}\n\n.popper {\n  position: absolute;\n  right: -40px;\n  top: 30px;\n  background-color: #121212;\n  padding: 10px;\n}\n.popper .drop_down_menu {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.form_top {\n  padding: 10px;\n  border-radius: 7px;\n  margin: 10px 0;\n  background-color: #272727;\n  box-shadow: inset -1px -1px 1px 1px rgba(110, 110, 110, 0.287);\n}\n\n.form_title {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.856);\n  width: 100%;\n  resize: vertical;\n  border: none;\n  background-color: transparent;\n  height: 100%;\n  cursor: text;\n  word-wrap: break-word;\n  outline: none;\n}\n\n.form_extra {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.form_extra .form_tools {\n  display: flex;\n  flex-direction: row;\n  justify-content: initial;\n  align-items: center;\n  margin: 10px 0;\n  gap: 10px;\n}\n.form_extra .form_tools .form_icon {\n  height: 20px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-color: #555;\n  color: rgba(255, 255, 255, 0.856);\n}\n\n.form_bottom {\n  margin-bottom: 15px;\n}\n\n@media (max-width: 800px) {\n  .list-container {\n    padding: 0 30px 100px 30px !important;\n  }\n\n  .task_list_item {\n    height: 100%;\n    gap: 10px;\n    justify-content: initial;\n    align-items: flex-start;\n  }\n  .task_list_item > .item_title {\n    width: 100%;\n    height: 100%;\n    overflow: initial;\n    overflow-x: hidden;\n    padding-right: 20px;\n  }\n  .task_list_item .item_due {\n    font-size: 0.7em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n.date_Wrapper, option, .importance_Wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  gap: 3px;\n  cursor: pointer;\n  border: 2px solid rgba(255, 255, 255, 0.205);\n  padding: 5px;\n  border-radius: 10px;\n}\n.date_Wrapper:hover, option:hover, .importance_Wrapper:hover {\n  background-color: rgba(255, 255, 255, 0.105);\n}\n.date_Wrapper .date_value, option .date_value, .importance_Wrapper .date_value {\n  pointer-events: none;\n  padding-right: 3px;\n}\n.date_Wrapper .datepicker-toggle, option .datepicker-toggle, .importance_Wrapper .datepicker-toggle {\n  margin-top: 4px;\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n.date_Wrapper .datepicker-toggle-button, option .datepicker-toggle-button, .importance_Wrapper .datepicker-toggle-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 90%;\n  height: 90%;\n  background-image: url(\"../images/calendar.svg\");\n  filter: invert(51%) sepia(72%) saturate(2463%) hue-rotate(159deg) brightness(91%) contrast(101%);\n}\n.date_Wrapper .datepicker-input, option .datepicker-input, .importance_Wrapper .datepicker-input {\n  position: absolute;\n  left: -6px;\n  top: -12px;\n  width: 89px;\n  height: 38px;\n  opacity: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.date_Wrapper .datepicker-input::-webkit-calendar-picker-indicator, option .datepicker-input::-webkit-calendar-picker-indicator, .importance_Wrapper .datepicker-input::-webkit-calendar-picker-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.importance_Wrapper {\n  background-color: transparent;\n  outline: none;\n  color: rgba(255, 255, 255, 0.856);\n}\n\noption {\n  background-color: #292929;\n}","* {\r\n    box-sizing: border-box;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}","@use \"var\";\r\n@use \"mixin\";\r\n\r\n\r\n\r\n.list-container {\r\n    padding: 0px 100px 100px 100px;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.list-nav {\r\n    color: var.$listHeading-color;\r\n    padding: 40px 0 10px 0;\r\n    @include mixin.flex-center(row, space-between);\r\n    align-items: center;\r\n    border-bottom: var.$borderbottom-color;\r\n\r\n    .list-heading {\r\n        @include mixin.big-title;\r\n    }\r\n    .list-sort {\r\n        cursor: pointer;\r\n        user-select: none;\r\n        transition: all .3s;\r\n        &:hover {\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.list-content {\r\n    padding-top: 15px;\r\n    color: var.$taskTitle-color;\r\n    user-select: none;\r\n    .task-heading {\r\n        @include mixin.med-title;\r\n        padding-bottom: 5px;\r\n        position: relative;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n            color: #e44f4a;\r\n        }\r\n    }\r\n\r\n    .section-title {\r\n        pointer-events: none;\r\n    }\r\n\r\n    .task_list {\r\n        margin-bottom: 30px;\r\n    }\r\n    .total_completed_tasks {\r\n        pointer-events: none;\r\n    }\r\n    .show_completed_task_icon {\r\n        position: absolute;\r\n        right: 3px;\r\n        transition: .3s all;\r\n        font-size: 30px;\r\n        transform: rotate(270deg);\r\n        pointer-events: none;\r\n        &:hover {\r\n            cursor: pointer;\r\n            font-size: 35px;\r\n        }\r\n\r\n        &:active {\r\n            font-size: 40px;\r\n\r\n        }\r\n\r\n    }\r\n}  \r\n\r\n.task_list_item {\r\n    @include mixin.task_list_item;\r\n    @include mixin.flex-center(row, space-between);\r\n    position: relative;\r\n    width: 100%;\r\n    height: 45px;\r\n    .item_check {\r\n        width: 20px;\r\n        height: 20px;\r\n        border: 2px solid rgba(204, 204, 204, 0.5);\r\n        position: absolute;\r\n        border-radius: 50px;\r\n        transition: .3s all;\r\n        &:hover {\r\n            background-color: rgba(168, 83, 83, 0.274) ;\r\n            cursor: pointer;\r\n\r\n            .checkmark {\r\n                display: block;\r\n            }\r\n        }\r\n        &:active {\r\n            background-color: rgba(184, 43, 43, 0.623);\r\n            transform: scale(1.15);\r\n        }\r\n\r\n        .checkmark {\r\n            display: none;\r\n            position: absolute;\r\n            top: -3px;\r\n            left: 2px;\r\n            pointer-events: none;\r\n            transform: scale(.7);\r\n\r\n        }\r\n    }\r\n    .item_title {\r\n        margin-left: 25px;\r\n        font-size: var.$normal-size;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        cursor: pointer;\r\n\r\n\r\n    }\r\n    .item_tools {\r\n        @include mixin.flex-center(row, center);\r\n        gap: 2px;\r\n\r\n        .item_due {\r\n            font-size: .7em;\r\n            text-overflow: ellipsis;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            margin-right: 7px;\r\n            background-color: var.$plusIcon-color;\r\n            border-radius: 50px;\r\n        }\r\n        .edit_icon {\r\n            width: 20px;\r\n            height: 20px;\r\n            cursor: pointer;\r\n            transition: .3s all;\r\n            &:hover {\r\n                transform: scale(1.1)\r\n            }\r\n        }\r\n\r\n        \r\n        .delete_icon {\r\n            width: 20px;\r\n            height: 16px;\r\n            cursor: pointer;\r\n            transition: .3s all;\r\n            &:hover {\r\n                transform: scale(1.1)\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.plus_add_button {\r\n    @include mixin.flex-center(row, initial);\r\n    gap: 5px;\r\n    cursor: pointer;\r\n    padding-bottom: 5px;\r\n    user-select: none;\r\n    color: var.$placeholder-color;\r\n    &:hover {\r\n        color: var.$buttonText-color;\r\n        .plus-icon {\r\n            border-radius: 50px;\r\n            background-color: var.$plusIcon-color;\r\n        }\r\n    }\r\n    .plus-icon {\r\n        width: 20px;\r\n        height: 20px;\r\n        pointer-events: none\r\n    }\r\n    .add_task {\r\n        pointer-events: none\r\n    }\r\n}\r\n\r\n","@use \"var\";\r\n@mixin flex-center($flex-direction, $flex-content){\r\n    display: flex;\r\n    flex-direction: $flex-direction;\r\n    justify-content: $flex-content;\r\n    align-items: center;\r\n}\r\n@mixin flex-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n@mixin big-title {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n}\r\n\r\n@mixin med-title {\r\n    font-size: var.$title-size;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n@mixin task_list_item {\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n\r\n    margin: 10px 0;\r\n    background-color: var.$task-backgroundColor;\r\n    box-shadow: inset -1px -1px 1px 1px rgba(110, 110, 110, 0.287)\r\n}\r\n\r\n\r\n@mixin remove_border-outline {\r\n    outline: none;\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n@mixin date-padding {\r\n    border-radius: 50px;\r\n    padding: 2px 7px;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    height: 25px;\r\n}\r\n","// Utility classes that give generally common styling and can be used in many places\r\n\r\n@use \"var\";\r\n@use \"mixin\";\r\n\r\n.item_due-overdue {\r\n    @include mixin.date-padding;\r\n    background-color: var.$task-dateColor1;\r\n\r\n}\r\n\r\n.item_due-today {\r\n    @include mixin.date-padding;\r\n    background-color: var.$task-dateColor2;\r\n\r\n\r\n}\r\n\r\n.item_due-someday {\r\n    @include mixin.date-padding;\r\n    background-color: var.$task-dateColor3;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.subtask {\r\n    padding-left: 20px;\r\n}\r\n.button-style1 {\r\n    @include mixin.remove_border-outline;\r\n    background-color: rgb(60, 145, 194);\r\n    color: var.$buttonText-color;\r\n\r\n    border-radius: 10px;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.button-style2 {\r\n    background-color: transparent;\r\n    @include mixin.remove_border-outline;\r\n    color: var.$buttonText-color;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n::placeholder {\r\n    color: var.$placeholder-color;\r\n}\r\n\r\n.disabled {\r\n    opacity: 0.4;\r\n}","@use \"var\";\r\n@use \"mixin\";\r\n\r\n\r\n.popper  {\r\n    position: absolute;\r\n    right: -40px;\r\n    top: 30px;\r\n    // visibility: hidden;\r\n    background-color: #121212;\r\n    padding: 10px;\r\n    .drop_down_menu {\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        flex-direction:  column;\r\n\r\n\r\n        \r\n        \r\n    }\r\n}","@use \"var\";\r\n@use \"mixin\";\r\n\r\n.form_top {\r\n    @include mixin.task_list_item;\r\n}\r\n\r\n.form_title {\r\n    // @include mixin.remove_border-outline;\r\n    font-size: var.$normal-size;\r\n    color: var.$taskTitle-color;\r\n    width: 100%;\r\n    resize: vertical;\r\n    border: none;\r\n    background-color: transparent;\r\n    height: 100%;\r\n    cursor: text;\r\n    word-wrap: break-word;\r\n    outline: none;\r\n}\r\n\r\n.form_extra {\r\n    @include mixin.flex-center(row, space-between);\r\n    .form_tools {\r\n        @include mixin.flex-center(row, initial);\r\n        margin: 10px 0;\r\n        gap: 10px;\r\n        \r\n    \r\n        .form_icon {\r\n            height: 20px;\r\n            @include mixin.remove_border-outline;\r\n            background-color: #555;\r\n            color: var.$taskTitle-color\r\n        }\r\n    }\r\n}\r\n\r\n.form_bottom {\r\n    margin-bottom: 15px;\r\n\r\n}","\r\n@use \"mixin\";\r\n@media (max-width: 800px) {\r\n    .list-container {\r\n        padding: 0 30px 100px 30px !important;\r\n    }\r\n\r\n    .task_list_item {\r\n        height: 100%;\r\n        gap: 10px;\r\n    \r\n        > .item_title {\r\n            width: 100%;\r\n            height: 100%;\r\n            overflow: initial;\r\n            overflow-x: hidden;\r\n            padding-right: 20px;\r\n        }\r\n        justify-content: initial;\r\n        align-items: flex-start;\r\n\r\n        .item_due {\r\n            font-size: .7em;\r\n            text-overflow: ellipsis;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n\r\n        }\r\n    }\r\n\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__.default)((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - isLastMonthNotFull);
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInYears/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear('1584');
  dateRight.setFullYear('1584'); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastYearNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__.default)(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameYear/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameYear(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameMonth/index.js */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisYear/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisYear)
/* harmony export */ });
/* harmony import */ var _isSameYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameYear/index.js */ "./node_modules/date-fns/esm/isSameYear/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */

function isThisYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d30e3a984bd47c650ed.svg";

/***/ }),

/***/ "./src/js/domController.js":
/*!*********************************!*\
  !*** ./src/js/domController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonHandler": () => (/* binding */ buttonHandler)
/* harmony export */ });
/* harmony import */ var _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/showForm */ "./src/js/tasks/showForm.js");
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/task */ "./src/js/tasks/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _tasks_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/sort */ "./src/js/tasks/sort.js");





const showTask = () => {
    if(_tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.getIsEditModeEnable()) {
        const previousObject = _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.formLocation.get_Info().theElementObject;
        _tasks_task__WEBPACK_IMPORTED_MODULE_1__.addTask.create(previousObject.theTitle, previousObject.date);
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.updateIsEditModeEnable(false);
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.remove();
    }
}

const buttonHandler = (e) => {
  
    if(e.target.classList.contains("plus_add_button")) {

        showTask();
        if(_tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.getIsFormEnabled() === true) {
            _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.remove();
            _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.addTaskButton.create(_tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.formLocation.get_Info().dateSection);
        }
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.create(e.target.parentNode);
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.addTaskButton.remove(e.target);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.changeLayout)();
    }

    if(e.target.classList.contains('delete_icon')) {
        (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(e);
    }

    if(e.target.classList.contains('edit_icon')) {
        const theElementObject = (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.getTask)(e); 
        const theElement = e.target.parentNode.parentNode;
        const dateSection = e.target.parentNode.parentNode.parentNode;

        showTask();

        console.log(theElementObject, theElement, dateSection)
        if(dateSection.querySelector('.plus_add_button') === null) {
            _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.addTaskButton.create(dateSection);
        }

        if(_tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.getIsFormEnabled() === true) {
            _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.remove();

        } 


        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.updateIsEditModeEnable(true);
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.create(dateSection, theElement, theElementObject);
        theElement.remove();
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.changeLayout)();

    }
    if(e.target.classList.contains('task-heading')) {
        const dateSection = e.target.nextElementSibling;
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.updateIsEditModeEnable(false);
        _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.showForm.remove();
        if(dateSection.querySelector('.plus_add_button') === null && dateSection.dataset.dateList !== "completed") {
            _tasks_showForm__WEBPACK_IMPORTED_MODULE_0__.addTaskButton.create(dateSection);
        }

        const showIcon = e.target.querySelector('.show_completed_task_icon');
        if(showIcon.style.transform === "rotate(90deg)") {
            showIcon.style.transform = 'rotate(270deg)';
            showIcon.style.right = '3px';
            (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.hideSection)(e, false);
        } else {
            showIcon.style.transform = "rotate(90deg)";
            showIcon.style.right = '-5px';
            (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.hideSection)(e, true);
        }
    }
    if(e.target.classList.contains('item_check')) {
        const theElementObject = (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.getTask)(e, true); 
        const theElement = e.target.parentNode;
        const editButton = theElement.childNodes[5].childNodes[3];

        if(e.target.childNodes[0].style.display === 'block') {
            e.target.style.backgroundColor = '';
            e.target.childNodes[0].style.display = 'none';
            e.target.nextElementSibling.style.textDecoration = 'none';
            editButton.style.pointerEvents = "all";
            if(theElementObject.completed === true) {
                theElementObject.completed= false;
                (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.editTask)(theElementObject);

                theElement.remove();
    
            }
            return;
        }
        e.target.style.backgroundColor = 'rgba(168, 83, 83, 0.5)';
        e.target.childNodes[0].style.display = 'block';
        e.target.nextElementSibling.style.textDecoration = 'line-through';

        theElementObject.completed = true;
        editButton.style.pointerEvents = "none";

        (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.markCompleteTask)(e);

        
        
    }

    if(e.target.classList.contains('list-sort')) {
        e.target.textContent = changeSortType(e);
  

    }
}

const changeSortType = (e) => {
    const allSections = document.querySelectorAll("[data-date]")
     
    allSections.forEach(el => {
        el.style.display = 'none'
    })

    switch(e.target.textContent) {
        case "Show All": 
            const quickTasks = document.querySelector('[data-date="nodate"]')
            quickTasks.style.display = 'block'
            return 'Quick Tasks';
        case "Quick Tasks": 
            const overdue = document.querySelector('[data-date="overdue"]')
            overdue.style.display = 'block'
            return 'Show Overdue';
        case "Show Overdue":
            const today = document.querySelector('[data-date="today"]')
            today.style.display = 'block'
            return 'Show Today';
        case "Show Today":
            const tomorrow = document.querySelector('[data-date="tomorrow"]')
            tomorrow.style.display = 'block'

            return 'Show Tomorrow';
        case "Show Tomorrow":
            const week = document.querySelector('[data-date="week"]')
            week.style.display = 'block'
            return 'Show This Week'
        case "Show This Week":
            const month = document.querySelector('[data-date="month"]')
            month.style.display = 'block'

            return 'Show This Month'
        case "Show This Month":
            const someday = document.querySelector('[data-date="someday"]')
            someday.style.display = 'block'
            return 'Show Someday'
        case "Show Someday":
            const completed = document.querySelector('[data-date="completed"]')
            completed.style.display = 'block';
            return 'Show Completed'
        default: 
        allSections.forEach(el => {
            el.style.display = 'block'
        }) 
           return 'Show All'
    }
}
window.addEventListener('click', buttonHandler, false);




console.log(window.innerHeight)
console.log(window.innerWidth)








/***/ }),

/***/ "./src/js/html-tags.js":
/*!*****************************!*\
  !*** ./src/js/html-tags.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton),
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _tasks_formatDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/formatDate */ "./src/js/tasks/formatDate.js");


const form = `
<div class="form_top">
<div class='form_input'>
  <input type='text' class='form_title' placeholder="e.g. buy toothpaste">
</div>
<div class='form_extra'>
  <div class='form_tools'>
    <div class='date_Wrapper'>
      <span class="datepicker-toggle">
        <span class="datepicker-toggle-button"></span>
        <input type="date" class="datepicker-input">
      </span>
      <div class='date_value'>Calendar</div>
    </div>
  </div>
</div>
</div>



<div class='form_bottom'>
<input type="button" data-key='Enter' id='form_add_button' class='button-style1' value='Add Task'>
<input type="button" data-key='Escape id='form_cancel_button' class='button-style2' value='Cancel'>
</div>`;

const addTaskButton = `
    <img class='plus-icon' src='/src/images/plus.svg'>
    <div class='item_title add_task'>Add task</div>
`

const task = (title, date) => {

  const taskHTML = `
      <div class='item_check'><span class='checkmark'>&#10003;</span></div>
      <div class='item_title'>${title}</div>
          <div class='item_tools'>
          <div class='item_due'>${(0,_tasks_formatDate__WEBPACK_IMPORTED_MODULE_0__.chooseDate)(date)}</div>
          <img class='edit_icon' src='/src/images/task_edit_icon.svg'>
          <img class='delete_icon' src='/src/images/trash.svg'>


      </div>`
  
  return taskHTML;
}


/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "changeLayout": () => (/* binding */ changeLayout)
/* harmony export */ });
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/task */ "./src/js/tasks/task.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/js/domController.js");
/* harmony import */ var _tasks_taskConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/taskConstructor */ "./src/js/tasks/taskConstructor.js");




const storage = (() => {
    const saveLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(_tasks_task__WEBPACK_IMPORTED_MODULE_0__.taskArray))
    }

    const restoreLocal = () => {
        window.addEventListener('resize', changeLayout)
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if(tasks === null) {
            return;

        };
        for(let task of tasks) {
            const createTaskObject = new _tasks_taskConstructor__WEBPACK_IMPORTED_MODULE_2__.default(task.title, task.dueDate, task.completed)
            _tasks_task__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(createTaskObject);
            (0,_tasks_task__WEBPACK_IMPORTED_MODULE_0__.createObject)(createTaskObject.id ,createTaskObject.title, createTaskObject.dueDate, createTaskObject.completed);
            
            
        }

        changeLayout();
        (0,_tasks_task__WEBPACK_IMPORTED_MODULE_0__.count)();
    }
    return {saveLocal, restoreLocal}
})();

window.addEventListener('load', storage.restoreLocal);
;

const changeLayout = () => {
    const allTasks = document.querySelectorAll('.task_list_item');
    if(window.innerWidth < 700) {
        _tasks_task__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach(el => {
            if(el.dueDate !== "") {
                allTasks.forEach(task => {
                    if(task.dataset.id === el.id) {
                        task.style.flexDirection = "column";
                    }
                })
            }
        })
    } else {
        allTasks.forEach(task => {
            task.style.flexDirection = "row";
        })
    }
}


/***/ }),

/***/ "./src/js/tasks/formatDate.js":
/*!************************************!*\
  !*** ./src/js/tasks/formatDate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseDate": () => (/* binding */ chooseDate),
/* harmony export */   "findCorrectSection": () => (/* binding */ findCorrectSection)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisYear/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInYears/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisMonth/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/js/tasks/task.js");
/* harmony import */ var _showForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showForm */ "./src/js/tasks/showForm.js");



const chooseDate = (date) => {
    if(date === "" || date === 'No Date' || date === undefined) return "";
    const chosenDate = date.split('-');

    // convert date from string to number
    const year = Number(chosenDate[0]);
    const month = Number(chosenDate[1]) - 1;
    const day = Number(chosenDate[2]);
    const reformattedDate = new Date(year, month, day);

    const CurrentDate = new Date();
    //  if date equals to yesterday, or two days ago, say that. Say three days, four days ago. 

    if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(reformattedDate)) {
        const overdue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(reformattedDate, CurrentDate, {addSuffix: true})
        return overdue; 
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(reformattedDate)) {
        return "Today";
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(reformattedDate, { weekStartsOn: 1 })) {
        const within_week = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(year, month, day), "EEEE");
        return within_week
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(reformattedDate)) {
        const within_year = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(year, month, day), "MMMM do");
        return within_year;
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)(reformattedDate, CurrentDate) >= 1) {
        const beyond_year = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(year, month, day), "MMMM do yyyy");
        return beyond_year;
    }
};


const findCorrectSection = (date) => {
    if(date === "" || date === undefined || date === 'No Date') {
        const noDate = document.querySelector('[data-date-list="noDate"]')
        return noDate;
    } 
    const chosenDate = date.split('-');

    // convert date from string to number
    const year = Number(chosenDate[0]);
    const month = Number(chosenDate[1]) - 1;
    const day = Number(chosenDate[2]);
    const reformattedDate = new Date(year, month, day, 23, 59, 59);
    const CurrentDate = new Date();
    if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(reformattedDate)) {
        const overdue = document.querySelector('[data-date-list="overdue"]')
        return overdue;
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(reformattedDate)) {
        const today = document.querySelector('[data-date-list="today"]')
        return today;
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(reformattedDate)) {
        const tomorrow = document.querySelector('[data-date-list="tomorrow"]')
        return tomorrow;
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(reformattedDate, { weekStartsOn: 1 })) {
        const week = document.querySelector('[data-date-list="week"]')
        return week;
    } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.default)(reformattedDate)) {
        const month = document.querySelector('[data-date-list="month"]')
        return month;
    } else if(!(0,date_fns__WEBPACK_IMPORTED_MODULE_10__.default)(reformattedDate) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(reformattedDate)) {
        const someday = document.querySelector('[data-date-list="someday"]');
        console.log(someday)
        return someday;
    } 
}






/***/ }),

/***/ "./src/js/tasks/showForm.js":
/*!**********************************!*\
  !*** ./src/js/tasks/showForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "formLocation": () => (/* binding */ formLocation),
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton)
/* harmony export */ });
/* harmony import */ var _html_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-tags */ "./src/js/html-tags.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/js/tasks/task.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatDate */ "./src/js/tasks/formatDate.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domController */ "./src/js/domController.js");





const showForm = (() => {
    let IsFormEnabled = null;
    const getIsFormEnabled = () => {
        return IsFormEnabled;
    }
    const updateIsFormEnabled = (value) => {
        return value === true ? IsFormEnabled = true : IsFormEnabled = false;
    }

    let editModeEnabled = null;
    const getIsEditModeEnable = () => {
        return editModeEnabled;
    }
    const updateIsEditModeEnable = (value) => {
        return value === true ? editModeEnabled = true : editModeEnabled = false;
    }

    const create = (dateSection, editElement, theElementObject) => {
        const newForm = document.createElement('li');
        newForm.classList.add('form_wrapper');
        newForm.dataset.type='form';
        
        // add the HTML and append to the newForm 
        const formHTML = document.createRange().createContextualFragment(_html_tags__WEBPACK_IMPORTED_MODULE_0__.form);
        newForm.appendChild(formHTML);
        
        // append it to the webpage
        dateSection.appendChild(newForm);
        
        //add event listeners to the buttons of edit Form.
        const task_title = newForm.querySelector('.form_title');
        const date_Wrapper = newForm.querySelector(".date_Wrapper");
        const form_add_button = newForm.lastChild.childNodes[1];
        const form_cancel_button = newForm.lastChild.childNodes[3];

 
    

        // update formEnabled so that only one edit form can exist in the webpage
        updateIsFormEnabled(true);
        // store formInfo (title, date, etc) so it can be accessed later
       

        // listen 
        const dateInput = document.querySelector('.datepicker-input');
        const date_value = document.querySelector('.date_value');
        dateInput.addEventListener('input', () => {
            const date_value = document.querySelector('.date_value');
            const dateInput = document.querySelector('.datepicker-input');
            date_value.textContent = (0,_formatDate__WEBPACK_IMPORTED_MODULE_2__.chooseDate)(dateInput.value);
            task_title.focus()
        });

        formLocation.store_Info(
            dateSection, 
            form_add_button, 
            form_cancel_button, 
            newForm, 
            task_title,
            dateInput,
            date_value,
            theElementObject,
   
        );
        // initialilize
        addTaskButton.disable();
        task_title.focus();
     
        // enable button if user input text is greater than one. Disable button if not.

   
        

        // listens for keypress so that "enter" and "cancel" key works
        window.addEventListener("keydown", detectKeyPress);

        if(getIsEditModeEnable()) {
            addTaskButton.enable();
            task_title.value = theElementObject.theTitle;

            if(theElementObject.date !== '') {
                date_value.textContent = (0,_formatDate__WEBPACK_IMPORTED_MODULE_2__.chooseDate)(theElementObject.date);
                dateInput.value = theElementObject.date;
            }

            editElement.insertAdjacentElement("afterend", newForm);
            task_title.focus();

            form_cancel_button.addEventListener('click', () => {
                _task__WEBPACK_IMPORTED_MODULE_1__.addTask.create(theElementObject.theTitle, theElementObject.date);
                updateIsEditModeEnable(false);
                remove();
            })

            form_add_button.addEventListener("click", () => {
                theElementObject.theTitle =task_title.value;
                theElementObject.date =dateInput.value;
                updateIsEditModeEnable(false);
                (0,_task__WEBPACK_IMPORTED_MODULE_1__.editTask)(theElementObject);
                remove();
            });

            
        } else {
            form_cancel_button.addEventListener("click", () => {
                remove();
                addTaskButton.create(formLocation.get_Info().dateSection);
    
            });
            form_add_button.addEventListener("click", addTaskButtonHandler);
        }

        task_title.addEventListener('input', () => {
            if(task_title.value.length > 0) {
                addTaskButton.enable();
            } else {
                addTaskButton.disable();
            }
        })

    }


    const addTaskButtonHandler = () => {
        const task_title = document.querySelector('.form_title');
        const date_Input = document.querySelector('.datepicker-input');
        const date_value = document.querySelector('.date_value');
        
        _task__WEBPACK_IMPORTED_MODULE_1__.addTask.create(task_title.value, date_Input.value)
        task_title.value = "";
        task_title.focus();
        addTaskButton.disable();
        date_Input.value='';
        date_value.textContent = 'Calendar';
    }
    // removes the event listeners, the elements, and recreate addTask button. 
    const remove = () => {

        if(showForm.getIsFormEnabled()) {
            formLocation.get_Info().newForm.remove();
            window.removeEventListener("keydown", detectKeyPress);
        
            updateIsFormEnabled(false);
        }

    }

    return {
        create, 
        updateIsFormEnabled, 
        getIsFormEnabled,  
        updateIsEditModeEnable,
        getIsEditModeEnable,
        remove,
        addTaskButtonHandler
    }
})();


const addTaskButton = (() => {
    const remove = (theButton) => {
        theButton.remove();
    }

    const create = (dateSection) => {
        const newAddTaskBtn = document.createElement('li');
        newAddTaskBtn.classList.add('plus_add_button');
        // add the HTML append to NewAddTaskBtn
        const addTaskFragmentHTMl = document.createRange().createContextualFragment(_html_tags__WEBPACK_IMPORTED_MODULE_0__.addTaskButton);
        newAddTaskBtn.appendChild(addTaskFragmentHTMl);

        //append it to the webpage
        dateSection.appendChild(newAddTaskBtn);
    }

    const disable = () => {
        const form_add_button = formLocation.get_Info().form_add_button;
        form_add_button.classList.add('disabled')
        formLocation.get_Info().form_add_button.disabled = true;
    }

    const enable = () => {
        const form_add_button = formLocation.get_Info().form_add_button;
        form_add_button.classList.remove('disabled')
        formLocation.get_Info().form_add_button.disabled = false;
    }

    return {remove, create, disable, enable}
})();

const detectKeyPress = (e) => {
    const task_title = document.querySelector('.form_title');
    const dateInput = document.querySelector('.datepicker-input');

    if(e.key === "Escape") {
        const theElementObject = formLocation.get_Info().theElementObject;
        if(showForm.getIsEditModeEnable()) {
            _task__WEBPACK_IMPORTED_MODULE_1__.addTask.create(theElementObject.theTitle, theElementObject.date);
            showForm.updateIsEditModeEnable(false);
            showForm.remove();
        } else {
            showForm.remove();
            addTaskButton.create(formLocation.get_Info().dateSection);
        }
    } else if(e.key === 'Enter' && task_title.value.length > 0 ) {
        const theElementObject = formLocation.get_Info().theElementObject;
        if(theElementObject !== undefined) {
            theElementObject.theTitle =task_title.value;
            theElementObject.date =dateInput.value;
            showForm.updateIsEditModeEnable(false);
            (0,_task__WEBPACK_IMPORTED_MODULE_1__.editTask)(theElementObject);
            showForm.remove()
        } else {
            showForm.addTaskButtonHandler();

        }


        

    }
}

// retrieve location of the form and then be able to delete it
const formLocation = (() => {
    let formInfo = {};
    const store_Info = (dateSection, form_add_button, form_cancel_button, newForm, task_title, task_dueDate, date_value, theElementObject) => {
        formInfo = {
            dateSection,
            form_add_button,
            form_cancel_button,
            newForm,
            task_title,
            task_dueDate,
            date_value,
            theElementObject
        }
        return formInfo;
    }

    const get_Info = () => {
        return formInfo;
    } 


    return {
        store_Info,
        get_Info,
    }
    
})()




/***/ }),

/***/ "./src/js/tasks/sort.js":
/*!******************************!*\
  !*** ./src/js/tasks/sort.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sort": () => (/* binding */ sort)
/* harmony export */ });
const sort = () => {

}



/***/ }),

/***/ "./src/js/tasks/task.js":
/*!******************************!*\
  !*** ./src/js/tasks/task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "taskArray": () => (/* binding */ taskArray),
/* harmony export */   "createObject": () => (/* binding */ createObject),
/* harmony export */   "count": () => (/* binding */ count),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "markCompleteTask": () => (/* binding */ markCompleteTask),
/* harmony export */   "hideSection": () => (/* binding */ hideSection),
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _html_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-tags */ "./src/js/html-tags.js");
/* harmony import */ var _showForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showForm */ "./src/js/tasks/showForm.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskConstructor */ "./src/js/tasks/taskConstructor.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatDate */ "./src/js/tasks/formatDate.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage */ "./src/js/storage.js");









const taskArray = [];
const addTask = (() => {

    const create = (task_title, date_input) => {
        // all the values needed to be added to create task
        // create task object
        const newTaskObject = new _taskConstructor__WEBPACK_IMPORTED_MODULE_2__.default(task_title, date_input);
        taskArray.push(newTaskObject);
        createObject(newTaskObject.id, newTaskObject.title, newTaskObject.date);
    }


    return {
        create,
    }
})()
const editTask = (TheTaskObject) => {
    createObject(TheTaskObject.id, TheTaskObject.title, TheTaskObject.date);

};

const count = () => {
    countOfCompleted = 0;
    taskArray.forEach(el => {
        if(el.completed === true) {
            console.log(el)
            countOfCompleted++;
        }
    })
    const completedTaskCount = document.querySelector('.total_completed_tasks');
    completedTaskCount.textContent = `(${countOfCompleted})`;
}
const createObject = (id, title, date, completed) => {
    const dateSection = (0,_formatDate__WEBPACK_IMPORTED_MODULE_3__.findCorrectSection)(date);
    let appendBeforeThisChild = dateSection.lastElementChild;
    if(_showForm__WEBPACK_IMPORTED_MODULE_1__.showForm.getIsFormEnabled() && dateSection.querySelector('.form_wrapper') !== null) {
        appendBeforeThisChild = dateSection.querySelector('.form_wrapper');
    }

    const newTask = document.createElement('li');
    newTask.dataset.id = id;
    newTask.classList.add('task_list_item');


    const taskHTML = document.createRange()
        .createContextualFragment(
            _html_tags__WEBPACK_IMPORTED_MODULE_0__.task(
                title,
                date,
            ));

    //apending the class to webpage
    newTask.appendChild(taskHTML);

    const dateCSS = newTask.querySelector('.item_due') ;
    if(date !== undefined && date !== '' && date !== "No Date") {
        dateCSS.style.padding = "3px 10px";        
    } else {
        dateCSS.style.padding = '';
    }
    countOfCompleted = 0;
    taskArray.forEach(el => {
        if(el.completed === true) {
            countOfCompleted++;
        }
    })
    const completedTaskCount = document.querySelector('.total_completed_tasks');
    completedTaskCount.textContent = `(${countOfCompleted})`;

    if(completed === true) {
        const checkbutton = newTask.querySelector('.item_check');
        const deleteButton = newTask.querySelector('.edit_icon');
        deleteButton.style.pointerEvents = 'none';
        checkbutton.style.backgroundColor = 'rgba(168, 83, 83, 0.5)';
        checkbutton.childNodes[0].style.display = 'block';
        checkbutton.nextElementSibling.style.textDecoration = 'line-through';
        const completedSection = document.querySelector('[data-date-list="completed"]')
        completedSection.appendChild(newTask)

    } else {
        dateSection.insertBefore(newTask, appendBeforeThisChild)
    }

   
    (0,_storage__WEBPACK_IMPORTED_MODULE_4__.changeLayout)();
    _storage__WEBPACK_IMPORTED_MODULE_4__.storage.saveLocal();
}


const deleteTask = (e) => {
    let neededElement = getTask(e);

    taskArray.splice(taskArray.indexOf(neededElement), 1);

    const itemToBeDeleted = e.target.parentNode.parentNode;
    itemToBeDeleted.remove();

    const completedTaskCount = document.querySelector('.total_completed_tasks');
    countOfCompleted = 0;
    taskArray.forEach(el => {
        if(el.completed === true) {
            countOfCompleted++;
        }
    })

    completedTaskCount.textContent = `(${countOfCompleted})`;
    _storage__WEBPACK_IMPORTED_MODULE_4__.storage.saveLocal();

}
const getTask = (e, checkCompleted) => {
    let itemToBeDeleted = e.target.parentNode.parentNode;
    if(checkCompleted === true) {
       itemToBeDeleted = e.target.parentNode; 
    }
    const itemToBeDeleted_ID = itemToBeDeleted.dataset.id;
    let neededElement = null; 
    taskArray.map(el => {
        if(el.id === itemToBeDeleted_ID) {
            return neededElement = el;

        }
    });
    return neededElement;
}
let countOfCompleted = 0;
const markCompleteTask = (e) => {
    const completedSection = document.querySelector('[data-date-list="completed"]')
    const completedTaskCount = document.querySelector('.total_completed_tasks');
    const completedItem = e.target.parentNode;

    countOfCompleted = 0;
    taskArray.forEach(el => {
        if(el.completed === true) {
            countOfCompleted++;
        }
    })
    completedTaskCount.textContent = `(${countOfCompleted})`;

    completedSection.appendChild(completedItem);
    _storage__WEBPACK_IMPORTED_MODULE_4__.storage.saveLocal();

};


const hideSection = (e, condition) => {
    const completedList = e.target.parentNode.childNodes[3];
    if(condition === true) {
        completedList.style.display='none'
        
    } else if(condition === false){
        completedList.style.display='block'
    } 
}





/***/ }),

/***/ "./src/js/tasks/taskConstructor.js":
/*!*****************************************!*\
  !*** ./src/js/tasks/taskConstructor.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showForm */ "./src/js/tasks/showForm.js");
/* harmony import */ var _html_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-tags */ "./src/js/html-tags.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatDate */ "./src/js/tasks/formatDate.js");




class Task {
    constructor(theTitle, dueDate, completed = false) {
        this.id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        this.title = theTitle;
        this.dueDate = dueDate;
        this.completed = completed;
    }
    set completedTask(newValue) {
        this.completed = newValue;
    }

    getId() {
        return this.id;
    }

    get completedTask() {
        return this.completed;
    }

    set theTitle(newTitle) {
        this.title = newTitle;
    }

    get theTitle() {
        return this.title;
    }

    set date(newDueDate) {
        this.dueDate = newDueDate; 
    }

    get date() {
        return this.dueDate;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/js/domController.js");


// import {formatDate} from "./tasks/formatDate";



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblllYXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc01vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb21vcnJvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9jNDRlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaHRtbC10YWdzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90YXNrcy9mb3JtYXREYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90YXNrcy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFza3Mvc29ydC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFza3MvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvdGFza3MvdGFza0NvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQ087QUFDaEM7QUFDbkUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsaURBQTZCO0FBQ3RHO0FBQ0EsZ0RBQWdELGlCQUFpQixrQkFBa0IsOEJBQThCLHVCQUF1QixHQUFHLE9BQU8sMkJBQTJCLG1KQUFtSixjQUFjLGVBQWUsR0FBRyxRQUFRLDBCQUEwQixHQUFHLHFCQUFxQixtQ0FBbUMsaUJBQWlCLG1CQUFtQixHQUFHLGVBQWUscUJBQXFCLDJCQUEyQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0Isd0JBQXdCLHdEQUF3RCxHQUFHLDJCQUEyQixvQkFBb0Isc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsOEJBQThCLDBCQUEwQixHQUFHLG1CQUFtQixzQkFBc0Isc0NBQXNDLHNCQUFzQixHQUFHLCtCQUErQixvQkFBb0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLEdBQUcscUNBQXFDLG1CQUFtQixHQUFHLGdDQUFnQyx5QkFBeUIsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsd0NBQXdDLHlCQUF5QixH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VyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxhQUFhLGVBQWUsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFFBQVEsS0FBSyxXQUFXLGFBQWEsZUFBZSxhQUFhLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLE9BQU8sTUFBTSxhQUFhLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsYUFBYSxlQUFlLGFBQWEsTUFBTSxNQUFNLFdBQVcsYUFBYSxlQUFlLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFB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QUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFT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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0w7QUFDQSxLO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLd0M7QUFDQTtBQUNFOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsSUFBSSxFOzs7Ozs7VUMxQ25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7QUNmNEI7O0FBRTVCLFdBQVcsV0FBVztBQUN3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibWFpbiB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweCAxMDBweCAxMDBweCAxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdC1uYXYge1xcbiAgY29sb3I6ICNmZmZmZmZjNztcXG4gIHBhZGRpbmc6IDQwcHggMCAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4xNzEpO1xcbn1cXG4ubGlzdC1uYXYgLmxpc3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmxpc3QtbmF2IC5saXN0LXNvcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmxpc3QtbmF2IC5saXN0LXNvcnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubGlzdC1jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTYpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5saXN0LWNvbnRlbnQgLnRhc2staGVhZGluZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0LWNvbnRlbnQgLnRhc2staGVhZGluZzpob3ZlciB7XFxuICBjb2xvcjogI2U0NGY0YTtcXG59XFxuLmxpc3QtY29udGVudCAuc2VjdGlvbi10aXRsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxpc3QtY29udGVudCAudGFza19saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5saXN0LWNvbnRlbnQgLnRvdGFsX2NvbXBsZXRlZF90YXNrcyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxpc3QtY29udGVudCAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxpc3QtY29udGVudCAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuLmxpc3QtY29udGVudCAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uOmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi50YXNrX2xpc3RfaXRlbSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDFweCAxcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjI4Nyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX2NoZWNrIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fY2hlY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjgsIDgzLCA4MywgMC4yNzQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fY2hlY2s6aG92ZXIgLmNoZWNrbWFyayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX2NoZWNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgNDMsIDQzLCAwLjYyMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fY2hlY2sgLmNoZWNrbWFyayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogMnB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxufVxcbi50YXNrX2xpc3RfaXRlbSAuaXRlbV90aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrX2xpc3RfaXRlbSAuaXRlbV90b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fdG9vbHMgLml0ZW1fZHVlIHtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5MWMyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX3Rvb2xzIC5lZGl0X2ljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX3Rvb2xzIC5lZGl0X2ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fdG9vbHMgLmRlbGV0ZV9pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxufVxcbi50YXNrX2xpc3RfaXRlbSAuaXRlbV90b29scyAuZGVsZXRlX2ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucGx1c19hZGRfYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY29sb3I6IHJnYmEoMjAyLCAyMDIsIDIwMiwgMC42OTgpO1xcbn1cXG4ucGx1c19hZGRfYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXG59XFxuLnBsdXNfYWRkX2J1dHRvbjpob3ZlciAucGx1cy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5MWMyO1xcbn1cXG4ucGx1c19hZGRfYnV0dG9uIC5wbHVzLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBsdXNfYWRkX2J1dHRvbiAuYWRkX3Rhc2sge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5pdGVtX2R1ZS1vdmVyZHVlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDI1MjU7XFxufVxcblxcbi5pdGVtX2R1ZS10b2RheSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMnB4IDdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhiMDAwO1xcbn1cXG5cXG4uaXRlbV9kdWUtc29tZWRheSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMnB4IDdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFjMjA2O1xcbn1cXG5cXG4uc3VidGFzayB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5idXR0b24tc3R5bGUxIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzkxYzI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1Nik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uLXN0eWxlMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDIwMiwgMjAyLCAyMDIsIDAuNjk4KTtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnBvcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTQwcHg7XFxuICB0b3A6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnBvcHBlciAuZHJvcF9kb3duX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtX3RvcCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDFweCAxcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjI4Nyk7XFxufVxcblxcbi5mb3JtX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm1fZXh0cmEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybV9leHRyYSAuZm9ybV90b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmZvcm1fZXh0cmEgLmZvcm1fdG9vbHMgLmZvcm1faWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTYpO1xcbn1cXG5cXG4uZm9ybV9ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubGlzdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDMwcHggMTAwcHggMzBweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnRhc2tfbGlzdF9pdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAudGFza19saXN0X2l0ZW0gPiAuaXRlbV90aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBpbml0aWFsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxuICAudGFza19saXN0X2l0ZW0gLml0ZW1fZHVlIHtcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcbi5kYXRlX1dyYXBwZXIsIG9wdGlvbiwgLmltcG9ydGFuY2VfV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBnYXA6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMDUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmRhdGVfV3JhcHBlcjpob3Zlciwgb3B0aW9uOmhvdmVyLCAuaW1wb3J0YW5jZV9XcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMDUpO1xcbn1cXG4uZGF0ZV9XcmFwcGVyIC5kYXRlX3ZhbHVlLCBvcHRpb24gLmRhdGVfdmFsdWUsIC5pbXBvcnRhbmNlX1dyYXBwZXIgLmRhdGVfdmFsdWUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XFxufVxcbi5kYXRlX1dyYXBwZXIgLmRhdGVwaWNrZXItdG9nZ2xlLCBvcHRpb24gLmRhdGVwaWNrZXItdG9nZ2xlLCAuaW1wb3J0YW5jZV9XcmFwcGVyIC5kYXRlcGlja2VyLXRvZ2dsZSB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuLmRhdGVfV3JhcHBlciAuZGF0ZXBpY2tlci10b2dnbGUtYnV0dG9uLCBvcHRpb24gLmRhdGVwaWNrZXItdG9nZ2xlLWJ1dHRvbiwgLmltcG9ydGFuY2VfV3JhcHBlciAuZGF0ZXBpY2tlci10b2dnbGUtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZmlsdGVyOiBpbnZlcnQoNTElKSBzZXBpYSg3MiUpIHNhdHVyYXRlKDI0NjMlKSBodWUtcm90YXRlKDE1OWRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG4uZGF0ZV9XcmFwcGVyIC5kYXRlcGlja2VyLWlucHV0LCBvcHRpb24gLmRhdGVwaWNrZXItaW5wdXQsIC5pbXBvcnRhbmNlX1dyYXBwZXIgLmRhdGVwaWNrZXItaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTZweDtcXG4gIHRvcDogLTEycHg7XFxuICB3aWR0aDogODlweDtcXG4gIGhlaWdodDogMzhweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZGF0ZV9XcmFwcGVyIC5kYXRlcGlja2VyLWlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsIG9wdGlvbiAuZGF0ZXBpY2tlci1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLCAuaW1wb3J0YW5jZV9XcmFwcGVyIC5kYXRlcGlja2VyLWlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltcG9ydGFuY2VfV3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1Nik7XFxufVxcblxcbm9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fdmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL19saXN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL19taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fdXRpbGl0eS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9fdG9vbHRpcHMuc2Nzc1wiLFwid2VicGFjazovLy4vX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vX21lZGlhcXVlcmllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkNEUztFREVULGtCQUFBO0FFSEo7O0FDTEE7RUFDSSxzQkFBQTtFQUNBLHdJQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURRSjs7QUNMQTtFQUNJLHFCQUFBO0FEUUo7O0FFWEE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FGY0o7O0FFWEE7RUFDSSxnQkhIZ0I7RUdJaEIsc0JBQUE7RUNYQSxhQUFBO0VBQ0EsbUJEVzJCO0VDVjNCLDhCRFVnQztFQ1RoQyxtQkFBQTtFRFVBLG1CQUFBO0VBQ0EsbURITmlCO0FDdUJyQjtBRWZJO0VDTEEsZUFBQTtFQUNBLGlCQUFBO0FIdUJKO0FFaEJJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUZrQlI7QUVqQlE7RUFDSSxxQkFBQTtBRm1CWjs7QUViQTtFQUNJLGlCQUFBO0VBQ0EsaUNIckJjO0VHc0JkLGlCQUFBO0FGZ0JKO0FFZkk7RUNsQkEsZUphUztFSVpULGlCQUFBO0VEbUJJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FGa0JSO0FFaEJRO0VBQ0ksY0FBQTtBRmtCWjtBRWRJO0VBQ0ksb0JBQUE7QUZnQlI7QUViSTtFQUNJLG1CQUFBO0FGZVI7QUViSTtFQUNJLG9CQUFBO0FGZVI7QUViSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUZlUjtBRWRRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUZnQlo7QUViUTtFQUNJLGVBQUE7QUZlWjs7QUVSQTtFQ3JESSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EseUJKZG1CO0VJZW5CLDhEQUFBO0VBM0JBLGFBQUE7RUFDQSxtQkQ0RTJCO0VDM0UzQiw4QkQyRWdDO0VDMUVoQyxtQkFBQTtFRDJFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FGa0JKO0FFakJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBRm1CUjtBRWxCUTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtBRm9CWjtBRWxCWTtFQUNJLGNBQUE7QUZvQmhCO0FFakJRO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtBRm1CWjtBRWhCUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBRmtCWjtBRWRJO0VBQ0ksaUJBQUE7RUFDQSxlSG5GTTtFR29GTix1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FGZ0JSO0FFWkk7RUN6SEEsYUFBQTtFQUNBLG1CRHlIK0I7RUN4SC9CLHVCRHdIb0M7RUN2SHBDLG1CQUFBO0VEd0hJLFFBQUE7QUZpQlI7QUVmUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkgvR0s7RUdnSEwsbUJBQUE7QUZpQlo7QUVmUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FGaUJaO0FFaEJZO0VBQ0kscUJBQUE7QUZrQmhCO0FFYlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBRmVaO0FFZFk7RUFDSSxxQkFBQTtBRmdCaEI7O0FFVkE7RUM3SkksYUFBQTtFQUNBLG1CRDZKMkI7RUM1SjNCLHdCRDRKZ0M7RUMzSmhDLG1CQUFBO0VENEpBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlDSDVJZ0I7QUM0SnBCO0FFZkk7RUFDSSxpQ0gvSVc7QUNnS25CO0FFaEJRO0VBQ0ksbUJBQUE7RUFDQSx5QkhwSks7QUNzS2pCO0FFZkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FGaUJSO0FFZkk7RUFDSSxvQkFBQTtBRmlCUjs7QUkvTEE7RURtQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUN0Q0EseUJMVWM7QUM2TGxCOztBSW5NQTtFRDZCSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQ2hDQSx5QkxLYztBQ3NNbEI7O0FJdE1BO0VEc0JJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VDekJBLHlCTERjO0FDK01sQjs7QUl2TUE7RUFDSSxrQkFBQTtBSjBNSjs7QUl4TUE7RURJSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VDSkEseUJBQUE7RUFDQSxpQ0xUZTtFS1dmLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUo0TUo7O0FJeE1BO0VBQ0ksNkJBQUE7RURSQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VDUUEsaUNMcEJlO0VLcUJmLDBCQUFBO0VBQ0EsZUFBQTtBSjZNSjs7QUl6TUE7RUFDSSxpQ0wxQmdCO0FDc09wQjs7QUl6TUE7RUFDSSxZQUFBO0FKNE1KOztBSy9QQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFFQSx5QkFBQTtFQUNBLGFBQUE7QUxpUUo7QUtoUUk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBTGtRUjs7QU03UUE7RUhxQkksYUFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLHlCSmRtQjtFSWVuQiw4REFBQTtBSDJQSjs7QU1qUkE7RUFFSSxlUHVCVTtFT3RCVixpQ1BHYztFT0ZkLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FObVJKOztBTWhSQTtFSG5CSSxhQUFBO0VBQ0EsbUJHbUIyQjtFSGxCM0IsOEJHa0JnQztFSGpCaEMsbUJBQUE7QUh1U0o7QU1yUkk7RUhyQkEsYUFBQTtFQUNBLG1CR3FCK0I7RUhwQi9CLHdCR29Cb0M7RUhuQnBDLG1CQUFBO0VHb0JJLGNBQUE7RUFDQSxTQUFBO0FOMFJSO0FNdlJRO0VBQ0ksWUFBQTtFSElSLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUdKUSxzQkFBQTtFQUNBLGlDUHBCTTtBQytTbEI7O0FNdFJBO0VBQ0ksbUJBQUE7QU55Uko7O0FPOVRBO0VBQ0k7SUFDSSxxQ0FBQTtFUGlVTjs7RU85VEU7SUFDSSxZQUFBO0lBQ0EsU0FBQTtJQVNBLHdCQUFBO0lBQ0EsdUJBQUE7RVB5VE47RU9qVU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFUG1VVjtFTzlUTTtJQUNJLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VQZ1VWO0FBQ0Y7QUE1VUE7RUdaSSxhQUFBO0VBQ0EsbUJIWTJCO0VHWDNCLDhCSFdnQztFR1ZoQyxtQkFBQTtFSFdBLGVEaUJRO0VDaEJSLFFBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFpVko7QUEvVUk7RUFDSSw0Q0RLZTtBQzRVdkI7QUE5VUk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBZ1ZSO0FBN1VJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQStVUjtBQTVVSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0EsZ0dBQUE7QUE4VVI7QUEzVU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBNlVSO0FBM1VNO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBNlVSOztBQXhVQTtFQUVJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDRGhFYztBQzBZbEI7O0FBdlVBO0VBRUkseUJBQUE7QUF5VUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwidmFyXFxcIjtcXHJcXG5AdXNlIFxcXCJtaXhpblxcXCI7XFxyXFxuXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyLiRtYWluLWNvbG9yO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFxyXFxuIFxcclxcbn1cXHJcXG5cIixcIi8vZGFyayB0aGVtZSBtb2RlXFxyXFxuXFxyXFxuLy8gQ29sb3IgLS0tLS0tLS0tLS0tLS0tLS0+ICAgICAgIFxcclxcblxcclxcbi8vYmFzZVxcclxcbiRoZWFkaW5nLWNvbG9yOiAjMjIyMjIyO1xcclxcbiRtYWluLWNvbG9yOiAjMzMzMzMzO1xcclxcblxcclxcbi8vIGxpc3RcXHJcXG4kbGlzdEhlYWRpbmctY29sb3I6ICNmZmZmZmZjNztcXHJcXG4kYm9yZGVyYm90dG9tLWNvbG9yOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjE3MSk7ICBcXHJcXG5cXHJcXG4vL3Rhc2tcXHJcXG4kdGFza1RpdGxlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXHJcXG4kdGFzay1iYWNrZ3JvdW5kQ29sb3I6IHJnYigzOSwgMzksIDM5KTtcXHJcXG5cXHJcXG4vL2R1ZSBkYXRlIFxcclxcbiR0YXNrLWRhdGVDb2xvcjE6IHJnYigxOTIsIDM3LCAzNyk7XFxyXFxuJHRhc2stZGF0ZUNvbG9yMjogcmdiKDIxNiwgMTc2LCAwKTtcXHJcXG4kdGFzay1kYXRlQ29sb3IzOiByZ2IoMTEzLCAxOTQsIDYpO1xcclxcblxcclxcbi8vYWRkIHRhc2sgXFxyXFxuJHBsdXNJY29uLWNvbG9yOiByZ2IoNjAsIDE0NSwgMTk0KTsgIFxcclxcbi8vIGVkaXQgYnV0dG9uIFxcclxcbiRidXR0b25UZXh0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXHJcXG4kcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjAyLCAyMDIsIDIwMiwgMC42OTgpO1xcclxcblxcclxcbi8vIGRhdGVcXHJcXG4kZGF0ZUJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIwNSk7XFxyXFxuJGRhdGViYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTA1KTtcXHJcXG4vL3NpemUgXFxyXFxuJHRpdGxlLXNpemU6IDIwcHg7XFxyXFxuJG5vcm1hbC1zaXplOiAxNnB4O1xcclxcbiRkYXRlLXNpemU6IDE0cHg7XFxyXFxuXFxyXFxuLy8gc2l6aW5nIC0tLS0tLS0tLS0tLS0tLS0+XFxyXFxuJGhlYWRpbmctd2lkdGg6IDcwcHg7IFwiLFwibWFpbiB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweCAxMDBweCAxMDBweCAxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdC1uYXYge1xcbiAgY29sb3I6ICNmZmZmZmZjNztcXG4gIHBhZGRpbmc6IDQwcHggMCAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4xNzEpO1xcbn1cXG4ubGlzdC1uYXYgLmxpc3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmxpc3QtbmF2IC5saXN0LXNvcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmxpc3QtbmF2IC5saXN0LXNvcnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubGlzdC1jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTYpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5saXN0LWNvbnRlbnQgLnRhc2staGVhZGluZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0LWNvbnRlbnQgLnRhc2staGVhZGluZzpob3ZlciB7XFxuICBjb2xvcjogI2U0NGY0YTtcXG59XFxuLmxpc3QtY29udGVudCAuc2VjdGlvbi10aXRsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxpc3QtY29udGVudCAudGFza19saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5saXN0LWNvbnRlbnQgLnRvdGFsX2NvbXBsZXRlZF90YXNrcyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxpc3QtY29udGVudCAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxpc3QtY29udGVudCAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuLmxpc3QtY29udGVudCAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uOmFjdGl2ZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi50YXNrX2xpc3RfaXRlbSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDFweCAxcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjI4Nyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX2NoZWNrIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fY2hlY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjgsIDgzLCA4MywgMC4yNzQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fY2hlY2s6aG92ZXIgLmNoZWNrbWFyayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX2NoZWNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgNDMsIDQzLCAwLjYyMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fY2hlY2sgLmNoZWNrbWFyayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogMnB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxufVxcbi50YXNrX2xpc3RfaXRlbSAuaXRlbV90aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrX2xpc3RfaXRlbSAuaXRlbV90b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fdG9vbHMgLml0ZW1fZHVlIHtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5MWMyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX3Rvb2xzIC5lZGl0X2ljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG59XFxuLnRhc2tfbGlzdF9pdGVtIC5pdGVtX3Rvb2xzIC5lZGl0X2ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4udGFza19saXN0X2l0ZW0gLml0ZW1fdG9vbHMgLmRlbGV0ZV9pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxufVxcbi50YXNrX2xpc3RfaXRlbSAuaXRlbV90b29scyAuZGVsZXRlX2ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucGx1c19hZGRfYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY29sb3I6IHJnYmEoMjAyLCAyMDIsIDIwMiwgMC42OTgpO1xcbn1cXG4ucGx1c19hZGRfYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXG59XFxuLnBsdXNfYWRkX2J1dHRvbjpob3ZlciAucGx1cy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5MWMyO1xcbn1cXG4ucGx1c19hZGRfYnV0dG9uIC5wbHVzLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBsdXNfYWRkX2J1dHRvbiAuYWRkX3Rhc2sge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5pdGVtX2R1ZS1vdmVyZHVlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDI1MjU7XFxufVxcblxcbi5pdGVtX2R1ZS10b2RheSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMnB4IDdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhiMDAwO1xcbn1cXG5cXG4uaXRlbV9kdWUtc29tZWRheSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMnB4IDdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFjMjA2O1xcbn1cXG5cXG4uc3VidGFzayB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5idXR0b24tc3R5bGUxIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzkxYzI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1Nik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uLXN0eWxlMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDIwMiwgMjAyLCAyMDIsIDAuNjk4KTtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLnBvcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTQwcHg7XFxuICB0b3A6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnBvcHBlciAuZHJvcF9kb3duX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtX3RvcCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDFweCAxcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjI4Nyk7XFxufVxcblxcbi5mb3JtX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm1fZXh0cmEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybV9leHRyYSAuZm9ybV90b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmZvcm1fZXh0cmEgLmZvcm1fdG9vbHMgLmZvcm1faWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTYpO1xcbn1cXG5cXG4uZm9ybV9ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubGlzdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDMwcHggMTAwcHggMzBweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnRhc2tfbGlzdF9pdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAudGFza19saXN0X2l0ZW0gPiAuaXRlbV90aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBpbml0aWFsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxuICAudGFza19saXN0X2l0ZW0gLml0ZW1fZHVlIHtcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcbi5kYXRlX1dyYXBwZXIsIG9wdGlvbiwgLmltcG9ydGFuY2VfV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBnYXA6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMDUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmRhdGVfV3JhcHBlcjpob3Zlciwgb3B0aW9uOmhvdmVyLCAuaW1wb3J0YW5jZV9XcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMDUpO1xcbn1cXG4uZGF0ZV9XcmFwcGVyIC5kYXRlX3ZhbHVlLCBvcHRpb24gLmRhdGVfdmFsdWUsIC5pbXBvcnRhbmNlX1dyYXBwZXIgLmRhdGVfdmFsdWUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XFxufVxcbi5kYXRlX1dyYXBwZXIgLmRhdGVwaWNrZXItdG9nZ2xlLCBvcHRpb24gLmRhdGVwaWNrZXItdG9nZ2xlLCAuaW1wb3J0YW5jZV9XcmFwcGVyIC5kYXRlcGlja2VyLXRvZ2dsZSB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuLmRhdGVfV3JhcHBlciAuZGF0ZXBpY2tlci10b2dnbGUtYnV0dG9uLCBvcHRpb24gLmRhdGVwaWNrZXItdG9nZ2xlLWJ1dHRvbiwgLmltcG9ydGFuY2VfV3JhcHBlciAuZGF0ZXBpY2tlci10b2dnbGUtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcXFwiKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDUxJSkgc2VwaWEoNzIlKSBzYXR1cmF0ZSgyNDYzJSkgaHVlLXJvdGF0ZSgxNTlkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMDElKTtcXG59XFxuLmRhdGVfV3JhcHBlciAuZGF0ZXBpY2tlci1pbnB1dCwgb3B0aW9uIC5kYXRlcGlja2VyLWlucHV0LCAuaW1wb3J0YW5jZV9XcmFwcGVyIC5kYXRlcGlja2VyLWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC02cHg7XFxuICB0b3A6IC0xMnB4O1xcbiAgd2lkdGg6IDg5cHg7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmRhdGVfV3JhcHBlciAuZGF0ZXBpY2tlci1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLCBvcHRpb24gLmRhdGVwaWNrZXItaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciwgLmltcG9ydGFuY2VfV3JhcHBlciAuZGF0ZXBpY2tlci1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbXBvcnRhbmNlX1dyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTYpO1xcbn1cXG5cXG5vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcXG59XCIsXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XCIsXCJAdXNlIFxcXCJ2YXJcXFwiO1xcclxcbkB1c2UgXFxcIm1peGluXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5saXN0LW5hdiB7XFxyXFxuICAgIGNvbG9yOiB2YXIuJGxpc3RIZWFkaW5nLWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDAgMTBweCAwO1xcclxcbiAgICBAaW5jbHVkZSBtaXhpbi5mbGV4LWNlbnRlcihyb3csIHNwYWNlLWJldHdlZW4pO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIuJGJvcmRlcmJvdHRvbS1jb2xvcjtcXHJcXG5cXHJcXG4gICAgLmxpc3QtaGVhZGluZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtaXhpbi5iaWctdGl0bGU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxpc3Qtc29ydCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxpc3QtY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBjb2xvcjogdmFyLiR0YXNrVGl0bGUtY29sb3I7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAudGFzay1oZWFkaW5nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1peGluLm1lZC10aXRsZTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2U0NGY0YTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VjdGlvbi10aXRsZSB7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFza19saXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRvdGFsX2NvbXBsZXRlZF90YXNrcyB7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuc2hvd19jb21wbGV0ZWRfdGFza19pY29uIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHJpZ2h0OiAzcHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59ICBcXHJcXG5cXHJcXG4udGFza19saXN0X2l0ZW0ge1xcclxcbiAgICBAaW5jbHVkZSBtaXhpbi50YXNrX2xpc3RfaXRlbTtcXHJcXG4gICAgQGluY2x1ZGUgbWl4aW4uZmxleC1jZW50ZXIocm93LCBzcGFjZS1iZXR3ZWVuKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICAuaXRlbV9jaGVjayB7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC41KTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjgsIDgzLCA4MywgMC4yNzQpIDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNoZWNrbWFyayB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgNDMsIDQzLCAwLjYyMyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5jaGVja21hcmsge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAycHg7XFxyXFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW1fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IHZhci4kbm9ybWFsLXNpemU7XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtX3Rvb2xzIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1peGluLmZsZXgtY2VudGVyKHJvdywgY2VudGVyKTtcXHJcXG4gICAgICAgIGdhcDogMnB4O1xcclxcblxcclxcbiAgICAgICAgLml0ZW1fZHVlIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IC43ZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhci4kcGx1c0ljb24tY29sb3I7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5lZGl0X2ljb24ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAuZGVsZXRlX2ljb24ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wbHVzX2FkZF9idXR0b24ge1xcclxcbiAgICBAaW5jbHVkZSBtaXhpbi5mbGV4LWNlbnRlcihyb3csIGluaXRpYWwpO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhci4kcGxhY2Vob2xkZXItY29sb3I7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY29sb3I6IHZhci4kYnV0dG9uVGV4dC1jb2xvcjtcXHJcXG4gICAgICAgIC5wbHVzLWljb24ge1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyLiRwbHVzSWNvbi1jb2xvcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAucGx1cy1pY29uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXHJcXG4gICAgfVxcclxcbiAgICAuYWRkX3Rhc2sge1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIkB1c2UgXFxcInZhclxcXCI7XFxyXFxuQG1peGluIGZsZXgtY2VudGVyKCRmbGV4LWRpcmVjdGlvbiwgJGZsZXgtY29udGVudCl7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogJGZsZXgtY29udGVudDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1peGluIGZsZXgtY29sdW1uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJpZy10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtZWQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IHZhci4kdGl0bGUtc2l6ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtaXhpbiB0YXNrX2xpc3RfaXRlbSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhci4kdGFzay1iYWNrZ3JvdW5kQ29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAxcHggMXB4IHJnYmEoMTEwLCAxMTAsIDExMCwgMC4yODcpXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtaXhpbiByZW1vdmVfYm9yZGVyLW91dGxpbmUge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGF0ZS1wYWRkaW5nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDdweDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXCIsXCIvLyBVdGlsaXR5IGNsYXNzZXMgdGhhdCBnaXZlIGdlbmVyYWxseSBjb21tb24gc3R5bGluZyBhbmQgY2FuIGJlIHVzZWQgaW4gbWFueSBwbGFjZXNcXHJcXG5cXHJcXG5AdXNlIFxcXCJ2YXJcXFwiO1xcclxcbkB1c2UgXFxcIm1peGluXFxcIjtcXHJcXG5cXHJcXG4uaXRlbV9kdWUtb3ZlcmR1ZSB7XFxyXFxuICAgIEBpbmNsdWRlIG1peGluLmRhdGUtcGFkZGluZztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyLiR0YXNrLWRhdGVDb2xvcjE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pdGVtX2R1ZS10b2RheSB7XFxyXFxuICAgIEBpbmNsdWRlIG1peGluLmRhdGUtcGFkZGluZztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyLiR0YXNrLWRhdGVDb2xvcjI7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pdGVtX2R1ZS1zb21lZGF5IHtcXHJcXG4gICAgQGluY2x1ZGUgbWl4aW4uZGF0ZS1wYWRkaW5nO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIuJHRhc2stZGF0ZUNvbG9yMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnN1YnRhc2sge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi5idXR0b24tc3R5bGUxIHtcXHJcXG4gICAgQGluY2x1ZGUgbWl4aW4ucmVtb3ZlX2JvcmRlci1vdXRsaW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDE0NSwgMTk0KTtcXHJcXG4gICAgY29sb3I6IHZhci4kYnV0dG9uVGV4dC1jb2xvcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5idXR0b24tc3R5bGUyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIEBpbmNsdWRlIG1peGluLnJlbW92ZV9ib3JkZXItb3V0bGluZTtcXHJcXG4gICAgY29sb3I6IHZhci4kYnV0dG9uVGV4dC1jb2xvcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIuJHBsYWNlaG9sZGVyLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZWQge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVwiLFwiQHVzZSBcXFwidmFyXFxcIjtcXHJcXG5AdXNlIFxcXCJtaXhpblxcXCI7XFxyXFxuXFxyXFxuXFxyXFxuLnBvcHBlciAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtNDBweDtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIC5kcm9wX2Rvd25fbWVudSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICBjb2x1bW47XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxufVwiLFwiQHVzZSBcXFwidmFyXFxcIjtcXHJcXG5AdXNlIFxcXCJtaXhpblxcXCI7XFxyXFxuXFxyXFxuLmZvcm1fdG9wIHtcXHJcXG4gICAgQGluY2x1ZGUgbWl4aW4udGFza19saXN0X2l0ZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtX3RpdGxlIHtcXHJcXG4gICAgLy8gQGluY2x1ZGUgbWl4aW4ucmVtb3ZlX2JvcmRlci1vdXRsaW5lO1xcclxcbiAgICBmb250LXNpemU6IHZhci4kbm9ybWFsLXNpemU7XFxyXFxuICAgIGNvbG9yOiB2YXIuJHRhc2tUaXRsZS1jb2xvcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtX2V4dHJhIHtcXHJcXG4gICAgQGluY2x1ZGUgbWl4aW4uZmxleC1jZW50ZXIocm93LCBzcGFjZS1iZXR3ZWVuKTtcXHJcXG4gICAgLmZvcm1fdG9vbHMge1xcclxcbiAgICAgICAgQGluY2x1ZGUgbWl4aW4uZmxleC1jZW50ZXIocm93LCBpbml0aWFsKTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICAgICAgLmZvcm1faWNvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIG1peGluLnJlbW92ZV9ib3JkZXItb3V0bGluZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIuJHRhc2tUaXRsZS1jb2xvclxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtX2JvdHRvbSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuXFxyXFxufVwiLFwiXFxyXFxuQHVzZSBcXFwibWl4aW5cXFwiO1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAubGlzdC1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAzMHB4IDEwMHB4IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFza19saXN0X2l0ZW0ge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICBcXHJcXG4gICAgICAgID4gLml0ZW1fdGl0bGUge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICAgICAgLml0ZW1fZHVlIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IC43ZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChkaXJ0eU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCJpbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbiAgLypcbiAgICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gICAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAgICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICAgKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gICAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gICAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gICAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAgICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gICAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAgICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gICAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAgICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICAgKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAgICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gICAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAgICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICAgKlxuICAgKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gICAqXG4gICAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICAgKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICAgKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gICAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICAgKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gICAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICAgKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAgICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gICAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICAgKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gICAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gICAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gICAqL1xuXG59O1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB5ZWFycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAxMSBGZWJydWFyeSAyMDE1P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3RNb250aE5vdEZ1bGwpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYpIDogTWF0aC5jZWlsKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5ZZWFyc1xuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgeWVhcnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCB5ZWFycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAxMSBGZWJydWFyeSAyMDE1P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJblllYXJzKG5ldyBEYXRlKDIwMTUsIDEsIDExKSwgbmV3IERhdGUoMjAxMywgMTEsIDMxKSlcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblllYXJzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7IC8vIFNldCBib3RoIGRhdGVzIHRvIGEgdmFsaWQgbGVhcCB5ZWFyIGZvciBhY2N1cmF0ZSBjb21wYXJpc29uIHdoZW4gZGVhbGluZ1xuICAvLyB3aXRoIGxlYXAgZGF5c1xuXG4gIGRhdGVMZWZ0LnNldEZ1bGxZZWFyKCcxNTg0Jyk7XG4gIGRhdGVSaWdodC5zZXRGdWxsWWVhcignMTU4NCcpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgeWVhcnMgLSBkaWZmIGluIGNhbGVuZGFyIHllYXJzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIHllYXIgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgdmFyIGlzTGFzdFllYXJOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247XG4gIHZhciByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3RZZWFyTm90RnVsbCk7IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHMgYCB0byBgZm9ybWF0RGlzdGFuY2VgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3JkcyhcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGxvY2FsaXplT3B0aW9ucy5hZGRTdWZmaXggPSBCb29sZWFuKG9wdGlvbnMuYWRkU3VmZml4KTtcbiAgbG9jYWxpemVPcHRpb25zLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCBudWxsLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogdmFyIHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFzdChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aD9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE0LCA4LCAyNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVNb250aChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgPT09IGRhdGVSaWdodC5nZXRGdWxsWWVhcigpICYmIGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IGRhdGVSaWdodC5nZXRNb250aCgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgeWVhcj9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgeWVhcj9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgeWVhcj9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE0LCA4LCAyNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVZZWFyKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG59IiwiaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gXCIuLi9pc1NhbWVNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAxNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc01vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDE1KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc01vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZU1vbnRoKERhdGUubm93KCksIGRpcnR5RGF0ZSk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVZZWFyIGZyb20gXCIuLi9pc1NhbWVZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB5ZWFyIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgeWVhciBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGlzIHllYXI/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lWWVhcihkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9tb3Jyb3dcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9tb3Jyb3dcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNyBPY3RvYmVyIDE0OjAwOjAwIHRvbW9ycm93P1xuICogdmFyIHJlc3VsdCA9IGlzVG9tb3Jyb3cobmV3IERhdGUoMjAxNCwgOSwgNywgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIgdmFsdWU7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhcnNlUGF0dGVybnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YWx1ZSA9IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG5cbiAgICBpZiAoIXBhcnNlUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ10gLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4gIC8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuICAvLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbiAgLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxuZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX2RpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG5cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7c2hvd0Zvcm0sIGFkZFRhc2tCdXR0b24sIGZvcm1Mb2NhdGlvbn0gZnJvbSBcIi4vdGFza3Mvc2hvd0Zvcm1cIjtcclxuaW1wb3J0IHthZGRUYXNrLCB0YXNrQXJyYXksIGVkaXRUYXNrLCBnZXRUYXNrLCBkZWxldGVUYXNrLCBtYXJrQ29tcGxldGVUYXNrLCBoaWRlU2VjdGlvbn0gZnJvbSBcIi4vdGFza3MvdGFza1wiO1xyXG5pbXBvcnQge3N0b3JhZ2UsIGNoYW5nZUxheW91dH0gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7c29ydH0gZnJvbSBcIi4vdGFza3Mvc29ydFwiO1xyXG5cclxuY29uc3Qgc2hvd1Rhc2sgPSAoKSA9PiB7XHJcbiAgICBpZihzaG93Rm9ybS5nZXRJc0VkaXRNb2RlRW5hYmxlKCkpIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c09iamVjdCA9IGZvcm1Mb2NhdGlvbi5nZXRfSW5mbygpLnRoZUVsZW1lbnRPYmplY3Q7XHJcbiAgICAgICAgYWRkVGFzay5jcmVhdGUocHJldmlvdXNPYmplY3QudGhlVGl0bGUsIHByZXZpb3VzT2JqZWN0LmRhdGUpO1xyXG4gICAgICAgIHNob3dGb3JtLnVwZGF0ZUlzRWRpdE1vZGVFbmFibGUoZmFsc2UpO1xyXG4gICAgICAgIHNob3dGb3JtLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBidXR0b25IYW5kbGVyID0gKGUpID0+IHtcclxuICBcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBsdXNfYWRkX2J1dHRvblwiKSkge1xyXG5cclxuICAgICAgICBzaG93VGFzaygpO1xyXG4gICAgICAgIGlmKHNob3dGb3JtLmdldElzRm9ybUVuYWJsZWQoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzaG93Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5jcmVhdGUoZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkuZGF0ZVNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93Rm9ybS5jcmVhdGUoZS50YXJnZXQucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5yZW1vdmUoZS50YXJnZXQpO1xyXG4gICAgICAgIGNoYW5nZUxheW91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlX2ljb24nKSkge1xyXG4gICAgICAgIGRlbGV0ZVRhc2soZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0X2ljb24nKSkge1xyXG4gICAgICAgIGNvbnN0IHRoZUVsZW1lbnRPYmplY3QgPSBnZXRUYXNrKGUpOyBcclxuICAgICAgICBjb25zdCB0aGVFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IGRhdGVTZWN0aW9uID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIHNob3dUYXNrKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoZUVsZW1lbnRPYmplY3QsIHRoZUVsZW1lbnQsIGRhdGVTZWN0aW9uKVxyXG4gICAgICAgIGlmKGRhdGVTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5wbHVzX2FkZF9idXR0b24nKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNyZWF0ZShkYXRlU2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihzaG93Rm9ybS5nZXRJc0Zvcm1FbmFibGVkKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc2hvd0Zvcm0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG5cclxuICAgICAgICBzaG93Rm9ybS51cGRhdGVJc0VkaXRNb2RlRW5hYmxlKHRydWUpO1xyXG4gICAgICAgIHNob3dGb3JtLmNyZWF0ZShkYXRlU2VjdGlvbiwgdGhlRWxlbWVudCwgdGhlRWxlbWVudE9iamVjdCk7XHJcbiAgICAgICAgdGhlRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBjaGFuZ2VMYXlvdXQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2staGVhZGluZycpKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVNlY3Rpb24gPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgc2hvd0Zvcm0udXBkYXRlSXNFZGl0TW9kZUVuYWJsZShmYWxzZSk7XHJcbiAgICAgICAgc2hvd0Zvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYoZGF0ZVNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnBsdXNfYWRkX2J1dHRvbicpID09PSBudWxsICYmIGRhdGVTZWN0aW9uLmRhdGFzZXQuZGF0ZUxpc3QgIT09IFwiY29tcGxldGVkXCIpIHtcclxuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5jcmVhdGUoZGF0ZVNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0ljb24gPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2hvd19jb21wbGV0ZWRfdGFza19pY29uJyk7XHJcbiAgICAgICAgaWYoc2hvd0ljb24uc3R5bGUudHJhbnNmb3JtID09PSBcInJvdGF0ZSg5MGRlZylcIikge1xyXG4gICAgICAgICAgICBzaG93SWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDI3MGRlZyknO1xyXG4gICAgICAgICAgICBzaG93SWNvbi5zdHlsZS5yaWdodCA9ICczcHgnO1xyXG4gICAgICAgICAgICBoaWRlU2VjdGlvbihlLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0ljb24uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XHJcbiAgICAgICAgICAgIHNob3dJY29uLnN0eWxlLnJpZ2h0ID0gJy01cHgnO1xyXG4gICAgICAgICAgICBoaWRlU2VjdGlvbihlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1fY2hlY2snKSkge1xyXG4gICAgICAgIGNvbnN0IHRoZUVsZW1lbnRPYmplY3QgPSBnZXRUYXNrKGUsIHRydWUpOyBcclxuICAgICAgICBjb25zdCB0aGVFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhlRWxlbWVudC5jaGlsZE5vZGVzWzVdLmNoaWxkTm9kZXNbM107XHJcblxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICAgICAgZS50YXJnZXQuY2hpbGROb2Rlc1swXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICAgICAgICAgIGlmKHRoZUVsZW1lbnRPYmplY3QuY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGVFbGVtZW50T2JqZWN0LmNvbXBsZXRlZD0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlZGl0VGFzayh0aGVFbGVtZW50T2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGVFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgxNjgsIDgzLCA4MywgMC41KSc7XHJcbiAgICAgICAgZS50YXJnZXQuY2hpbGROb2Rlc1swXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuXHJcbiAgICAgICAgdGhlRWxlbWVudE9iamVjdC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGVkaXRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICBtYXJrQ29tcGxldGVUYXNrKGUpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3Qtc29ydCcpKSB7XHJcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBjaGFuZ2VTb3J0VHlwZShlKTtcclxuICBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZVNvcnRUeXBlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGFsbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRhdGVdXCIpXHJcbiAgICAgXHJcbiAgICBhbGxTZWN0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG5cclxuICAgIHN3aXRjaChlLnRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNhc2UgXCJTaG93IEFsbFwiOiBcclxuICAgICAgICAgICAgY29uc3QgcXVpY2tUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGU9XCJub2RhdGVcIl0nKVxyXG4gICAgICAgICAgICBxdWlja1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIHJldHVybiAnUXVpY2sgVGFza3MnO1xyXG4gICAgICAgIGNhc2UgXCJRdWljayBUYXNrc1wiOiBcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGU9XCJvdmVyZHVlXCJdJylcclxuICAgICAgICAgICAgb3ZlcmR1ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICByZXR1cm4gJ1Nob3cgT3ZlcmR1ZSc7XHJcbiAgICAgICAgY2FzZSBcIlNob3cgT3ZlcmR1ZVwiOlxyXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGU9XCJ0b2RheVwiXScpXHJcbiAgICAgICAgICAgIHRvZGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIHJldHVybiAnU2hvdyBUb2RheSc7XHJcbiAgICAgICAgY2FzZSBcIlNob3cgVG9kYXlcIjpcclxuICAgICAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlPVwidG9tb3Jyb3dcIl0nKVxyXG4gICAgICAgICAgICB0b21vcnJvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdTaG93IFRvbW9ycm93JztcclxuICAgICAgICBjYXNlIFwiU2hvdyBUb21vcnJvd1wiOlxyXG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGF0ZT1cIndlZWtcIl0nKVxyXG4gICAgICAgICAgICB3ZWVrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIHJldHVybiAnU2hvdyBUaGlzIFdlZWsnXHJcbiAgICAgICAgY2FzZSBcIlNob3cgVGhpcyBXZWVrXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGF0ZT1cIm1vbnRoXCJdJylcclxuICAgICAgICAgICAgbW9udGguc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnU2hvdyBUaGlzIE1vbnRoJ1xyXG4gICAgICAgIGNhc2UgXCJTaG93IFRoaXMgTW9udGhcIjpcclxuICAgICAgICAgICAgY29uc3Qgc29tZWRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGU9XCJzb21lZGF5XCJdJylcclxuICAgICAgICAgICAgc29tZWRheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICByZXR1cm4gJ1Nob3cgU29tZWRheSdcclxuICAgICAgICBjYXNlIFwiU2hvdyBTb21lZGF5XCI6XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGU9XCJjb21wbGV0ZWRcIl0nKVxyXG4gICAgICAgICAgICBjb21wbGV0ZWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHJldHVybiAnU2hvdyBDb21wbGV0ZWQnXHJcbiAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgYWxsU2VjdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgICAgcmV0dXJuICdTaG93IEFsbCdcclxuICAgIH1cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidXR0b25IYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbmNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cclxuXHJcbmV4cG9ydCB7YnV0dG9uSGFuZGxlcn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGNob29zZURhdGUgfSBmcm9tIFwiLi90YXNrcy9mb3JtYXREYXRlXCI7XHJcblxyXG5jb25zdCBmb3JtID0gYFxyXG48ZGl2IGNsYXNzPVwiZm9ybV90b3BcIj5cclxuPGRpdiBjbGFzcz0nZm9ybV9pbnB1dCc+XHJcbiAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdmb3JtX3RpdGxlJyBwbGFjZWhvbGRlcj1cImUuZy4gYnV5IHRvb3RocGFzdGVcIj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9J2Zvcm1fZXh0cmEnPlxyXG4gIDxkaXYgY2xhc3M9J2Zvcm1fdG9vbHMnPlxyXG4gICAgPGRpdiBjbGFzcz0nZGF0ZV9XcmFwcGVyJz5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLXRvZ2dsZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZXBpY2tlci10b2dnbGUtYnV0dG9uXCI+PC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZGF0ZXBpY2tlci1pbnB1dFwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2RhdGVfdmFsdWUnPkNhbGVuZGFyPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPSdmb3JtX2JvdHRvbSc+XHJcbjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGF0YS1rZXk9J0VudGVyJyBpZD0nZm9ybV9hZGRfYnV0dG9uJyBjbGFzcz0nYnV0dG9uLXN0eWxlMScgdmFsdWU9J0FkZCBUYXNrJz5cclxuPGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWtleT0nRXNjYXBlIGlkPSdmb3JtX2NhbmNlbF9idXR0b24nIGNsYXNzPSdidXR0b24tc3R5bGUyJyB2YWx1ZT0nQ2FuY2VsJz5cclxuPC9kaXY+YDtcclxuXHJcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBgXHJcbiAgICA8aW1nIGNsYXNzPSdwbHVzLWljb24nIHNyYz0nL3NyYy9pbWFnZXMvcGx1cy5zdmcnPlxyXG4gICAgPGRpdiBjbGFzcz0naXRlbV90aXRsZSBhZGRfdGFzayc+QWRkIHRhc2s8L2Rpdj5cclxuYFxyXG5cclxuY29uc3QgdGFzayA9ICh0aXRsZSwgZGF0ZSkgPT4ge1xyXG5cclxuICBjb25zdCB0YXNrSFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz0naXRlbV9jaGVjayc+PHNwYW4gY2xhc3M9J2NoZWNrbWFyayc+JiMxMDAwMzs8L3NwYW4+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2l0ZW1fdGl0bGUnPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtX3Rvb2xzJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW1fZHVlJz4ke2Nob29zZURhdGUoZGF0ZSl9PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPSdlZGl0X2ljb24nIHNyYz0nL3NyYy9pbWFnZXMvdGFza19lZGl0X2ljb24uc3ZnJz5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9J2RlbGV0ZV9pY29uJyBzcmM9Jy9zcmMvaW1hZ2VzL3RyYXNoLnN2Zyc+XHJcblxyXG5cclxuICAgICAgPC9kaXY+YFxyXG4gIFxyXG4gIHJldHVybiB0YXNrSFRNTDtcclxufVxyXG5leHBvcnQge2Zvcm0sIGFkZFRhc2tCdXR0b24sIHRhc2t9OyIsImltcG9ydCB7Y3JlYXRlT2JqZWN0LCBhZGRUYXNrLCB0YXNrQXJyYXksIGNvdW50fSBmcm9tIFwiLi90YXNrcy90YXNrXCJcclxuaW1wb3J0IHtzaG93VGFza30gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiXHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tzL3Rhc2tDb25zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlTG9jYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza0FycmF5KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN0b3JlTG9jYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUxheW91dClcclxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgICAgIGlmKHRhc2tzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IobGV0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza09iamVjdCA9IG5ldyBUYXNrKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5jb21wbGV0ZWQpXHJcbiAgICAgICAgICAgIHRhc2tBcnJheS5wdXNoKGNyZWF0ZVRhc2tPYmplY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVPYmplY3QoY3JlYXRlVGFza09iamVjdC5pZCAsY3JlYXRlVGFza09iamVjdC50aXRsZSwgY3JlYXRlVGFza09iamVjdC5kdWVEYXRlLCBjcmVhdGVUYXNrT2JqZWN0LmNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUxheW91dCgpO1xyXG4gICAgICAgIGNvdW50KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3NhdmVMb2NhbCwgcmVzdG9yZUxvY2FsfVxyXG59KSgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzdG9yYWdlLnJlc3RvcmVMb2NhbCk7XHJcbjtcclxuXHJcbmNvbnN0IGNoYW5nZUxheW91dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfbGlzdF9pdGVtJyk7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMCkge1xyXG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYoZWwuZHVlRGF0ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0YXNrLmRhdGFzZXQuaWQgPT09IGVsLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIHRhc2suc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQge3N0b3JhZ2UsIGNoYW5nZUxheW91dH07IiwiaW1wb3J0IHsgYWRkRGF5cywgZm9ybWF0LCBpc1RvZGF5LCB0b0RhdGUsIGZvcm1hdERpc3RhbmNlLCBmb3JtYXRSZWxhdGl2ZSwgcGFyc2UsIHN0YXJ0T2ZEYXksIHN1YkRheXMsIGlzVGhpc1dlZWssIGlzVGhpc1llYXIsIGRpZmZlcmVuY2VJblllYXJzLCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsIGlzVG9tb3Jyb3csIGlzVGhpc01vbnRoLCBpc1Bhc3QgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7dGFza0FycmF5LCBhZGRUYXNrfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7c2hvd0Zvcm19IGZyb20gXCIuL3Nob3dGb3JtXCI7XHJcbmNvbnN0IGNob29zZURhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgaWYoZGF0ZSA9PT0gXCJcIiB8fCBkYXRlID09PSAnTm8gRGF0ZScgfHwgZGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gXCJcIjtcclxuICAgIGNvbnN0IGNob3NlbkRhdGUgPSBkYXRlLnNwbGl0KCctJyk7XHJcblxyXG4gICAgLy8gY29udmVydCBkYXRlIGZyb20gc3RyaW5nIHRvIG51bWJlclxyXG4gICAgY29uc3QgeWVhciA9IE51bWJlcihjaG9zZW5EYXRlWzBdKTtcclxuICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKGNob3NlbkRhdGVbMV0pIC0gMTtcclxuICAgIGNvbnN0IGRheSA9IE51bWJlcihjaG9zZW5EYXRlWzJdKTtcclxuICAgIGNvbnN0IHJlZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xyXG5cclxuICAgIGNvbnN0IEN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vICBpZiBkYXRlIGVxdWFscyB0byB5ZXN0ZXJkYXksIG9yIHR3byBkYXlzIGFnbywgc2F5IHRoYXQuIFNheSB0aHJlZSBkYXlzLCBmb3VyIGRheXMgYWdvLiBcclxuXHJcbiAgICBpZihpc1Bhc3QocmVmb3JtYXR0ZWREYXRlKSkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJkdWUgPSBmb3JtYXREaXN0YW5jZShyZWZvcm1hdHRlZERhdGUsIEN1cnJlbnREYXRlLCB7YWRkU3VmZml4OiB0cnVlfSlcclxuICAgICAgICByZXR1cm4gb3ZlcmR1ZTsgXHJcbiAgICB9IGVsc2UgaWYoaXNUb2RheShyZWZvcm1hdHRlZERhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiVG9kYXlcIjtcclxuICAgIH0gZWxzZSBpZihpc1RoaXNXZWVrKHJlZm9ybWF0dGVkRGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSkpIHtcclxuICAgICAgICBjb25zdCB3aXRoaW5fd2VlayA9IGZvcm1hdChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSwgXCJFRUVFXCIpO1xyXG4gICAgICAgIHJldHVybiB3aXRoaW5fd2Vla1xyXG4gICAgfSBlbHNlIGlmKGlzVGhpc1llYXIocmVmb3JtYXR0ZWREYXRlKSkge1xyXG4gICAgICAgIGNvbnN0IHdpdGhpbl95ZWFyID0gZm9ybWF0KG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpLCBcIk1NTU0gZG9cIik7XHJcbiAgICAgICAgcmV0dXJuIHdpdGhpbl95ZWFyO1xyXG4gICAgfSBlbHNlIGlmKGRpZmZlcmVuY2VJblllYXJzKHJlZm9ybWF0dGVkRGF0ZSwgQ3VycmVudERhdGUpID49IDEpIHtcclxuICAgICAgICBjb25zdCBiZXlvbmRfeWVhciA9IGZvcm1hdChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSwgXCJNTU1NIGRvIHl5eXlcIik7XHJcbiAgICAgICAgcmV0dXJuIGJleW9uZF95ZWFyO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGZpbmRDb3JyZWN0U2VjdGlvbiA9IChkYXRlKSA9PiB7XHJcbiAgICBpZihkYXRlID09PSBcIlwiIHx8IGRhdGUgPT09IHVuZGVmaW5lZCB8fCBkYXRlID09PSAnTm8gRGF0ZScpIHtcclxuICAgICAgICBjb25zdCBub0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJub0RhdGVcIl0nKVxyXG4gICAgICAgIHJldHVybiBub0RhdGU7XHJcbiAgICB9IFxyXG4gICAgY29uc3QgY2hvc2VuRGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGRhdGUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyXHJcbiAgICBjb25zdCB5ZWFyID0gTnVtYmVyKGNob3NlbkRhdGVbMF0pO1xyXG4gICAgY29uc3QgbW9udGggPSBOdW1iZXIoY2hvc2VuRGF0ZVsxXSkgLSAxO1xyXG4gICAgY29uc3QgZGF5ID0gTnVtYmVyKGNob3NlbkRhdGVbMl0pO1xyXG4gICAgY29uc3QgcmVmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgMjMsIDU5LCA1OSk7XHJcbiAgICBjb25zdCBDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBpZihpc1Bhc3QocmVmb3JtYXR0ZWREYXRlKSkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJvdmVyZHVlXCJdJylcclxuICAgICAgICByZXR1cm4gb3ZlcmR1ZTtcclxuICAgIH0gZWxzZSBpZihpc1RvZGF5KHJlZm9ybWF0dGVkRGF0ZSkpIHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGUtbGlzdD1cInRvZGF5XCJdJylcclxuICAgICAgICByZXR1cm4gdG9kYXk7XHJcbiAgICB9IGVsc2UgaWYoaXNUb21vcnJvdyhyZWZvcm1hdHRlZERhdGUpKSB7XHJcbiAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJ0b21vcnJvd1wiXScpXHJcbiAgICAgICAgcmV0dXJuIHRvbW9ycm93O1xyXG4gICAgfSBlbHNlIGlmKGlzVGhpc1dlZWsocmVmb3JtYXR0ZWREYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KSkge1xyXG4gICAgICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJ3ZWVrXCJdJylcclxuICAgICAgICByZXR1cm4gd2VlaztcclxuICAgIH0gZWxzZSBpZihpc1RoaXNNb250aChyZWZvcm1hdHRlZERhdGUpKSB7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJtb250aFwiXScpXHJcbiAgICAgICAgcmV0dXJuIG1vbnRoO1xyXG4gICAgfSBlbHNlIGlmKCFpc1RoaXNNb250aChyZWZvcm1hdHRlZERhdGUpICYmICFpc1Bhc3QocmVmb3JtYXR0ZWREYXRlKSkge1xyXG4gICAgICAgIGNvbnN0IHNvbWVkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJzb21lZGF5XCJdJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc29tZWRheSlcclxuICAgICAgICByZXR1cm4gc29tZWRheTtcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2Nob29zZURhdGUsIGZpbmRDb3JyZWN0U2VjdGlvbn07XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBodG1sVGFnIGZyb20gXCIuLi9odG1sLXRhZ3NcIjtcclxuaW1wb3J0IHthZGRUYXNrLCB0YXNrQXJyYXksIGRlbGV0ZVRhc2ssIGVkaXRUYXNrfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7Y2hvb3NlRGF0ZSwgZm9ybWF0RGF0ZX0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5pbXBvcnQgeyBidXR0b25IYW5kbGVyIH0gZnJvbSBcIi4uL2RvbUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHNob3dGb3JtID0gKCgpID0+IHtcclxuICAgIGxldCBJc0Zvcm1FbmFibGVkID0gbnVsbDtcclxuICAgIGNvbnN0IGdldElzRm9ybUVuYWJsZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIElzRm9ybUVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVJc0Zvcm1FbmFibGVkID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlID8gSXNGb3JtRW5hYmxlZCA9IHRydWUgOiBJc0Zvcm1FbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVkaXRNb2RlRW5hYmxlZCA9IG51bGw7XHJcbiAgICBjb25zdCBnZXRJc0VkaXRNb2RlRW5hYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlZGl0TW9kZUVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVJc0VkaXRNb2RlRW5hYmxlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlID8gZWRpdE1vZGVFbmFibGVkID0gdHJ1ZSA6IGVkaXRNb2RlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZSA9IChkYXRlU2VjdGlvbiwgZWRpdEVsZW1lbnQsIHRoZUVsZW1lbnRPYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fd3JhcHBlcicpO1xyXG4gICAgICAgIG5ld0Zvcm0uZGF0YXNldC50eXBlPSdmb3JtJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgdGhlIEhUTUwgYW5kIGFwcGVuZCB0byB0aGUgbmV3Rm9ybSBcclxuICAgICAgICBjb25zdCBmb3JtSFRNTCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWxUYWcuZm9ybSk7XHJcbiAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChmb3JtSFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYXBwZW5kIGl0IHRvIHRoZSB3ZWJwYWdlXHJcbiAgICAgICAgZGF0ZVNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b25zIG9mIGVkaXQgRm9ybS5cclxuICAgICAgICBjb25zdCB0YXNrX3RpdGxlID0gbmV3Rm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV90aXRsZScpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVfV3JhcHBlciA9IG5ld0Zvcm0ucXVlcnlTZWxlY3RvcihcIi5kYXRlX1dyYXBwZXJcIik7XHJcbiAgICAgICAgY29uc3QgZm9ybV9hZGRfYnV0dG9uID0gbmV3Rm9ybS5sYXN0Q2hpbGQuY2hpbGROb2Rlc1sxXTtcclxuICAgICAgICBjb25zdCBmb3JtX2NhbmNlbF9idXR0b24gPSBuZXdGb3JtLmxhc3RDaGlsZC5jaGlsZE5vZGVzWzNdO1xyXG5cclxuIFxyXG4gICAgXHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBmb3JtRW5hYmxlZCBzbyB0aGF0IG9ubHkgb25lIGVkaXQgZm9ybSBjYW4gZXhpc3QgaW4gdGhlIHdlYnBhZ2VcclxuICAgICAgICB1cGRhdGVJc0Zvcm1FbmFibGVkKHRydWUpO1xyXG4gICAgICAgIC8vIHN0b3JlIGZvcm1JbmZvICh0aXRsZSwgZGF0ZSwgZXRjKSBzbyBpdCBjYW4gYmUgYWNjZXNzZWQgbGF0ZXJcclxuICAgICAgIFxyXG5cclxuICAgICAgICAvLyBsaXN0ZW4gXHJcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVwaWNrZXItaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBkYXRlX3ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVfdmFsdWUnKTtcclxuICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVfdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZV92YWx1ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXBpY2tlci1pbnB1dCcpO1xyXG4gICAgICAgICAgICBkYXRlX3ZhbHVlLnRleHRDb250ZW50ID0gY2hvb3NlRGF0ZShkYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB0YXNrX3RpdGxlLmZvY3VzKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9ybUxvY2F0aW9uLnN0b3JlX0luZm8oXHJcbiAgICAgICAgICAgIGRhdGVTZWN0aW9uLCBcclxuICAgICAgICAgICAgZm9ybV9hZGRfYnV0dG9uLCBcclxuICAgICAgICAgICAgZm9ybV9jYW5jZWxfYnV0dG9uLCBcclxuICAgICAgICAgICAgbmV3Rm9ybSwgXHJcbiAgICAgICAgICAgIHRhc2tfdGl0bGUsXHJcbiAgICAgICAgICAgIGRhdGVJbnB1dCxcclxuICAgICAgICAgICAgZGF0ZV92YWx1ZSxcclxuICAgICAgICAgICAgdGhlRWxlbWVudE9iamVjdCxcclxuICAgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBpbml0aWFsaWxpemVcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB0YXNrX3RpdGxlLmZvY3VzKCk7XHJcbiAgICAgXHJcbiAgICAgICAgLy8gZW5hYmxlIGJ1dHRvbiBpZiB1c2VyIGlucHV0IHRleHQgaXMgZ3JlYXRlciB0aGFuIG9uZS4gRGlzYWJsZSBidXR0b24gaWYgbm90LlxyXG5cclxuICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGxpc3RlbnMgZm9yIGtleXByZXNzIHNvIHRoYXQgXCJlbnRlclwiIGFuZCBcImNhbmNlbFwiIGtleSB3b3Jrc1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkZXRlY3RLZXlQcmVzcyk7XHJcblxyXG4gICAgICAgIGlmKGdldElzRWRpdE1vZGVFbmFibGUoKSkge1xyXG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICB0YXNrX3RpdGxlLnZhbHVlID0gdGhlRWxlbWVudE9iamVjdC50aGVUaXRsZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoZUVsZW1lbnRPYmplY3QuZGF0ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVfdmFsdWUudGV4dENvbnRlbnQgPSBjaG9vc2VEYXRlKHRoZUVsZW1lbnRPYmplY3QuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0aGVFbGVtZW50T2JqZWN0LmRhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVkaXRFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIG5ld0Zvcm0pO1xyXG4gICAgICAgICAgICB0YXNrX3RpdGxlLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICBmb3JtX2NhbmNlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRUYXNrLmNyZWF0ZSh0aGVFbGVtZW50T2JqZWN0LnRoZVRpdGxlLCB0aGVFbGVtZW50T2JqZWN0LmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlSXNFZGl0TW9kZUVuYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGZvcm1fYWRkX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlRWxlbWVudE9iamVjdC50aGVUaXRsZSA9dGFza190aXRsZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoZUVsZW1lbnRPYmplY3QuZGF0ZSA9ZGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlSXNFZGl0TW9kZUVuYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlZGl0VGFzayh0aGVFbGVtZW50T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1fY2FuY2VsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNyZWF0ZShmb3JtTG9jYXRpb24uZ2V0X0luZm8oKS5kYXRlU2VjdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvcm1fYWRkX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0J1dHRvbkhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFza190aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGFza190aXRsZS52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza190aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3RpdGxlJyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZV9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlcGlja2VyLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZV92YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlX3ZhbHVlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkVGFzay5jcmVhdGUodGFza190aXRsZS52YWx1ZSwgZGF0ZV9JbnB1dC52YWx1ZSlcclxuICAgICAgICB0YXNrX3RpdGxlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrX3RpdGxlLmZvY3VzKCk7XHJcbiAgICAgICAgYWRkVGFza0J1dHRvbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgZGF0ZV9JbnB1dC52YWx1ZT0nJztcclxuICAgICAgICBkYXRlX3ZhbHVlLnRleHRDb250ZW50ID0gJ0NhbGVuZGFyJztcclxuICAgIH1cclxuICAgIC8vIHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycywgdGhlIGVsZW1lbnRzLCBhbmQgcmVjcmVhdGUgYWRkVGFzayBidXR0b24uIFxyXG4gICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihzaG93Rm9ybS5nZXRJc0Zvcm1FbmFibGVkKCkpIHtcclxuICAgICAgICAgICAgZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkubmV3Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRldGVjdEtleVByZXNzKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdXBkYXRlSXNGb3JtRW5hYmxlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZSwgXHJcbiAgICAgICAgdXBkYXRlSXNGb3JtRW5hYmxlZCwgXHJcbiAgICAgICAgZ2V0SXNGb3JtRW5hYmxlZCwgIFxyXG4gICAgICAgIHVwZGF0ZUlzRWRpdE1vZGVFbmFibGUsXHJcbiAgICAgICAgZ2V0SXNFZGl0TW9kZUVuYWJsZSxcclxuICAgICAgICByZW1vdmUsXHJcbiAgICAgICAgYWRkVGFza0J1dHRvbkhhbmRsZXJcclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZSA9ICh0aGVCdXR0b24pID0+IHtcclxuICAgICAgICB0aGVCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKGRhdGVTZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3QWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbmV3QWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdwbHVzX2FkZF9idXR0b24nKTtcclxuICAgICAgICAvLyBhZGQgdGhlIEhUTUwgYXBwZW5kIHRvIE5ld0FkZFRhc2tCdG5cclxuICAgICAgICBjb25zdCBhZGRUYXNrRnJhZ21lbnRIVE1sID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbFRhZy5hZGRUYXNrQnV0dG9uKTtcclxuICAgICAgICBuZXdBZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tGcmFnbWVudEhUTWwpO1xyXG5cclxuICAgICAgICAvL2FwcGVuZCBpdCB0byB0aGUgd2VicGFnZVxyXG4gICAgICAgIGRhdGVTZWN0aW9uLmFwcGVuZENoaWxkKG5ld0FkZFRhc2tCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybV9hZGRfYnV0dG9uID0gZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkuZm9ybV9hZGRfYnV0dG9uO1xyXG4gICAgICAgIGZvcm1fYWRkX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkuZm9ybV9hZGRfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbmFibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybV9hZGRfYnV0dG9uID0gZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkuZm9ybV9hZGRfYnV0dG9uO1xyXG4gICAgICAgIGZvcm1fYWRkX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkuZm9ybV9hZGRfYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtyZW1vdmUsIGNyZWF0ZSwgZGlzYWJsZSwgZW5hYmxlfVxyXG59KSgpO1xyXG5cclxuY29uc3QgZGV0ZWN0S2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFza190aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3RpdGxlJyk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXBpY2tlci1pbnB1dCcpO1xyXG5cclxuICAgIGlmKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgY29uc3QgdGhlRWxlbWVudE9iamVjdCA9IGZvcm1Mb2NhdGlvbi5nZXRfSW5mbygpLnRoZUVsZW1lbnRPYmplY3Q7XHJcbiAgICAgICAgaWYoc2hvd0Zvcm0uZ2V0SXNFZGl0TW9kZUVuYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIGFkZFRhc2suY3JlYXRlKHRoZUVsZW1lbnRPYmplY3QudGhlVGl0bGUsIHRoZUVsZW1lbnRPYmplY3QuZGF0ZSk7XHJcbiAgICAgICAgICAgIHNob3dGb3JtLnVwZGF0ZUlzRWRpdE1vZGVFbmFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzaG93Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5jcmVhdGUoZm9ybUxvY2F0aW9uLmdldF9JbmZvKCkuZGF0ZVNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihlLmtleSA9PT0gJ0VudGVyJyAmJiB0YXNrX3RpdGxlLnZhbHVlLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgY29uc3QgdGhlRWxlbWVudE9iamVjdCA9IGZvcm1Mb2NhdGlvbi5nZXRfSW5mbygpLnRoZUVsZW1lbnRPYmplY3Q7XHJcbiAgICAgICAgaWYodGhlRWxlbWVudE9iamVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoZUVsZW1lbnRPYmplY3QudGhlVGl0bGUgPXRhc2tfdGl0bGUudmFsdWU7XHJcbiAgICAgICAgICAgIHRoZUVsZW1lbnRPYmplY3QuZGF0ZSA9ZGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBzaG93Rm9ybS51cGRhdGVJc0VkaXRNb2RlRW5hYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgZWRpdFRhc2sodGhlRWxlbWVudE9iamVjdCk7XHJcbiAgICAgICAgICAgIHNob3dGb3JtLnJlbW92ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0Zvcm0uYWRkVGFza0J1dHRvbkhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vLyByZXRyaWV2ZSBsb2NhdGlvbiBvZiB0aGUgZm9ybSBhbmQgdGhlbiBiZSBhYmxlIHRvIGRlbGV0ZSBpdFxyXG5jb25zdCBmb3JtTG9jYXRpb24gPSAoKCkgPT4ge1xyXG4gICAgbGV0IGZvcm1JbmZvID0ge307XHJcbiAgICBjb25zdCBzdG9yZV9JbmZvID0gKGRhdGVTZWN0aW9uLCBmb3JtX2FkZF9idXR0b24sIGZvcm1fY2FuY2VsX2J1dHRvbiwgbmV3Rm9ybSwgdGFza190aXRsZSwgdGFza19kdWVEYXRlLCBkYXRlX3ZhbHVlLCB0aGVFbGVtZW50T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgZm9ybUluZm8gPSB7XHJcbiAgICAgICAgICAgIGRhdGVTZWN0aW9uLFxyXG4gICAgICAgICAgICBmb3JtX2FkZF9idXR0b24sXHJcbiAgICAgICAgICAgIGZvcm1fY2FuY2VsX2J1dHRvbixcclxuICAgICAgICAgICAgbmV3Rm9ybSxcclxuICAgICAgICAgICAgdGFza190aXRsZSxcclxuICAgICAgICAgICAgdGFza19kdWVEYXRlLFxyXG4gICAgICAgICAgICBkYXRlX3ZhbHVlLFxyXG4gICAgICAgICAgICB0aGVFbGVtZW50T2JqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRfSW5mbyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZm9ybUluZm87XHJcbiAgICB9IFxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0b3JlX0luZm8sXHJcbiAgICAgICAgZ2V0X0luZm8sXHJcbiAgICB9XHJcbiAgICBcclxufSkoKVxyXG5cclxuZXhwb3J0IHtzaG93Rm9ybSwgZm9ybUxvY2F0aW9uLCBhZGRUYXNrQnV0dG9ufTtcclxuIiwiY29uc3Qgc29ydCA9ICgpID0+IHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7c29ydH07IiwiaW1wb3J0IHsgZ2V0VW5peFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0ICogYXMgaHRtbFRhZyBmcm9tIFwiLi4vaHRtbC10YWdzXCI7XHJcbmltcG9ydCB7c2hvd0Zvcm0sIGZvcm1Mb2NhdGlvbiwgYWRkVGFza0J1dHRvbn0gZnJvbSBcIi4vc2hvd0Zvcm1cIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza0NvbnN0cnVjdG9yXCI7XHJcbmltcG9ydCB7ZmluZENvcnJlY3RTZWN0aW9ufSBmcm9tIFwiLi9mb3JtYXREYXRlXCJcclxuaW1wb3J0IHsgc3RvcmFnZSwgY2hhbmdlTGF5b3V0IH0gZnJvbSBcIi4uL3N0b3JhZ2VcIjtcclxuXHJcblxyXG5cclxuY29uc3QgdGFza0FycmF5ID0gW107XHJcbmNvbnN0IGFkZFRhc2sgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZSA9ICh0YXNrX3RpdGxlLCBkYXRlX2lucHV0KSA9PiB7XHJcbiAgICAgICAgLy8gYWxsIHRoZSB2YWx1ZXMgbmVlZGVkIHRvIGJlIGFkZGVkIHRvIGNyZWF0ZSB0YXNrXHJcbiAgICAgICAgLy8gY3JlYXRlIHRhc2sgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgbmV3VGFza09iamVjdCA9IG5ldyBUYXNrKHRhc2tfdGl0bGUsIGRhdGVfaW5wdXQpO1xyXG4gICAgICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2tPYmplY3QpO1xyXG4gICAgICAgIGNyZWF0ZU9iamVjdChuZXdUYXNrT2JqZWN0LmlkLCBuZXdUYXNrT2JqZWN0LnRpdGxlLCBuZXdUYXNrT2JqZWN0LmRhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgIH1cclxufSkoKVxyXG5jb25zdCBlZGl0VGFzayA9IChUaGVUYXNrT2JqZWN0KSA9PiB7XHJcbiAgICBjcmVhdGVPYmplY3QoVGhlVGFza09iamVjdC5pZCwgVGhlVGFza09iamVjdC50aXRsZSwgVGhlVGFza09iamVjdC5kYXRlKTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBjb3VudCA9ICgpID0+IHtcclxuICAgIGNvdW50T2ZDb21wbGV0ZWQgPSAwO1xyXG4gICAgdGFza0FycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmKGVsLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbClcclxuICAgICAgICAgICAgY291bnRPZkNvbXBsZXRlZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWxfY29tcGxldGVkX3Rhc2tzJyk7XHJcbiAgICBjb21wbGV0ZWRUYXNrQ291bnQudGV4dENvbnRlbnQgPSBgKCR7Y291bnRPZkNvbXBsZXRlZH0pYDtcclxufVxyXG5jb25zdCBjcmVhdGVPYmplY3QgPSAoaWQsIHRpdGxlLCBkYXRlLCBjb21wbGV0ZWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGVTZWN0aW9uID0gZmluZENvcnJlY3RTZWN0aW9uKGRhdGUpO1xyXG4gICAgbGV0IGFwcGVuZEJlZm9yZVRoaXNDaGlsZCA9IGRhdGVTZWN0aW9uLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpZihzaG93Rm9ybS5nZXRJc0Zvcm1FbmFibGVkKCkgJiYgZGF0ZVNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmZvcm1fd3JhcHBlcicpICE9PSBudWxsKSB7XHJcbiAgICAgICAgYXBwZW5kQmVmb3JlVGhpc0NoaWxkID0gZGF0ZVNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmZvcm1fd3JhcHBlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbmV3VGFzay5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfbGlzdF9pdGVtJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tIVE1MID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gICAgICAgIC5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoXHJcbiAgICAgICAgICAgIGh0bWxUYWcudGFzayhcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgLy9hcGVuZGluZyB0aGUgY2xhc3MgdG8gd2VicGFnZVxyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrSFRNTCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZUNTUyA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcignLml0ZW1fZHVlJykgO1xyXG4gICAgaWYoZGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUgIT09ICcnICYmIGRhdGUgIT09IFwiTm8gRGF0ZVwiKSB7XHJcbiAgICAgICAgZGF0ZUNTUy5zdHlsZS5wYWRkaW5nID0gXCIzcHggMTBweFwiOyAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGVDU1Muc3R5bGUucGFkZGluZyA9ICcnO1xyXG4gICAgfVxyXG4gICAgY291bnRPZkNvbXBsZXRlZCA9IDA7XHJcbiAgICB0YXNrQXJyYXkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYoZWwuY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvdW50T2ZDb21wbGV0ZWQrKztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgY29tcGxldGVkVGFza0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsX2NvbXBsZXRlZF90YXNrcycpO1xyXG4gICAgY29tcGxldGVkVGFza0NvdW50LnRleHRDb250ZW50ID0gYCgke2NvdW50T2ZDb21wbGV0ZWR9KWA7XHJcblxyXG4gICAgaWYoY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tidXR0b24gPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX2NoZWNrJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdF9pY29uJyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgY2hlY2tidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMTY4LCA4MywgODMsIDAuNSknO1xyXG4gICAgICAgIGNoZWNrYnV0dG9uLmNoaWxkTm9kZXNbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgY2hlY2tidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGUtbGlzdD1cImNvbXBsZXRlZFwiXScpXHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdUYXNrKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZVNlY3Rpb24uaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIGFwcGVuZEJlZm9yZVRoaXNDaGlsZClcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgY2hhbmdlTGF5b3V0KCk7XHJcbiAgICBzdG9yYWdlLnNhdmVMb2NhbCgpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XHJcbiAgICBsZXQgbmVlZGVkRWxlbWVudCA9IGdldFRhc2soZSk7XHJcblxyXG4gICAgdGFza0FycmF5LnNwbGljZSh0YXNrQXJyYXkuaW5kZXhPZihuZWVkZWRFbGVtZW50KSwgMSk7XHJcblxyXG4gICAgY29uc3QgaXRlbVRvQmVEZWxldGVkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaXRlbVRvQmVEZWxldGVkLnJlbW92ZSgpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbF9jb21wbGV0ZWRfdGFza3MnKTtcclxuICAgIGNvdW50T2ZDb21wbGV0ZWQgPSAwO1xyXG4gICAgdGFza0FycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmKGVsLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb3VudE9mQ29tcGxldGVkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb21wbGV0ZWRUYXNrQ291bnQudGV4dENvbnRlbnQgPSBgKCR7Y291bnRPZkNvbXBsZXRlZH0pYDtcclxuICAgIHN0b3JhZ2Uuc2F2ZUxvY2FsKCk7XHJcblxyXG59XHJcbmNvbnN0IGdldFRhc2sgPSAoZSwgY2hlY2tDb21wbGV0ZWQpID0+IHtcclxuICAgIGxldCBpdGVtVG9CZURlbGV0ZWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZihjaGVja0NvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgaXRlbVRvQmVEZWxldGVkID0gZS50YXJnZXQucGFyZW50Tm9kZTsgXHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtVG9CZURlbGV0ZWRfSUQgPSBpdGVtVG9CZURlbGV0ZWQuZGF0YXNldC5pZDtcclxuICAgIGxldCBuZWVkZWRFbGVtZW50ID0gbnVsbDsgXHJcbiAgICB0YXNrQXJyYXkubWFwKGVsID0+IHtcclxuICAgICAgICBpZihlbC5pZCA9PT0gaXRlbVRvQmVEZWxldGVkX0lEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZWVkZWRFbGVtZW50ID0gZWw7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5lZWRlZEVsZW1lbnQ7XHJcbn1cclxubGV0IGNvdW50T2ZDb21wbGV0ZWQgPSAwO1xyXG5jb25zdCBtYXJrQ29tcGxldGVUYXNrID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlLWxpc3Q9XCJjb21wbGV0ZWRcIl0nKVxyXG4gICAgY29uc3QgY29tcGxldGVkVGFza0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsX2NvbXBsZXRlZF90YXNrcycpO1xyXG4gICAgY29uc3QgY29tcGxldGVkSXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgY291bnRPZkNvbXBsZXRlZCA9IDA7XHJcbiAgICB0YXNrQXJyYXkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYoZWwuY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvdW50T2ZDb21wbGV0ZWQrKztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29tcGxldGVkVGFza0NvdW50LnRleHRDb250ZW50ID0gYCgke2NvdW50T2ZDb21wbGV0ZWR9KWA7XHJcblxyXG4gICAgY29tcGxldGVkU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wbGV0ZWRJdGVtKTtcclxuICAgIHN0b3JhZ2Uuc2F2ZUxvY2FsKCk7XHJcblxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGhpZGVTZWN0aW9uID0gKGUsIGNvbmRpdGlvbikgPT4ge1xyXG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1szXTtcclxuICAgIGlmKGNvbmRpdGlvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbXBsZXRlZExpc3Quc3R5bGUuZGlzcGxheT0nbm9uZSdcclxuICAgICAgICBcclxuICAgIH0gZWxzZSBpZihjb25kaXRpb24gPT09IGZhbHNlKXtcclxuICAgICAgICBjb21wbGV0ZWRMaXN0LnN0eWxlLmRpc3BsYXk9J2Jsb2NrJ1xyXG4gICAgfSBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge2FkZFRhc2ssIHRhc2tBcnJheSwgY3JlYXRlT2JqZWN0LCBjb3VudCwgZGVsZXRlVGFzaywgbWFya0NvbXBsZXRlVGFzaywgaGlkZVNlY3Rpb24sIGdldFRhc2ssIGVkaXRUYXNrfTsiLCJpbXBvcnQge2Zvcm1Mb2NhdGlvbn0gZnJvbSBcIi4vc2hvd0Zvcm1cIjtcclxuaW1wb3J0ICogYXMgaHRtbFRhZyBmcm9tIFwiLi4vaHRtbC10YWdzXCI7XHJcbmltcG9ydCB7IGNob29zZURhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRoZVRpdGxlLCBkdWVEYXRlLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoZVRpdGxlO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tcGxldGVkVGFzayhuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gbmV3VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbXBsZXRlZFRhc2soKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0aGVUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGhlVGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4uL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuLy8gaW1wb3J0IHtmb3JtYXREYXRlfSBmcm9tIFwiLi90YXNrcy9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7YnV0dG9uSGFuZGxlcn0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==