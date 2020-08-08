(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/account/account.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/account/account.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-side-bar slot=\"end\"></app-side-bar>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"content-padding\">\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"update(f)\" [formGroup]=\"registerForm\">\n    <ion-list lines=\"none\">\n\n        <ion-item>\n          <ion-icon slot=\"start\" class=\"flaticon-avatar\"></ion-icon>\n          <ion-label position=\"stacked\"><h3>First Name</h3></ion-label>\n          <ion-input type=\"text\"  formControlName=\"fname\" placeholder=\"FirstName\" [(ngModel)]=\"fName\" name=\"name\" required></ion-input>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.fname\">\n              <div class=\"error-message\" *ngIf=\"registerForm.get('fname').hasError(validation.type) && (registerForm.get('fname').dirty || registerForm.get('fname').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon slot=\"start\" class=\"flaticon-avatar\"></ion-icon>\n          <ion-label position=\"stacked\">\n            <h3>Last Name</h3>\n          </ion-label>\n          <ion-input type=\"text\"  formControlName=\"lname\" placeholder=\"LastName\" [(ngModel)]=\"lName\" name=\"name\" required></ion-input>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.lname\">\n              <div class=\"error-message\" *ngIf=\"registerForm.get('lname').hasError(validation.type) && (registerForm.get('lname').dirty || registerForm.get('lname').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon slot=\"start\" class=\"flaticon-email\"></ion-icon>\n          <ion-label position=\"stacked\">\n            <h3>Email Address</h3>\n          </ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"  placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" required></ion-input>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.email\">\n              <div class=\"error-message\" *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-item>\n    </ion-list>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" size=\"large\" [disabled]=\"!f.valid\" (click)=\"update(f)\">\n      Save <ion-icon class=\"flaticon-arrow-pointing-to-right\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/members/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/members/account/account.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/members/account/account.page.scss":
/*!***************************************************!*\
  !*** ./src/app/members/account/account.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--contentbg);\n}\nion-content .content-padding {\n  padding: 10px 15px;\n}\nion-content ion-list {\n  border-radius: 5px;\n}\nion-content ion-list ion-item {\n  border-bottom: solid 1px var(--bordercolor);\n  padding-bottom: 15px;\n}\nion-content ion-list ion-item ion-input {\n  --padding-top: 15px !important;\n  --padding-bottom: 0px !important;\n}\nion-content ion-list ion-item:last-child {\n  border: 0;\n}\nion-content ion-list ion-icon {\n  color: var(--primary);\n  font-size: 21px;\n  margin-right: 9px;\n  width: 32px;\n  height: 31px;\n  text-align: center;\n  padding: 5px;\n}\nion-content ion-list ion-label {\n  margin-bottom: 0;\n}\nion-content ion-list ion-label h3 {\n  margin: 0 0 5px;\n  padding: 0;\n  color: var(--black);\n  font-size: 20px;\n}\nion-content ion-list ion-label p {\n  white-space: normal;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9tZW1iZXJzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0FDRVI7QUREUTtFQUtJLDJDQUFBO0VBQ0Esb0JBQUE7QUNEWjtBREpZO0VBQ0ksOEJBQUE7RUFDQSxnQ0FBQTtBQ01oQjtBREZZO0VBQ0ksU0FBQTtBQ0loQjtBRERRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0daO0FERFE7RUFDSSxnQkFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0loQjtBREZZO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDSWhCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50YmcpO1xuICAgIC5jb250ZW50LXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6MTBweCAxNXB4O1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29udGVudGJnKTtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50LXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tbGFiZWwgaDMge1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1sYWJlbCBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/members/account/account.page.ts":
/*!*************************************************!*\
  !*** ./src/app/members/account/account.page.ts ***!
  \*************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _constants_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants.enum */ "./src/app/constants.enum.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let AccountPage = class AccountPage {
    constructor(menu, authService, formBuilder, storage, loadingCtrl) {
        this.menu = menu;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Email cannot be more than 30 characters long.' }
            ],
            fname: [
                { type: 'required', message: 'First Name is required.' }
            ],
            lname: [
                { type: 'required', message: 'Last Name is required.' }
            ],
        };
        this.registerForm = formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            // tslint:disable-next-line: max-line-length
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    ngOnInit() {
        this.getUserInfo();
        this.menu.close();
    }
    ionViewWillEnter() {
    }
    getUserInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please Wait',
                translucent: true,
            });
            this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_ID).then(res => {
                this.userID = res;
            });
            yield loading.present();
            yield this.authService.getUserInfo(this.userID).then(res => {
                this.userData = res.success;
            }).catch(e => {
                console.log(e);
            });
            yield loading.dismiss();
            this.email = this.userData.email;
            this.fName = this.userData.firstname;
            this.lName = this.userData.lastname;
        });
    }
    update(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please Wait',
                translucent: true,
            });
            this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_ID).then(res => {
                this.userID = res;
            });
            yield loading.present();
            yield this.authService.updateUserInfo(form.value.fname, form.value.lname, form.value.email, this.userID);
            this.userData.firstname = form.value.fname;
            this.userData.lastname = form.value.lname;
            this.userData.email = form.value.email;
            this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_DATA, this.userData);
            loading.dismiss();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/account/account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.page.scss */ "./src/app/members/account/account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map