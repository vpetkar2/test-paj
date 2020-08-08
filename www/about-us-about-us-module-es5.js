function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/about-us/about-us.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/about-us/about-us.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-side-bar slot=\"end\"></app-side-bar>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button >\n          <ion-back-button defaultHref=\"/map\"></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"ios\">About Us</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>About us</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n  <h3>About company</h3>\n  <div class=\"company-img about-company\">\n    <img src=\"https://www.paj-gps.de/wp-content/uploads/2020/03/titelbild-gps-tracker-von-paj.jpg\">\n  </div> \n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n  \n  <div class=\"about-app\">\n    <h3>About app</h3>\n    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\n    <h3 style=\"margin-top: 20px;\">Manual</h3>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <div class=\"company-img\">\n            <img src=\"https://www.paj-gps.de/wp-content/uploads/2020/03/titelbild-gps-tracker-von-paj.jpg\">\n            <a href=\"\"><ion-icon name=\"download\"></ion-icon> Download</a>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <div class=\"company-img\">\n            <img src=\"https://www.paj-gps.de/wp-content/uploads/2020/03/titelbild-gps-tracker-von-paj.jpg\">\n            <a href=\"\"><ion-icon name=\"download\"></ion-icon> Download</a>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <div class=\"company-img\">\n            <img src=\"https://www.paj-gps.de/wp-content/uploads/2020/03/titelbild-gps-tracker-von-paj.jpg\">\n            <a href=\"\"><ion-icon name=\"download\"></ion-icon> Download</a>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"page-links\">\n      <ul>\n        <li><a href=\"\">Lorem Ipsum is simply dummy text</a></li>\n        <li><a href=\"\">of the printing and typesetting</a></li>\n        <li><a href=\"\">ndustry. Lorem Ipsum has</a></li>\n        <li><a href=\"\">the industry's standard dummy</a></li>\n        <li><a href=\"\">text ever since</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"about-app\">\n    <h3>Contact</h3>\n    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\n    <h2>\n      <ion-icon name=\"call\"></ion-icon> +49 (0) 2292 39 499 59\n    </h2>\n    <h2>\n      <ion-icon name=\"mail\"></ion-icon> info@paj-gps.de\n    </h2>\n    <h2>\n      <ion-icon name=\"map\"></ion-icon> Lorem ipsum Germany 4110\n    </h2>\n  </div>\n  \n\n\n  \n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/members/about-us/about-us.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/members/about-us/about-us.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersAboutUsAboutUsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content h3 {\n  margin-top: 0;\n  font-size: 18px;\n}\nion-content p {\n  font-size: 14px;\n  color: #959595;\n  line-height: 22px;\n  padding: 0;\n  margin: 0;\n}\nion-content p:first-child {\n  margin-top: 0;\n}\nion-content .about-company {\n  margin: 10px 0 10px;\n}\nion-content .about-company img {\n  width: 100%;\n  display: block;\n  border-radius: 5px;\n}\nion-content .about-app {\n  background: #f5f5f5;\n  padding: 10px;\n  border-radius: 5px;\n  margin: 20px 0 0;\n}\nion-content .about-app a {\n  color: #f05123;\n  font-size: 15px;\n  font-weight: bold;\n  text-decoration: none;\n}\nion-content .about-app a ion-icon {\n  margin: 0px 0 0;\n  vertical-align: middle;\n}\nion-content .about-app h2 {\n  color: #000;\n  font-size: 16px;\n}\nion-content .about-app h2 ion-icon {\n  margin: 0px 0 0;\n  vertical-align: middle;\n  color: #f05123;\n}\nion-content .page-links {\n  margin: 15px 0 0;\n}\nion-content .page-links ul {\n  margin: 0 0 0 10px;\n  padding: 0;\n  list-style: none;\n}\nion-content .page-links ul li {\n  margin: 8px 0;\n  padding: 0 0 0 17px;\n  list-style: none;\n  position: relative;\n}\nion-content .page-links ul li a {\n  color: #f05123;\n  font-size: 15px;\n  font-weight: bold;\n  text-decoration: none;\n}\nion-content .page-links ul li a:after {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZGF0YWxvZ3kvcGFqcG9ydGFsdjIvc3JjL2FwcC9tZW1iZXJzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW1iZXJzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQU47QURHSTtFQUNFLGFBQUE7QUNETjtBREdJO0VBQ0ksbUJBQUE7QUNEUjtBREVRO0VBQ0ksV0FBQTtFQUFhLGNBQUE7RUFBZ0Isa0JBQUE7QUNFekM7QURFSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUFnQixlQUFBO0VBQWlCLGlCQUFBO0VBQW1CLHFCQUFBO0FDSWhFO0FESFk7RUFDSSxlQUFBO0VBQWlCLHNCQUFBO0FDTWpDO0FESFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0taO0FESlk7RUFDSSxlQUFBO0VBQWlCLHNCQUFBO0VBQXdCLGNBQUE7QUNRekQ7QURKSTtFQUNJLGdCQUFBO0FDTVI7QURMUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDT1o7QUROWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNRaEI7QURQZ0I7RUFDSSxjQUFBO0VBQWdCLGVBQUE7RUFBaUIsaUJBQUE7RUFBbUIscUJBQUE7QUNZeEU7QURYb0I7RUFDSSxXQUFBO0VBQWEsVUFBQTtFQUFZLFdBQUE7RUFBYSxnQkFBQTtFQUN0QyxrQkFBQTtFQUFvQixPQUFBO0VBQVMsUUFBQTtBQ2tCckQiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGgze1xuICAgIG1hcmdpbi10b3A6IDA7IFxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzk1OTU5NTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAgIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgLmFib3V0LWNvbXBhbnl7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBkaXNwbGF5OiBibG9jazsgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAuYWJvdXQtYXBwe1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDA7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogI2YwNTEyMzsgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogYm9sZDsgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMCAwOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwIDA7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGNvbG9yOiAjZjA1MTIzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYWdlLWxpbmtze1xuICAgICAgICBtYXJnaW46IDE1cHggMCAwO1xuICAgICAgICB1bHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjhweCAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDE3cHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMDUxMjM7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7IHdpZHRoOiA3cHg7IGhlaWdodDogN3B4OyBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDVweDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9ICAgIiwiaW9uLWNvbnRlbnQgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OTU5NTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaW9uLWNvbnRlbnQgLmFib3V0LWNvbXBhbnkge1xuICBtYXJnaW46IDEwcHggMCAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFib3V0LWNvbXBhbnkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAuYWJvdXQtYXBwIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuaW9uLWNvbnRlbnQgLmFib3V0LWFwcCBhIHtcbiAgY29sb3I6ICNmMDUxMjM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5hYm91dC1hcHAgYSBpb24taWNvbiB7XG4gIG1hcmdpbjogMHB4IDAgMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlvbi1jb250ZW50IC5hYm91dC1hcHAgaDIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmFib3V0LWFwcCBoMiBpb24taWNvbiB7XG4gIG1hcmdpbjogMHB4IDAgMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICNmMDUxMjM7XG59XG5pb24tY29udGVudCAucGFnZS1saW5rcyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG59XG5pb24tY29udGVudCAucGFnZS1saW5rcyB1bCB7XG4gIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5wYWdlLWxpbmtzIHVsIGxpIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgcGFkZGluZzogMCAwIDAgMTdweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLnBhZ2UtbGlua3MgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZjA1MTIzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24tY29udGVudCAucGFnZS1saW5rcyB1bCBsaSBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/members/about-us/about-us.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/members/about-us/about-us.component.ts ***!
    \********************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppMembersAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/about-us/about-us.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.component.scss */
      "./src/app/members/about-us/about-us.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/members/about-us/about-us.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/members/about-us/about-us.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutUsModule */

  /***/
  function srcAppMembersAboutUsAboutUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsModule", function () {
      return AboutUsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about-us.component */
    "./src/app/members/about-us/about-us.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var routes = [{
      path: '',
      component: _about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    }];

    var AboutUsModule = function AboutUsModule() {
      _classCallCheck(this, AboutUsModule);
    };

    AboutUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]],
      imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
    })], AboutUsModule);
    /***/
  }
}]);
//# sourceMappingURL=about-us-about-us-module-es5.js.map