(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-member-routing-module"],{

/***/ "./src/app/members/member-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/members/member-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    // { path: 'map', loadChildren: './map/map.module#MapPageModule' },
    // { path: 'map', canActivate: [AuthGuard], loadChildren: './members/map/map.module#MapPageModule' },
    { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
    { path: 'device-management', loadChildren: './device-management/device-management.module#DeviceManagementPageModule' },
    { path: 'deafult-icons', loadChildren: './device-management/modal/deafult-icons/deafult-icons.module#DeafultIconsPageModule' },
    { path: 'device-img', loadChildren: './device-management/modal/device-img/device-img.module#DeviceImgPageModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
    { path: 'device-details', loadChildren: './dashboard/modal/device-details/device-details.module#DeviceDetailsPageModule' },
    { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' }
];
let MemberRoutingModule = class MemberRoutingModule {
};
MemberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MemberRoutingModule);



/***/ })

}]);
//# sourceMappingURL=members-member-routing-module-es2015.js.map