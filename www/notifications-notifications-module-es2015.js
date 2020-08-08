(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-side-bar slot=\"end\"></app-side-bar>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"loadMap();\">\n      <ion-back-button defaultHref=\"/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Alarms</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"content-padding\">\n    <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let item of notifications; let i = index\">\n        <ion-avatar slot=\"start\">\n          <img src=\"./../../assets/images/alarm-thumb.jpg\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{item.bezeichnung}}</h3>\n          <p>{{item.meldung}}</p>\n          <!-- <ion-row>\n            <ion-col>\n              <div class=\"alarm-details\"> <i class=\"flaticon-calendar-1\"></i> 02 July 2020, 11:17 min </div>\n            </ion-col>\n            <ion-col class=\"ion-text-end\">\n              <div class=\"alarm-details\"> <a href=\"\">View details <i class=\"flaticon-arrow-pointing-to-right\"></i> </a>\n              </div>\n            </ion-col>\n          </ion-row> -->\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--contentbg);\n}\nion-content .content-padding {\n  padding: 10px 15px;\n}\nion-content ion-list {\n  background: transparent;\n}\nion-content ion-list ion-item {\n  margin-bottom: 10px;\n  border-radius: 7px;\n}\nion-content ion-list ion-item:last-child {\n  margin-bottom: 0;\n}\nion-content ion-list ion-item ion-avatar {\n  width: 53px;\n  height: 53px;\n  align-self: end;\n  margin-top: 13px;\n  margin-right: 10px;\n}\nion-content ion-list ion-item ion-avatar img {\n  border-radius: 5px;\n}\nion-content ion-list ion-item ion-label {\n  margin-bottom: 0;\n}\nion-content ion-list ion-item ion-label h3 {\n  margin: 0 0 5px;\n  padding: 0;\n  color: var(--black);\n}\nion-content ion-list ion-item ion-label p {\n  white-space: normal;\n  font-size: 12px;\n}\nion-content ion-list ion-item .alarm-details {\n  font-size: 12px;\n  color: #b1b1b1;\n}\nion-content ion-list ion-item .alarm-details i {\n  font-size: 14px;\n  margin: 0 3px 0 0;\n}\nion-content ion-list ion-item .alarm-details a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBREFJO0VBQ0ksdUJBQUE7QUNFUjtBRERRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0daO0FERlk7RUFDSSxnQkFBQTtBQ0loQjtBREZZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0loQjtBREhnQjtFQUNJLGtCQUFBO0FDS3BCO0FERlk7RUFDSSxnQkFBQTtBQ0loQjtBREhnQjtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNLcEI7QURIZ0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNLcEI7QURGWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSWhCO0FESGdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDS3BCO0FESGdCO0VBQ0kscUJBQUE7QUNLcEIiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50YmcpO1xuICAgIC5jb250ZW50LXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6MTBweCAxNXB4O1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDsgXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1M3B4O1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGFybS1kZXRhaWxze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2IxYjFiMTtcbiAgICAgICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDNweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnRiZyk7XG59XG5pb24tY29udGVudCAuY29udGVudC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDUzcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDMge1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIC5hbGFybS1kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2IxYjFiMTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIC5hbGFybS1kZXRhaWxzIGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCAzcHggMCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gLmFsYXJtLWRldGFpbHMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NotificationsPage = class NotificationsPage {
    constructor(router, authService, loadingCtrl) {
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please Wait',
                translucent: true,
            });
            yield loading.present();
            // this.notifications = await this.authService.getNotifications();
            yield this.authService.getNotifications().then(res => {
                this.notifications = res.success;
            }).catch(e => {
                console.log(e);
            });
            console.log(this.notifications);
            loading.dismiss();
        });
    }
    loadMap() {
        this.router.navigate(['/map']);
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map