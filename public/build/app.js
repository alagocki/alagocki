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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuXG4vLyBvciB5b3UgY2FuIGluY2x1ZGUgc3BlY2lmaWMgcGllY2VzXG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC90b29sdGlwJyk7XG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC9wb3BvdmVyJyk7XG5cbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJyN3ZWxjb21lJykuY3NzKCdjb2xvcicsICdyZWQnKTtcblxuICAgICQoJy5zaG93LWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uICgpe1xuICAgICAgICAkKCcjZmlsdGVyJykudG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcjc2hvd0RhdGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRlID0galF1ZXJ5KCcjdmVya2F1ZnN0YWcnKS52YWwoKTtcbiAgICAgICAgaWYgKGRhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9ICQuZGF0ZShkYXRlKVxuICAgICAgICAgICAgJCgnI3B1cmNoYXNlLWRhdGUnKS50ZXh0KGZvcm1hdHRlZERhdGUpO1xuICAgICAgICAgICAgJCgnI3NldERhdGVCdG4nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdCaXR0ZSBlaW4gZ8O8bHRpZ2VzIERhdHVtIGFuZ2ViZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb247XG4gICAgICAgIHZhciBiYXNlVXJsID0gZ2V0VXJsLnByb3RvY29sICsgXCIvL1wiICsgZ2V0VXJsLmhvc3QgKyBcIi9cIiArIGdldFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuICAgICAgICB2YXIgcGFyYW1ldGVyID0gZm9ybWF0dGVkRGF0ZTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAvLyB1cmw6IGJhc2VVcmwgKyAnL3NldC1zYWxlZGF0ZScsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3Rvb2xzLmxhZ29ja2kuZGUvc2V0LXNhbGVkYXRlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IHBhcmFtZXRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgOiAnICsgZXJyb3JUaHJvd24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICAkLmRhdGUgPSBmdW5jdGlvbihkYXRlT2JqZWN0KSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZU9iamVjdCk7XG4gICAgICAgIHZhciBkYXkgPSBkLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmIChkYXkgPCAxMCkge1xuICAgICAgICAgICAgZGF5ID0gXCIwXCIgKyBkYXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgICAgICAgIG1vbnRoID0gXCIwXCIgKyBtb250aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5ICsgXCIuXCIgKyBtb250aCArIFwiLlwiICsgeWVhcjtcbiAgICB9O1xuXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJkb2N1bWVudCIsInJlYWR5IiwiY3NzIiwiY2xpY2siLCJ0b2dnbGUiLCJkYXRlIiwialF1ZXJ5IiwidmFsIiwiZm9ybWF0dGVkRGF0ZSIsInRleHQiLCJhbGVydCIsImdldFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwic3BsaXQiLCJwYXJhbWV0ZXIiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJjb25zb2xlIiwibG9nIiwiZGF0ZU9iamVjdCIsImQiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9