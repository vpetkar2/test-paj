function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./about-us/about-us.module": ["./src/app/members/about-us/about-us.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "about-us-about-us-module"],
      "./account/account.module": ["./src/app/members/account/account.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "account-account-module"],
      "./dashboard/dashboard.module": ["./src/app/members/dashboard/dashboard.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "dashboard-dashboard-module"],
      "./dashboard/modal/device-details/device-details.module": ["./src/app/members/dashboard/modal/device-details/device-details.module.ts"],
      "./device-management/device-management.module": ["./src/app/members/device-management/device-management.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "device-management-device-management-module"],
      "./device-management/modal/deafult-icons/deafult-icons.module": ["./src/app/members/device-management/modal/deafult-icons/deafult-icons.module.ts"],
      "./device-management/modal/device-img/device-img.module": ["./src/app/members/device-management/modal/device-img/device-img.module.ts"],
      "./members/about-us/about-us.module": ["./src/app/members/about-us/about-us.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "about-us-about-us-module"],
      "./members/account/account.module": ["./src/app/members/account/account.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "account-account-module"],
      "./members/dashboard/dashboard.module": ["./src/app/members/dashboard/dashboard.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "dashboard-dashboard-module"],
      "./members/device-management/device-management.module": ["./src/app/members/device-management/device-management.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "device-management-device-management-module"],
      "./members/map/map.module": ["./src/app/members/map/map.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "members-map-map-module"],
      "./members/member-routing.module": ["./src/app/members/member-routing.module.ts", "members-member-routing-module"],
      "./notifications/notifications.module": ["./src/app/notifications/notifications.module.ts", "default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c", "notifications-notifications-module"],
      "./public/forget-password/forget-password.module": ["./src/app/public/forget-password/forget-password.module.ts", "public-forget-password-forget-password-module"],
      "./public/login/login.module": ["./src/app/public/login/login.module.ts", "public-login-login-module"],
      "./public/register/register.module": ["./src/app/public/register/register.module.ts", "public-register-register-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 78],
      "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 79],
      "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 80],
      "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 81]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/modal/device-details/device-details.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/modal/device-details/device-details.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersDashboardModalDeviceDetailsDeviceDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>device-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersDeviceManagementModalDeafultIconsDeafultIconsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n  <ion-title>Select Deafult Icon</ion-title>\n   <ion-buttons slot=\"start\">\n    <ion-button (click)=\"dismiss()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"center-align\">\n  <ion-list>\n    <button style=\"height: 80px;width: 80px;border-radius: 50%;\" *ngFor=\"let icon of deafult_icon\" (click)=\"dismiss(icon)\"><img src=\"../../../../../assets/device_markers/{{icon}}.png\" ></button>\n    <!-- </ion-item> -->\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/device-img/device-img.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/device-img/device-img.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersDeviceManagementModalDeviceImgDeviceImgPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n  <ion-title>Device Image</ion-title>\n   <ion-buttons slot=\"start\">\n    <ion-button (click)=\"dismiss()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-avatar> -->\n    <!-- <img class=\"profile\" src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n    <div *ngIf=\"!this.iconusecustom\" class=\"deafultIcon profile\"  [style.backgroundImage]=\"'url(../../../../../assets/icons/map/devices/device_markers/'+ this.iconname +'.png)'\" ></div>\n    <!-- <img alt=\"Image not Found\" *ngIf=\"!this.iconusecustom\" class=\"deafultIcon profile\" src=\"../../../../../assets/icons/map/devices/device_markers/{{this.iconname}}.png\"> -->\n    \n    <div *ngIf=\"this.iconusecustom\" class=\"deafultIcon profile\"  [style.backgroundImage]=\"'url('+ this.url+'/upload/images/users/'+this.user_id+'/devices/'+this.id+'/customImg/'+this.iconcustomimage +')'\"></div>\n    <!-- <img alt=\"Image not Found\" class=\"deafultIcon profile\" *ngIf=\"this.iconusecustom\" [src]=\"(this.url+'/upload/images/users/'+this.user_id+'/devices/'+this.id+'/customImg/'+this.iconcustomimage)\"> -->\n    <!-- <img alt=\"Image not Found\" class=\"profile\" src=\"../../../../assets/device_markers/{{this.deafIconName}}.png\"> -->\n    <input type=\"file\" style=\"display: none;\" accept=\"image/*\" (change)=\"fileupload($event)\" #fileinput />\n    <!-- <input type=\"file\"  accept=\"image/*\" capture=\"camera\" #cameraInput /> -->\n  <!-- </ion-avatar> -->\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row >\n      <ion-col (click)=\"DeafultImg()\"  class=\"center-align\">\n        <ion-icon class=\"bottom-icon\" name=\"person\"></ion-icon>\n        <ion-label>Deafult Picture</ion-label>\n      </ion-col>\n      <ion-col (click)=\"takePicture()\" class=\"center-align\">\n        <ion-icon class=\"bottom-icon\" name=\"camera\"></ion-icon>\n        <ion-label>Take photo</ion-label>\n      </ion-col>\n\n      <ion-col (click)=\"fileinput.click()\" class=\"center-align\">\n        <ion-icon class=\"bottom-icon\" name=\"cloud-upload\"></ion-icon>\n        <ion-label>Select Image</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/device-setting/device-setting.page.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/device-setting/device-setting.page.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersDeviceManagementModalDeviceSettingDeviceSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n     <ion-button (click)=\"dismiss()\">\n      <ion-icon class=\"flaticon-arrow-pointing-to-left\" slot=\"icon-only\" name=\"arrow-back\"></ion-icon >\n     </ion-button>\n    </ion-buttons>\n    <ion-title>Device Settings\n      <!-- <br><small>{{name}}</small> -->\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <div class=\"custom-field\">\n          <ion-label>Device Name<ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-item class=\"item-field\">\n            <ion-input required placeholder=\"Benz car tracker 1\" [(ngModel)]=\"name\"></ion-input>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label>Color</ion-label>\n          <!-- <div class=\"color-box\" style=\"background: #5e68e3;\"></div> -->\n          <input type=\"color\" [(ngModel)]=\"color\" class=\"color-box\">\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Device Image\n            <ion-avatar>\n              <img alt=\"Image not Found\" *ngIf=\"!this.iconusecustom\" class=\"deafultIcon\" src=\"../../../../../assets/device_markers/{{this.iconname}}.png\">\n      \n              <img alt=\"Image not Found\" class=\"deafultIcon\" *ngIf=\"this.iconusecustom\" [src]=\"(this.url+'/upload/images/users/'+this.user_id+'/devices/'+this.id+'/customImg/'+this.iconcustomimage)\">\n            </ion-avatar>\n          </ion-label>\n          <ion-button expand=\"block\" size=\"large\" (click)=\"DeviceImg()\">\n            <ion-icon class=\"flaticon-photo-camera\"></ion-icon> Change photo\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-label>Sharing</ion-label>\n          <ion-toggle slot=\"end\" color=\"primary\" [(ngModel)]=\"device_viewlink\" (ionChange)=\"!device_viewlink\"></ion-toggle>\n        </ion-item>\n        <div class=\"custom-field\" *ngIf=\"device_viewlink\">\n          <ion-label>Sharing link</ion-label>\n          <ion-item class=\"item-field\">\n            <ion-input required type=\"text\" [(ngModel)]=\"shaireLink\" placeholder=\"Lorem ipsum doler site amet\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n     <ion-button (click)=\"dismiss()\">\n      <ion-icon class=\"flaticon-arrow-pointing-to-left\" slot=\"icon-only\" name=\"arrow-back\"></ion-icon >\n     </ion-button>\n    </ion-buttons>\n    <ion-title>Device Settings <br><small>{{name}}</small></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Device Name <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"name\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label >Color</ion-label>\n    <input type=\"color\" [(ngModel)]=\"color\" >\n    </ion-item>\n    <ion-item>\n      <ion-label >Device image:</ion-label>\n\n      <img alt=\"Image not Found\" *ngIf=\"!this.iconusecustom\" class=\"deafultIcon\" src=\"../../../../../assets/device_markers/{{this.iconname}}.png\">\n      \n      <img alt=\"Image not Found\" class=\"deafultIcon\" *ngIf=\"this.iconusecustom\" [src]=\"(this.url+'/upload/images/users/'+this.user_id+'/devices/'+this.id+'/customImg/'+this.iconcustomimage)\">\n      <ion-button (click)=\"DeviceImg()\" >Change</ion-button>\n\n    </ion-item>\n    <ion-item>\n      <ion-label >Sharing:</ion-label>\n\n      <ion-toggle [(ngModel)]=\"device_viewlink\" (ionChange)=\"!device_viewlink\"></ion-toggle>  \n    </ion-item>\n  <ion-item *ngIf=\"device_viewlink\">\n    <ion-label>Sharing link:</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"shaireLink\"></ion-input>\n  </ion-item>\n</ion-list>\n</ion-content> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'map',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: './public/login/login.module#LoginPageModule'
    }, {
      path: 'register',
      loadChildren: './public/register/register.module#RegisterPageModule'
    }, {
      path: 'map',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      loadChildren: './members/map/map.module#MapPageModule'
    }, {
      path: 'account',
      loadChildren: './members/account/account.module#AccountPageModule'
    }, {
      path: 'device-management',
      loadChildren: './members/device-management/device-management.module#DeviceManagementPageModule'
    }, {
      path: 'dashboard',
      loadChildren: './members/dashboard/dashboard.module#DashboardPageModule'
    }, {
      path: 'members',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      loadChildren: './members/member-routing.module#MemberRoutingModule'
    }, {
      path: 'forget-password',
      loadChildren: './public/forget-password/forget-password.module#ForgetPasswordPageModule'
    }, {
      path: 'notifications',
      loadChildren: './notifications/notifications.module#NotificationsPageModule'
    }, {
      path: 'about-us',
      loadChildren: './members/about-us/about-us.module#AboutUsModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, authenticationService, router, fcm, alertCtrl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authenticationService = authenticationService;
        this.router = router;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.authenticationService.authenticationState.subscribe(function (tokenState) {
              _this.authenticationService.platform.subscribe(function (state) {
                if (state) {
                  if (tokenState) {
                    console.log('url', _this.router.url); // debugger;

                    if (_this.router.url === '/login' || _this.router.url === '/') {
                      _this.router.navigate(['map']);

                      _this.splashScreen.hide();
                    } else {
                      _this.router.navigate([_this.router.url]);

                      _this.splashScreen.hide();
                    }
                  } else {
                    _this.router.navigate(['/login']);

                    _this.splashScreen.hide();
                  }
                }
              });
            });

            _this.fcm.onNotification().subscribe(function (data) {
              if (data.wasTapped) {
                console.log("Received in background"); //   this.alertCtrl.create({
                //     header: 'Notification',
                //     message: data.text,
                //     buttons: ['OK']
                // }).then(alertEl => {
                //   alertEl.present();
                // });
              } else {
                console.log("Received in foreground");
                console.log(data);

                _this.alertCtrl.create({
                  header: data.title,
                  message: data.body,
                  buttons: ['OK']
                }).then(function (alertEl) {
                  alertEl.present();
                });
              }

              ;
            });

            _this.statusBar.styleDefault(); // this.splashScreen.hide();

          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/interceptor.service */
    "./src/app/services/interceptor.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ion-bottom-drawer */
    "./node_modules/ion-bottom-drawer/fesm2015/ion-bottom-drawer.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _members_device_management_modal_device_setting_device_setting_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./members/device-management/modal/device-setting/device-setting.module */
    "./src/app/members/device-management/modal/device-setting/device-setting.module.ts");
    /* harmony import */


    var _members_device_management_modal_device_img_device_img_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./members/device-management/modal/device-img/device-img.module */
    "./src/app/members/device-management/modal/device-img/device-img.module.ts");
    /* harmony import */


    var _members_device_management_modal_deafult_icons_deafult_icons_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./members/device-management/modal/deafult-icons/deafult-icons.module */
    "./src/app/members/device-management/modal/deafult-icons/deafult-icons.module.ts");
    /* harmony import */


    var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @fortawesome/fontawesome-free */
    "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
    /* harmony import */


    var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");
    /* harmony import */


    var _members_dashboard_modal_device_details_device_details_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./members/dashboard/modal/device-details/device-details.module */
    "./src/app/members/dashboard/modal/device-details/device-details.module.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts"); // import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_14__["IonBottomDrawerModule"], _members_device_management_modal_device_setting_device_setting_module__WEBPACK_IMPORTED_MODULE_16__["DeviceSettingPageModule"], _members_device_management_modal_device_img_device_img_module__WEBPACK_IMPORTED_MODULE_17__["DeviceImgPageModule"], _members_device_management_modal_deafult_icons_deafult_icons_module__WEBPACK_IMPORTED_MODULE_18__["DeafultIconsPageModule"], _members_dashboard_modal_device_details_device_details_module__WEBPACK_IMPORTED_MODULE_21__["DeviceDetailsPageModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production
      })],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_20__["FCM"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["InterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/constants.enum.ts":
  /*!***********************************!*\
    !*** ./src/app/constants.enum.ts ***!
    \***********************************/

  /*! exports provided: Constants */

  /***/
  function srcAppConstantsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Constants;

    (function (Constants) {
      Constants["IS_ADMIN"] = "isAdmin";
      Constants["USER_ID"] = "userID";
      Constants["TOKEN_KEY"] = "auth-token"; // ROUTE = 'http://localhost:8000',

      Constants["ROUTE"] = "https://api.paj-gps.com";
      Constants["SELECTED_DEVICE"] = "selectedDevice";
      Constants["DEVICE_NAME"] = "deviceName";
      Constants["UPDATE_MAP"] = "updateMap";
      Constants["ROUTE_ICON"] = "routeIcon";
      Constants["MAP"] = "map-style";
      Constants["UPDATE_STYLE"] = "updateStyle";
      Constants["UPDATE_LOGIN"] = "updateLogin";
      Constants["USER_DATA"] = "userData";
    })(Constants || (Constants = {}));
    /***/

  },

  /***/
  "./src/app/geo-json-template.ts":
  /*!**************************************!*\
    !*** ./src/app/geo-json-template.ts ***!
    \**************************************/

  /*! exports provided: IGeometry, GeoProperties, PolylinePoints, MarkerInfo, LayerInfo, DeviceMarkers, ToggleCheck, DevicesIconMarks, IGeoJson, geofencefeature, GeoJsonTemplate, DeviceModel, DeviceInfo, DevicePosition */

  /***/
  function srcAppGeoJsonTemplateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IGeometry", function () {
      return IGeometry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoProperties", function () {
      return GeoProperties;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolylinePoints", function () {
      return PolylinePoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerInfo", function () {
      return MarkerInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerInfo", function () {
      return LayerInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceMarkers", function () {
      return DeviceMarkers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleCheck", function () {
      return ToggleCheck;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicesIconMarks", function () {
      return DevicesIconMarks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IGeoJson", function () {
      return IGeoJson;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "geofencefeature", function () {
      return geofencefeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoJsonTemplate", function () {
      return GeoJsonTemplate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceModel", function () {
      return DeviceModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceInfo", function () {
      return DeviceInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicePosition", function () {
      return DevicePosition;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var IGeometry = function IGeometry() {
      _classCallCheck(this, IGeometry);
    };

    var GeoProperties = function GeoProperties() {
      _classCallCheck(this, GeoProperties);
    };

    var PolylinePoints = function PolylinePoints() {
      _classCallCheck(this, PolylinePoints);
    };

    var MarkerInfo = function MarkerInfo() {
      _classCallCheck(this, MarkerInfo);
    };

    var LayerInfo = function LayerInfo() {
      _classCallCheck(this, LayerInfo);
    };

    var DeviceMarkers = function DeviceMarkers() {
      _classCallCheck(this, DeviceMarkers);
    };

    var ToggleCheck = function ToggleCheck() {
      _classCallCheck(this, ToggleCheck);
    };

    var DevicesIconMarks = function DevicesIconMarks() {
      _classCallCheck(this, DevicesIconMarks);
    };

    var IGeoJson = function IGeoJson() {
      _classCallCheck(this, IGeoJson);
    };

    var geofencefeature = function geofencefeature() {
      _classCallCheck(this, geofencefeature);
    };

    var GeoJsonTemplate = function GeoJsonTemplate() {
      _classCallCheck(this, GeoJsonTemplate);
    };

    var DeviceModel = function DeviceModel() {
      _classCallCheck(this, DeviceModel);
    };

    var DeviceInfo = function DeviceInfo() {
      _classCallCheck(this, DeviceInfo);
    };

    var DevicePosition = function DevicePosition() {
      _classCallCheck(this, DevicePosition);
    };
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.auth.isAuthenticated();
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/members/dashboard/modal/device-details/device-details.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/members/dashboard/modal/device-details/device-details.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: DeviceDetailsPageModule */

  /***/
  function srcAppMembersDashboardModalDeviceDetailsDeviceDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceDetailsPageModule", function () {
      return DeviceDetailsPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _device_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-details.page */
    "./src/app/members/dashboard/modal/device-details/device-details.page.ts");

    var routes = [{
      path: '',
      component: _device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]
    }];

    var DeviceDetailsPageModule = function DeviceDetailsPageModule() {
      _classCallCheck(this, DeviceDetailsPageModule);
    };

    DeviceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]]
    })], DeviceDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/members/dashboard/modal/device-details/device-details.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/members/dashboard/modal/device-details/device-details.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersDashboardModalDeviceDetailsDeviceDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL21vZGFsL2RldmljZS1kZXRhaWxzL2RldmljZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/members/dashboard/modal/device-details/device-details.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/members/dashboard/modal/device-details/device-details.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: DeviceDetailsPage */

  /***/
  function srcAppMembersDashboardModalDeviceDetailsDeviceDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceDetailsPage", function () {
      return DeviceDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeviceDetailsPage = /*#__PURE__*/function () {
      function DeviceDetailsPage() {
        _classCallCheck(this, DeviceDetailsPage);
      }

      _createClass(DeviceDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeviceDetailsPage;
    }();

    DeviceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/modal/device-details/device-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-details.page.scss */
      "./src/app/members/dashboard/modal/device-details/device-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DeviceDetailsPage);
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/deafult-icons/deafult-icons.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/members/device-management/modal/deafult-icons/deafult-icons.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: DeafultIconsPageModule */

  /***/
  function srcAppMembersDeviceManagementModalDeafultIconsDeafultIconsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeafultIconsPageModule", function () {
      return DeafultIconsPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _deafult_icons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deafult-icons.page */
    "./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.ts");

    var routes = [{
      path: '',
      component: _deafult_icons_page__WEBPACK_IMPORTED_MODULE_6__["DeafultIconsPage"]
    }];

    var DeafultIconsPageModule = function DeafultIconsPageModule() {
      _classCallCheck(this, DeafultIconsPageModule);
    };

    DeafultIconsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_deafult_icons_page__WEBPACK_IMPORTED_MODULE_6__["DeafultIconsPage"]]
    })], DeafultIconsPageModule);
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersDeviceManagementModalDeafultIconsDeafultIconsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center-align {\n  text-align: center;\n}\n\nbutton {\n  background: none;\n}\n\nion-button {\n  --color: var(--white) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9tZW1iZXJzL2RldmljZS1tYW5hZ2VtZW50L21vZGFsL2RlYWZ1bHQtaWNvbnMvZGVhZnVsdC1pY29ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvZGV2aWNlLW1hbmFnZW1lbnQvbW9kYWwvZGVhZnVsdC1pY29ucy9kZWFmdWx0LWljb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0NBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGV2aWNlLW1hbmFnZW1lbnQvbW9kYWwvZGVhZnVsdC1pY29ucy9kZWFmdWx0LWljb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufSIsIi5jZW50ZXItYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: DeafultIconsPage */

  /***/
  function srcAppMembersDeviceManagementModalDeafultIconsDeafultIconsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeafultIconsPage", function () {
      return DeafultIconsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var DeafultIconsPage = /*#__PURE__*/function () {
      function DeafultIconsPage(modelCtrl) {
        _classCallCheck(this, DeafultIconsPage);

        this.modelCtrl = modelCtrl;
        this.deafult_icon = [//v
        'v2_grandma', 'v2_antique_car', 'v2_antique_car_2', 'v2_antique_car_3', 'v2_bag', 'v2_boat', 'v2_boat_2', 'v2_boat_3', 'v2_boat_4', 'v2_car', 'v2_car_2', 'v2_car_3', 'v2_car_4', 'v2_car_5', 'v2_cat', 'v2_cat_2', 'v2_cat_3', 'v2_cat_4', 'v2_cat_5', 'v2_cat_6', 'v2_cat_7', 'v2_dog', 'v2_dog_2', 'v2_dog_3', 'v2_dog_4', 'v2_dog_5', 'v2_dog_6', 'v2_dog_7', 'v2_dog_8', 'v2_dog_9', 'v2_excavator', 'v2_excavator_2', 'v2_jetski', 'v2_motorcycle', 'v2_motorcycle_2', 'v2_motorcycle_3', 'v2_motorcycle_4', 'v2_motorcycle_5', 'v2_motorcycle_6', 'v2_quad', 'v2_quad_2', 'v2_truck', 'v2_truck_2', 'v2_truck_3', 'v2_truck_4', 'paj_iconset_auto', 'paj_iconset_auto1', 'paj_iconset_auto2', 'paj_iconset_auto3', 'paj_iconset_auto4', 'paj_iconset_auto5', 'paj_iconset_auto6', 'paj_iconset_auto7', 'paj_iconset_auto8', 'paj_iconset_auto9', 'paj_iconset_auto10', 'paj_iconset_lkw1', 'paj_iconset_lkw2', 'paj_iconset_lkw3', 'paj_iconset_lkw4', 'paj_iconset_lkw5', 'paj_iconset_motorrad', 'paj_iconset_personen', 'paj_iconset_baumaschinen1', 'paj_iconset_baumaschinen2', 'paj_iconset_baumaschinen3', 'paj_iconset_camping1', 'paj_iconset_camping2', 'paj_iconset_landwirtschaft1'];
      }

      _createClass(DeafultIconsPage, [{
        key: "addNumber",
        value: function addNumber() {
          for (var i = 1; i <= 100; i++) {
            this.deafult_icon.push('paj_iconset_' + i);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addNumber();
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modelCtrl.dismiss({
                      dismissed: true,
                      iconname: icon
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DeafultIconsPage;
    }();

    DeafultIconsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DeafultIconsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deafult-icons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deafult-icons.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deafult-icons.page.scss */
      "./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DeafultIconsPage);
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/device-img/device-img.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/members/device-management/modal/device-img/device-img.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: DeviceImgPageModule */

  /***/
  function srcAppMembersDeviceManagementModalDeviceImgDeviceImgModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceImgPageModule", function () {
      return DeviceImgPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _device_img_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-img.page */
    "./src/app/members/device-management/modal/device-img/device-img.page.ts");

    var routes = [{
      path: '',
      component: _device_img_page__WEBPACK_IMPORTED_MODULE_6__["DeviceImgPage"]
    }];

    var DeviceImgPageModule = function DeviceImgPageModule() {
      _classCallCheck(this, DeviceImgPageModule);
    };

    DeviceImgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_device_img_page__WEBPACK_IMPORTED_MODULE_6__["DeviceImgPage"]]
    })], DeviceImgPageModule);
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/device-img/device-img.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/members/device-management/modal/device-img/device-img.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersDeviceManagementModalDeviceImgDeviceImgPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center-align {\n  text-align: center;\n  font-size: 12px;\n}\n\n.bottom-icon {\n  display: block;\n  font-size: 22px;\n  margin: 5px auto;\n}\n\n.profile {\n  width: 200px;\n  height: 200px;\n  margin: 50px auto;\n  display: block;\n  border-radius: 50%;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nion-button {\n  --color: var(--white) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9tZW1iZXJzL2RldmljZS1tYW5hZ2VtZW50L21vZGFsL2RldmljZS1pbWcvZGV2aWNlLWltZy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvZGV2aWNlLW1hbmFnZW1lbnQvbW9kYWwvZGV2aWNlLWltZy9kZXZpY2UtaW1nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGV2aWNlLW1hbmFnZW1lbnQvbW9kYWwvZGV2aWNlLWltZy9kZXZpY2UtaW1nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uYm90dG9tLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xufVxuLnByb2ZpbGUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufSIsIi5jZW50ZXItYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJvdHRvbS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLnByb2ZpbGUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/device-img/device-img.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/members/device-management/modal/device-img/device-img.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: DeviceImgPage */

  /***/
  function srcAppMembersDeviceManagementModalDeviceImgDeviceImgPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceImgPage", function () {
      return DeviceImgPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _deafult_icons_deafult_icons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../deafult-icons/deafult-icons.page */
    "./src/app/members/device-management/modal/deafult-icons/deafult-icons.page.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var DeviceImgPage = /*#__PURE__*/function () {
      function DeviceImgPage(modelCtrl, authService, platform, sanitizer) {
        _classCallCheck(this, DeviceImgPage);

        this.modelCtrl = modelCtrl;
        this.authService = authService;
        this.platform = platform;
        this.sanitizer = sanitizer;
      }

      _createClass(DeviceImgPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('mobileweb')) {
            this.isApp = false;
          } else {
            this.isApp = true;
          }

          console.log(this.isApp);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modelCtrl.dismiss({
                      dismissed: true,
                      id: this.id,
                      iconname: this.iconname,
                      iconusecustom: this.iconusecustom,
                      iconcustomimage: this.iconcustomimage
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "DeafultImg",
        value: function DeafultImg() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modelCtrl.create({
                      component: _deafult_icons_deafult_icons_page__WEBPACK_IMPORTED_MODULE_3__["DeafultIconsPage"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _yield$modal$onWillDi = _context3.sent;
                    data = _yield$modal$onWillDi.data;

                    if (data.iconname) {
                      this.iconname = data.iconname;
                      this.iconusecustom = 0;
                      this.authService.updateDeviceCustImage(this.id, 0, data.iconname, null);
                    }

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "fileupload",
        value: function fileupload($event) {
          var _this2 = this;

          console.log($event.target.files[0]);

          if ($event.target.files[0]) {
            console.log('helo');
            this.iconusecustom = 1;
            this.authService.updateDeviceCustImage(this.id, 1, null, $event.target.files[0]).then(function (data) {
              if (_this2.iconusecustom && data.body.iconcustomimage) {
                _this2.iconcustomimage = data.body.iconcustomimage;
              }
            }); // device_id: any, isCustom: any, deafultImgName: any , fileToUpload: File
          }
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var image;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: true,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl
                    });

                  case 2:
                    image = _context4.sent;
                    // Can be set to the src of an image now
                    this.iconusecustom = 1;
                    this.authService.updateDeviceCustImage(this.id, 1, null, this.dataURLtoFile(image.dataUrl, 'hello.png')).then(function (data) {
                      if (_this3.iconusecustom && data.body.iconcustomimage) {
                        _this3.iconcustomimage = data.body.iconcustomimage;
                      }
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "dataURLtoFile",
        value: function dataURLtoFile(dataurl, filename) {
          var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          return new File([u8arr], filename, {
            type: mime
          });
        }
      }]);

      return DeviceImgPage;
    }();

    DeviceImgPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceImgPage.prototype, "iconname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceImgPage.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceImgPage.prototype, "iconusecustom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceImgPage.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceImgPage.prototype, "user_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceImgPage.prototype, "iconcustomimage", void 0);
    DeviceImgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-img',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-img.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/device-img/device-img.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-img.page.scss */
      "./src/app/members/device-management/modal/device-img/device-img.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])], DeviceImgPage);
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/device-setting/device-setting.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/members/device-management/modal/device-setting/device-setting.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DeviceSettingPageModule */

  /***/
  function srcAppMembersDeviceManagementModalDeviceSettingDeviceSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceSettingPageModule", function () {
      return DeviceSettingPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _device_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-setting.page */
    "./src/app/members/device-management/modal/device-setting/device-setting.page.ts");

    var routes = [{
      path: '',
      component: _device_setting_page__WEBPACK_IMPORTED_MODULE_6__["DeviceSettingPage"]
    }];

    var DeviceSettingPageModule = function DeviceSettingPageModule() {
      _classCallCheck(this, DeviceSettingPageModule);
    };

    DeviceSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_device_setting_page__WEBPACK_IMPORTED_MODULE_6__["DeviceSettingPage"]]
    })], DeviceSettingPageModule);
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/device-setting/device-setting.page.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/members/device-management/modal/device-setting/device-setting.page.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersDeviceManagementModalDeviceSettingDeviceSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".deafultIcon {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n}\n\nion-button {\n  --color: var(--white) !important;\n}\n\nion-content .device-list {\n  padding: 3px 10px 10px;\n}\n\nion-content .device-list .flaticon-move {\n  color: #adadad;\n  font-size: 20px;\n}\n\nion-content .device-list ion-list ion-item {\n  --background: var(--lightgrey);\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\nion-content .device-list ion-list ion-item ion-avatar {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\n\nion-content .device-list ion-list ion-item ion-avatar img {\n  border-radius: 5px;\n}\n\nion-content .device-list ion-list ion-item ion-toggle {\n  margin: 0;\n  padding: 5px 8px;\n}\n\nion-content .device-list ion-list ion-item .item-inner {\n  border: 0 !important;\n}\n\nion-content ion-card {\n  border: solid 1px var(--bordercolor);\n  box-shadow: none;\n}\n\nion-content ion-card ion-card-header {\n  text-align: left;\n  background: var(--lightgrey);\n  padding: 15px;\n}\n\nion-content ion-card ion-card-header ion-card-title {\n  font-size: 14px;\n  color: var(--black);\n  margin: 0;\n}\n\nion-content ion-card ion-card-header i {\n  position: absolute;\n  color: var(--primary);\n  right: 15px;\n  bottom: 15px;\n  font-size: 16px;\n}\n\nion-content ion-card ion-card-content {\n  padding: 0;\n}\n\nion-content ion-card ion-card-content .custom-field {\n  margin: 15px 0 0 13px;\n}\n\nion-content ion-card ion-card-content .custom-field ion-item {\n  margin: 5px 13px 13px 0;\n}\n\nion-content ion-card ion-card-content .custom-field ion-label {\n  color: var(--black);\n  padding: 0;\n}\n\nion-content ion-card ion-card-content ion-list {\n  padding: 0;\n}\n\nion-content ion-card ion-card-content ion-list ion-item {\n  border-bottom: solid 1px var(--bordercolor);\n  --min-height: 50px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item .custom-field {\n  color: var(--black);\n}\n\nion-content ion-card ion-card-content ion-list ion-item:last-child {\n  border: 0;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-avatar {\n  width: 50px;\n  height: 50px;\n  margin-top: 6px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-avatar img {\n  border-radius: 5px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-icon {\n  font-size: 17px;\n  margin: 1px 15px 0 0;\n  height: 25px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-label {\n  font-size: 14px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-select {\n  width: 100%;\n  display: contents;\n}\n\nion-content ion-card ion-card-content ion-list ion-item .color-box {\n  border-radius: 5px;\n  height: 35px;\n  width: 90px;\n  float: right;\n  margin: 0 0 12px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-button {\n  text-transform: capitalize;\n  font-weight: normal;\n  font-size: 15px;\n  height: 42px;\n  margin-top: 25px;\n}\n\nion-content ion-card ion-card-content ion-list ion-item ion-button ion-icon {\n  font-size: 16px;\n  margin: 8px 8px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9tZW1iZXJzL2RldmljZS1tYW5hZ2VtZW50L21vZGFsL2RldmljZS1zZXR0aW5nL2RldmljZS1zZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVtYmVycy9kZXZpY2UtbWFuYWdlbWVudC9tb2RhbC9kZXZpY2Utc2V0dGluZy9kZXZpY2Utc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtBQ0VKOztBRENJO0VBQ0ksc0JBQUE7QUNFUjs7QUREUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDR1o7O0FEQVk7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFaEI7O0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dwQjs7QURGb0I7RUFDSSxrQkFBQTtBQ0l4Qjs7QUREZ0I7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNHcEI7O0FERGdCO0VBQ0ksb0JBQUE7QUNHcEI7O0FESUk7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FER1E7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ0RaOztBREVZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0FoQjs7QURFWTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBaEI7O0FER1E7RUFDSSxVQUFBO0FDRFo7O0FERVk7RUFDSSxxQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSx1QkFBQTtBQ0NwQjs7QURDZ0I7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNDcEI7O0FERVk7RUFDSSxVQUFBO0FDQWhCOztBRENnQjtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNDcEI7O0FEQW1CO0VBQ0ksbUJBQUE7QUNFdkI7O0FEQW9CO0VBQ0ksU0FBQTtBQ0V4Qjs7QURBb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFeEI7O0FERHdCO0VBQ0ksa0JBQUE7QUNHNUI7O0FEQW9CO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0V4Qjs7QURBb0I7RUFDSSxlQUFBO0FDRXhCOztBREFvQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0V4Qjs7QURBb0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRXhCOztBREFvQjtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRXhCOztBRER3QjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0c1QiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGV2aWNlLW1hbmFnZW1lbnQvbW9kYWwvZGV2aWNlLXNldHRpbmcvZGV2aWNlLXNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWZ1bHRJY29uIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudHtcbiAgICAuZGV2aWNlLWxpc3R7XG4gICAgICAgIHBhZGRpbmc6M3B4IDEwcHggMTBweDtcbiAgICAgICAgLmZsYXRpY29uLW1vdmV7XG4gICAgICAgICAgICBjb2xvcjogI2FkYWRhZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodGdyZXkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi10b2dnbGV7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbS1pbm5lcntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNhcmR7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Z3JleSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAuY3VzdG9tLWZpZWxke1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMTNweDtcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTNweCAxM3B4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXJjb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWF2YXRhcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFweCAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXNlbGVjdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yLWJveHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCA4cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmRlYWZ1bHRJY29uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCB7XG4gIHBhZGRpbmc6IDNweCAxMHB4IDEwcHg7XG59XG5pb24tY29udGVudCAuZGV2aWNlLWxpc3QgLmZsYXRpY29uLW1vdmUge1xuICBjb2xvcjogI2FkYWRhZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRldmljZS1saXN0IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodGdyZXkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuZGV2aWNlLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCBpb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCBpb24tbGlzdCBpb24taXRlbSBpb24tdG9nZ2xlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggOHB4O1xufVxuaW9uLWNvbnRlbnQgLmRldmljZS1saXN0IGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Z3JleSk7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuY3VzdG9tLWZpZWxkIHtcbiAgbWFyZ2luOiAxNXB4IDAgMCAxM3B4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuY3VzdG9tLWZpZWxkIGlvbi1pdGVtIHtcbiAgbWFyZ2luOiA1cHggMTNweCAxM3B4IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5jdXN0b20tZmllbGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ib3JkZXJjb2xvcik7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gLmN1c3RvbS1maWVsZCB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAxcHggMTVweCAwIDA7XG4gIGhlaWdodDogMjVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSAuY29sb3ItYm94IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA5MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogOHB4IDhweCAwIDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/members/device-management/modal/device-setting/device-setting.page.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/members/device-management/modal/device-setting/device-setting.page.ts ***!
    \***************************************************************************************/

  /*! exports provided: DeviceSettingPage */

  /***/
  function srcAppMembersDeviceManagementModalDeviceSettingDeviceSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceSettingPage", function () {
      return DeviceSettingPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _device_img_device_img_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../device-img/device-img.page */
    "./src/app/members/device-management/modal/device-img/device-img.page.ts");

    var DeviceSettingPage = /*#__PURE__*/function () {
      function DeviceSettingPage(modelCtrl, authService) {
        _classCallCheck(this, DeviceSettingPage);

        this.modelCtrl = modelCtrl;
        this.authService = authService;
        this.uploadedFile = null;
      } // @Input() data: any;


      _createClass(DeviceSettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modelCtrl.dismiss({
                      dismissed: true,
                      id: this.id,
                      name: this.name,
                      color: this.color,
                      iconname: this.iconname,
                      iconusecustom: this.iconusecustom,
                      iconcustomimage: this.iconcustomimage,
                      device_viewlink: this.device_viewlink
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "DeviceImg",
        value: function DeviceImg() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal, _yield$modal$onWillDi2, data;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modelCtrl.create({
                      component: _device_img_device_img_page__WEBPACK_IMPORTED_MODULE_4__["DeviceImgPage"],
                      componentProps: {
                        id: this.id,
                        iconname: this.iconname,
                        iconusecustom: this.iconusecustom,
                        uploadedFile: this.uploadedFile,
                        url: this.url,
                        user_id: this.user_id,
                        iconcustomimage: this.iconcustomimage
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    _context6.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _yield$modal$onWillDi2 = _context6.sent;
                    data = _yield$modal$onWillDi2.data;

                    if (data.iconname) {
                      this.iconname = data.iconname;
                      this.iconusecustom = data.iconusecustom;
                      this.iconcustomimage = data.iconcustomimage;
                    }

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.uploadedFile = files.item(0);
          console.log(files.item(0));
        }
      }, {
        key: "updateDeviceCustImage",
        value: function updateDeviceCustImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }]);

      return DeviceSettingPage;
    }();

    DeviceSettingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceSettingPage.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceSettingPage.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceSettingPage.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceSettingPage.prototype, "iconusecustom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceSettingPage.prototype, "iconcustomimage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceSettingPage.prototype, "device_viewlink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceSettingPage.prototype, "shaireLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceSettingPage.prototype, "iconname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DeviceSettingPage.prototype, "user_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DeviceSettingPage.prototype, "url", void 0);
    DeviceSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/modal/device-setting/device-setting.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-setting.page.scss */
      "./src/app/members/device-management/modal/device-setting/device-setting.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], DeviceSettingPage);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../constants.enum */
    "./src/app/constants.enum.ts");
    /* harmony import */


    var _geo_json_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../geo-json-template */
    "./src/app/geo-json-template.ts");

    var TOKEN_KEY = 'auth-token';
    var IS_ADMIN = 'isAdmin';

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(storage, plt, httpClient, alertCtrl, loadingCtrl) {
        var _this4 = this;

        _classCallCheck(this, AuthenticationService);

        this.storage = storage;
        this.plt = plt;
        this.httpClient = httpClient;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.platform = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.plt.ready().then(function () {
          _this4.checkToken();
        });
      }

      _createClass(AuthenticationService, [{
        key: "checkToken",
        value: function checkToken() {
          var _this5 = this;

          this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].TOKEN_KEY).then(function (res) {
            // console.log('auth key');
            // console.log(res);
            if (res) {
              _this5.authenticationState.next(true);
            } else {
              _this5.authenticationState.next(false);
            }

            _this5.platform.next(true);
          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var loading, postData;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Please Wait',
                      translucent: true
                    });

                  case 2:
                    loading = _context8.sent;
                    _context8.next = 5;
                    return loading.present();

                  case 5:
                    postData = {
                      email: email,
                      password: password
                    };
                    this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/login', postData).subscribe(function (data) {
                      _this6.authenticationState.next(true); // console.log(IS_ADMIN);
                      // tslint:disable-next-line: no-string-literal


                      _this6.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].TOKEN_KEY, data['success']['token']); // tslint:disable-next-line: no-string-literal


                      _this6.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].IS_ADMIN, data['success']['isAdmin']); // tslint:disable-next-line: no-string-literal


                      _this6.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_ID, data['success']['userID']);

                      _this6.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE_ICON, data['success']['routeIcon']);

                      console.log(data);
                      return data;
                    }, function (error) {
                      console.log(error);

                      _this6.authenticationState.next(false);

                      return null;
                    });
                    loading.dismiss();

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "registerFBToken",
        value: function registerFBToken(token) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var postData;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    postData = {
                      fbtoken: token
                    }; // console.log(postData);

                    _context9.next = 3;
                    return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/fcm/register', postData).toPromise().then(function (res) {
                      console.log(res);
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 3:
                    return _context9.abrupt("return", _context9.sent);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } // async createNotification() {
        //   const postData = {
        //     "iddevice": 6622,
        //     "icon": "testIcon",
        //     "meldungtyp": 1,
        //     "lat": 55,
        //     "lng": 7,
        //     "isread": 0,
        //     "radiusin":0,
        //     "radiusout": 0,
        //     "zuendon":0,
        //     "zuendoff":0,
        //     "push":0   
        //   };
        //   // console.log(postData);
        //   return await this.httpClient.post(Constants.ROUTE + '/api/notification', postData).toPromise()
        //   .then(res => {
        //     console.log(res);
        //     return res;
        //   }).catch (error => {
        //     console.log(error);
        //     return null;
        //   });
        // }

      }, {
        key: "getDevices",
        value: function getDevices() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.httpClient.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device').toPromise().then(function (res) {
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 2:
                    return _context10.abrupt("return", _context10.sent);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getDevicesModel",
        value: function getDevicesModel(listofIDs) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var postData;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    postData = {
                      model_nrs: listofIDs
                    }; // console.log(postData);

                    _context11.next = 3;
                    return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/deviceModel', postData).toPromise().then(function (res) {
                      // console.log(res);
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 3:
                    return _context11.abrupt("return", _context11.sent);

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "getGeoFences",
        value: function getGeoFences(listofIDs) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var postData;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    postData = {
                      deviceIDs: listofIDs
                    }; // console.log(postData);

                    _context12.next = 3;
                    return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/geofences', postData).toPromise().then(function (res) {
                      // console.log(res);
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "getDevicePoints",
        value: function getDevicePoints(deviceID, type, dateStart, dateEnd, lastMinutes, lastPoints) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var getData, url;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    getData = null;
                    url = '/api/trackerdata/' + deviceID;
                    _context13.t0 = type;
                    _context13.next = _context13.t0 === 0 ? 5 : _context13.t0 === 1 ? 8 : _context13.t0 === 4 ? 11 : 14;
                    break;

                  case 5:
                    // Last Minutes
                    getData = {
                      lastMinutes: lastMinutes.toString()
                    };
                    url = url + '/last_minutes';
                    return _context13.abrupt("break", 14);

                  case 8:
                    // last Points
                    getData = {
                      lastPoints: lastPoints.toString()
                    };
                    url = url + '/last_points';
                    return _context13.abrupt("break", 14);

                  case 11:
                    // date range
                    getData = {
                      dateStart: dateStart.toString(),
                      dateEnd: dateEnd.toString()
                    };
                    url = url + '/date_range';
                    return _context13.abrupt("break", 14);

                  case 14:
                    return _context13.abrupt("return", this.httpClient.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + url, {
                      params: getData
                    }).toPromise().then(function (res) {
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    }));

                  case 15:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "updateUserInfo",
        value: function updateUserInfo(firstname, lastname, email, UserID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this7 = this;

            var putData;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    putData = {
                      firstname: firstname,
                      email: email,
                      lastname: lastname
                    };
                    return _context14.abrupt("return", this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/customer/' + UserID, putData).subscribe(function (data) {
                      // this.authenticationState.next(true);
                      // this.storage.set(TOKEN_KEY, data["success"]["token"]);
                      _this7.alertCtrl.create({
                        header: 'User',
                        message: 'User updated successfully',
                        buttons: ['OK']
                      }).then(function (alertEl) {
                        alertEl.present();
                      });

                      return data;
                    }, function (error) {
                      console.log(error);
                      return null;
                    }));

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo(UserID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.httpClient.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/customer/' + UserID).toPromise().then(function (res) {
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 2:
                    return _context15.abrupt("return", _context15.sent);

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getStreetAdrress",
        value: function getStreetAdrress(lat, lng) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.httpClient.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/streetAddress?lat=' + lat + '&lon=' + lng).toPromise().then(function (res) {
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 2:
                    return _context16.abrupt("return", _context16.sent);

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "register",
        value: function register(name, email, password) {
          var _this8 = this;

          var postData = {
            name: name,
            email: email,
            password: password,
            c_password: password
          };
          this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/customer', postData).subscribe(function (data) {
            // this.authenticationState.next(true);
            // this.storage.set(TOKEN_KEY, data["success"]["token"]);
            _this8.alertCtrl.create({
              header: 'User',
              message: 'User created successfully',
              buttons: ['OK']
            }).then(function (alertEl) {
              alertEl.present();
            });

            return data;
          }, function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "compareValues",
        value: function compareValues(key) {
          var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
          return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
              // property doesn't exist on either object
              return 0;
            }

            var varA = a[key]; // (typeof a[key] === 'number')
            // ? a[key].toUpperCase() : a[key];

            var varB = b[key]; // (typeof b[key] === 'number')
            // ? b[key].toUpperCase() : b[key];

            var comparison = 0;

            if (varA > varB) {
              comparison = 1;
            } else if (varA < varB) {
              comparison = -1;
            }

            return order === 'desc' ? comparison * -1 : comparison;
          };
        }
      }, {
        key: "createDevice",
        value: function createDevice() {
          var postData = 'test';
          return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device', postData).subscribe(function (data) {
            console.log(data);
            return data;
          }, function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "updateDevicePosition",
        value: function updateDevicePosition(devices) {
          var deviceArray = [];
          var index = 0;
          devices.forEach(function (device) {
            var devicePosObj = new _geo_json_template__WEBPACK_IMPORTED_MODULE_7__["DevicePosition"]();
            devicePosObj.id = device.id;
            devicePosObj.devicepos = index;
            index = index + 1;
            deviceArray.push(devicePosObj);
          });
          deviceArray.sort(this.compareValues('id'));
          var putData = {
            deviceArray: deviceArray
          };
          console.log(deviceArray);
          return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device/devicepositions', deviceArray).subscribe(function (data) {
            console.log(data);
            return data;
          }, function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "createGeofence",
        value: function createGeofence(deviceID, type, options, coordinates) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var postData;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    postData = {
                      shape_type: type,
                      coordinates: coordinates,
                      options: options
                    }; // console.log(postData);

                    _context17.next = 3;
                    return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/geofence/' + deviceID, postData).toPromise().then(function (res) {
                      // console.log(res);
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 3:
                    return _context17.abrupt("return", _context17.sent);

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "updateGeofence",
        value: function updateGeofence(geofenceID, deviceID, coordinates, type, options) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var putData;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    putData = {
                      shape_type: type,
                      coordinates: coordinates,
                      options: options
                    };
                    return _context18.abrupt("return", this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/geofence/' + deviceID + '/' + geofenceID, putData).subscribe(function (data) {
                      return data;
                    }, function (error) {
                      console.log(error);
                      return null;
                    }));

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "deleteGeofence",
        value: function deleteGeofence(geofenceID, deviceID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    return _context19.abrupt("return", this.httpClient["delete"](_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/geofence/' + deviceID + '/' + geofenceID).subscribe(function (data) {
                      return data;
                    }, function (error) {
                      console.log(error);
                      return null;
                    }));

                  case 1:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "updateDeviceShow",
        value: function updateDeviceShow(deviceID, status) {
          var putData = {
            deviceshow: status
          };
          return this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device/' + deviceID, putData).subscribe(function (data) {
            return data;
          }, function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "updateRadiusInfo",
        value: function updateRadiusInfo(deviceID, radiusInMeters, radiusLat, radiusLng) {
          var radiusInM = radiusInMeters.toFixed(2);
          console.log(radiusInM);
          var putData = {
            radius_meter: radiusInM,
            radius_lat: radiusLat,
            radius_lng: radiusLng
          };
          return this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device/' + deviceID, putData).subscribe(function (data) {
            return data;
          }, function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "updateDeviceAlarms",
        value: function updateDeviceAlarms(deviceID, alarmName, alarmValue) {
          var key = alarmName;
          var putData = {};
          putData[key] = alarmValue;
          console.log(putData);
          return this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device/' + deviceID, putData).toPromise().then(function (res) {
            return res;
          })["catch"](function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "updateSpurInfo",
        value: function updateSpurInfo(deviceID, selectedTab, startDate, endDate, lastMinutes, lastPoints) {
          var putData = {
            spurdatum: startDate,
            spurmodus: selectedTab,
            spurdatumbis: endDate,
            spurminuten: lastMinutes,
            spurpunkte: lastPoints
          };
          console.log(putData);
          return this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device/' + deviceID, putData).toPromise().then(function (res) {
            // console.log(res);
            return res;
          })["catch"](function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "renderPolyline",
        value: function renderPolyline(polylinePoints) {
          var postData = {
            shape: polylinePoints
          };
          return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/renderPoints', postData).toPromise().then(function (res) {
            // console.log(res);
            return res;
          })["catch"](function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "updateUserMapSetting",
        value: function updateUserMapSetting(route_icons, distance_unit, map, show_kmanzeige, snap_to_road, pauses) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this9 = this;

            var putData;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    putData = {
                      route_icons: route_icons,
                      distance_unit: distance_unit,
                      map: map,
                      show_kmanzeige: show_kmanzeige,
                      snap_to_road: snap_to_road,
                      pauses: pauses
                    };
                    return _context20.abrupt("return", this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/customers/map-settting', putData).subscribe(function (data) {
                      console.log(data); // this.authenticationState.next(true);
                      // this.storage.set(TOKEN_KEY, data["success"]["token"]);

                      _this9.alertCtrl.create({
                        header: 'User',
                        message: 'User updated successfully',
                        buttons: ['OK']
                      }).then(function (alertEl) {
                        alertEl.present();
                      });

                      return data;
                    }, function (error) {
                      console.log(error);
                      return null;
                    }));

                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "getNotifications",
        value: function getNotifications() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.httpClient.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/notifications').toPromise().then(function (res) {
                      return res;
                    })["catch"](function (error) {
                      console.log(error);
                      return null;
                    });

                  case 2:
                    return _context21.abrupt("return", _context21.sent);

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "updateDeviceMapSetting",
        value: function updateDeviceMapSetting(id, name, spurfarbe, iconname, iconusecustom, device_viewlink) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var putData;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    putData = {
                      id: id,
                      name: name,
                      spurfarbe: spurfarbe,
                      iconname: iconname,
                      iconusecustom: iconusecustom,
                      device_viewlink: device_viewlink
                    };
                    return _context22.abrupt("return", this.httpClient.put(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device/' + id, putData).subscribe(function (data) {
                      console.log('josh', data);
                      return data;
                    }, function (error) {
                      console.log(error);
                      return null;
                    }));

                  case 2:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "updateDeviceCustImage",
        value: function updateDeviceCustImage(device_id, isCustom, deafultImgName, fileToUpload) {
          var fd = new FormData();
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();

          if (fileToUpload != null && isCustom) {
            console.log('1');
            header.append('Content-Type', 'multipart/form-data');
            header.append('Accept', 'application/json');
            fd.append('uploadedFile', fileToUpload, fileToUpload.name);
          } else if (deafultImgName && !isCustom) {
            console.log('2');
            fd.append('iconname', deafultImgName);
          }

          fd.append('iconusecustom', isCustom);
          fd.append('device_id', device_id); // console.log(fd.get('uploadedFile'));

          return this.httpClient.post(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/device-custom-img/', fd, {
            headers: header,
            reportProgress: true,
            observe: 'events'
          }).toPromise().then(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
              console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response) {
              console.log('sssssaaa', event);
              return event;
            }
          });
        }
      }, {
        key: "getDashboard",
        value: function getDashboard() {
          return this.httpClient.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE + '/api/customer/dashboard').toPromise().then(function (res) {
            console.log(res);
            return res;
          })["catch"](function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this10 = this;

          this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].UPDATE_MAP, 1);
          this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].UPDATE_LOGIN, 1);
          return this.storage.remove(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].TOKEN_KEY).then(function () {
            _this10.authenticationState.next(false);
          });
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/interceptor.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/interceptor.service.ts ***!
    \*************************************************/

  /*! exports provided: InterceptorService */

  /***/
  function srcAppServicesInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
      return InterceptorService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/fromPromise */
    "./node_modules/rxjs-compat/_esm2015/add/observable/fromPromise.js");
    /* harmony import */


    var rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/observable/throw */
    "./node_modules/rxjs-compat/_esm2015/observable/throw.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _constants_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../constants.enum */
    "./src/app/constants.enum.ts");

    var InterceptorService = /*#__PURE__*/function () {
      function InterceptorService(storage, alertCtrl, loadingController, authenticationService) {
        _classCallCheck(this, InterceptorService);

        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.authenticationService = authenticationService;
      }

      _createClass(InterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this11 = this;

          var promise = this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_9__["Constants"].TOKEN_KEY); // this.showLoader();

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (token) {
            // this.hideLoader();
            var clonedReq = _this11.addToken(request, token);

            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              // Perhaps display an error for specific status codes here already?
              var msg = error.error.error;

              if (error.status === 429) {
                console.log('too many requests');
                return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])(error);
              }

              if (error.status === 0 || error.status === 500) {
                console.log('Internal server error or no internet connection');
                return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])(error);
              } // this.hideLoader();


              console.log(error);

              _this11.alertCtrl.create({
                header: error.name,
                message: msg,
                buttons: ['OK']
              }).then(function (alertEl) {
                alertEl.present();
              }); // Pass the error to the caller of the function
              // this.hideLoader();


              if (error.status === 401) {
                _this11.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_9__["Constants"].UPDATE_LOGIN, 1);

                _this11.authenticationService.authenticationState.next(false);
              }

              return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_5__["_throw"])(error);
            }));
          }));
        } // Adds the token to your headers if it exists

      }, {
        key: "addToken",
        value: function addToken(request, token) {
          if (token) {
            var clone;
            clone = request.clone({
              setHeaders: {
                // Accept: `application/json`,
                // 'Content-Type': `application/json`,
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Origin': '*',
                Authorization: "Bearer ".concat(token)
              }
            });
            return clone;
          } // this.hideLoader();


          return request;
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          this.loaderToShow = this.loadingController.create({
            message: 'Processing Server Request'
          }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
              console.log('Loading dismissed!');
            });
          });
          this.hideLoader();
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.loadingController.dismiss();
        }
      }]);

      return InterceptorService;
    }();

    InterceptorService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
      }];
    };

    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])], InterceptorService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/pwa-elements/loader */
    "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__["defineCustomElements"])(window);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/apple/Desktop/apps/test-paj/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map