"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




/*
 * Andreas Lagocki - Photographer
 *
 * Copyright (C) Andreas Lagocki  - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly
 *  prohibited Proprietary and confidential.
 *
 * @author Andreas Lagocki <andreas@lagocki.de>
 */
// any CSS you import will output into a single css file (app.css in this case)


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js"); // or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');


__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

$(document).ready(function () {
  $('#welcome').css('color', 'red');
  $('.show-filter').click(function () {
    $('#filter').toggle();
  });
  $('#showDate').click(function () {
    var date = jQuery('#verkaufstag').val();

    if (date !== '') {
      var formattedDate = $.date(date);
      $('#purchase-date').text(formattedDate);
      $('#setDateBtn').css('display', 'block');
    } else {
      alert('Bitte ein gültiges Datum angeben');
    }

    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var parameter = formattedDate;
    $.ajax({
      type: "POST",
      // url: baseUrl + '/set-saledate',
      url: 'https://tools.lagocki.de/set-saledate',
      data: {
        parameter: parameter
      },
      success: function success(response) {},
      fail: function fail(jqXHR, textStatus, errorThrown) {
        console.log('Error : ' + errorThrown);
      }
    });
  });

  $.date = function (dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    return day + "." + month + "." + year;
  };
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_bootstrap_dist_js_bo-a3c247"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzNlOGEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFuZHJlYXMgTGFnb2NraSAtIFBob3RvZ3JhcGhlclxuICpcbiAqIENvcHlyaWdodCAoQykgQW5kcmVhcyBMYWdvY2tpICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nIG9mIHRoaXMgZmlsZSwgdmlhIGFueSBtZWRpdW0gaXMgc3RyaWN0bHlcbiAqICBwcm9oaWJpdGVkIFByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWwuXG4gKlxuICogQGF1dGhvciBBbmRyZWFzIExhZ29ja2kgPGFuZHJlYXNAbGFnb2NraS5kZT5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gb3IgeW91IGNhbiBpbmNsdWRlIHNwZWNpZmljIHBpZWNlc1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCcpO1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xuXG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCcjd2VsY29tZScpLmNzcygnY29sb3InLCAncmVkJyk7XG5cbiAgICAkKCcuc2hvdy1maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKXtcbiAgICAgICAgJCgnI2ZpbHRlcicpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnI3Nob3dEYXRlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0ZSA9IGpRdWVyeSgnI3ZlcmthdWZzdGFnJykudmFsKCk7XG4gICAgICAgIGlmIChkYXRlICE9PSAnJykge1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZERhdGUgPSAkLmRhdGUoZGF0ZSlcbiAgICAgICAgICAgICQoJyNwdXJjaGFzZS1kYXRlJykudGV4dChmb3JtYXR0ZWREYXRlKTtcbiAgICAgICAgICAgICQoJyNzZXREYXRlQnRuJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnQml0dGUgZWluIGfDvGx0aWdlcyBEYXR1bSBhbmdlYmVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0VXJsID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgICB2YXIgYmFzZVVybCA9IGdldFVybC5wcm90b2NvbCArIFwiLy9cIiArIGdldFVybC5ob3N0ICsgXCIvXCIgKyBnZXRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgdmFyIHBhcmFtZXRlciA9IGZvcm1hdHRlZERhdGU7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgLy8gdXJsOiBiYXNlVXJsICsgJy9zZXQtc2FsZWRhdGUnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90b29scy5sYWdvY2tpLmRlL3NldC1zYWxlZGF0ZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyOiBwYXJhbWV0ZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIDogJyArIGVycm9yVGhyb3duKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgJC5kYXRlID0gZnVuY3Rpb24oZGF0ZU9iamVjdCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGVPYmplY3QpO1xuICAgICAgICB2YXIgZGF5ID0gZC5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtb250aCA9IGQuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZiAoZGF5IDwgMTApIHtcbiAgICAgICAgICAgIGRheSA9IFwiMFwiICsgZGF5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgICAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXI7XG4gICAgfTtcblxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNzcyIsImNsaWNrIiwidG9nZ2xlIiwiZGF0ZSIsImpRdWVyeSIsInZhbCIsImZvcm1hdHRlZERhdGUiLCJ0ZXh0IiwiYWxlcnQiLCJnZXRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRobmFtZSIsInNwbGl0IiwicGFyYW1ldGVyIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImxvZyIsImRhdGVPYmplY3QiLCJkIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==