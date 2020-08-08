function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-management-device-management-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/device-management.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/device-management.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembersDeviceManagementDeviceManagementPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-side-bar slot=\"end\"></app-side-bar>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Device Management</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title> <img src=\"../../assets/images/location-3.png\"> Map Display Settings </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"white\" *ngIf=\"userInfo\">\n\n      <div class=\"label-fileds\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"options-select\">\n            <ion-icon class=\"flaticon-pin\"></ion-icon>\n            <ion-label>Rout Markers</ion-label>\n            <ion-select (ionChange)=\"updateSettings()\" [(ngModel)]=\"userInfo.route_icons\" placeholder=\"Select One\" class=\"ion-text-end\">\n              <ion-select-option value=\"arrow\">Arrow</ion-select-option>\n              <ion-select-option value=\"circle\">Circle</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"field-info\"> <i class=\"flaticon-information\"></i> Change the icon of route markers on the map. </div>\n        </ion-list>\n      </div>\n\n      <div class=\"label-fileds\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"options-select\">\n            <ion-icon class=\"flaticon-speedometer\"></ion-icon>\n            <ion-label>Distance Unit</ion-label>\n            <ion-select (ionChange)=\"updateSettings()\" [(ngModel)]=\"userInfo.distance_unit\" placeholder=\"Select One\" class=\"ion-text-end\">\n              <ion-select-option value=\"km\">Kilometer</ion-select-option>\n              <ion-select-option value=\"mi\">Mile</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"field-info\"> <i class=\"flaticon-information\"></i> Distance Unit Type</div>\n        </ion-list>\n      </div>\n\n      <div class=\"label-fileds\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"options-select\">\n            <ion-icon class=\"flaticon-map-1\"></ion-icon>\n            <ion-label>Map Style</ion-label>\n            <ion-select (ionChange)=\"updateSettings()\" [(ngModel)]=\"userInfo.map\" placeholder=\"Select One\" class=\"ion-text-end\">\n              <ion-select-option value=\"osm\">Open Street Maps</ion-select-option>\n              <ion-select-option value=\"paj\">PAJ Maps</ion-select-option>\n              <ion-select-option value=\"pajHills\">PAJ Hill Maps</ion-select-option>\n              <ion-select-option value=\"3D\">PAJ 3D Map</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"field-info\"> <i class=\"flaticon-information\"></i> Switch the map style</div>\n        </ion-list>\n      </div>\n\n      <div class=\"label-fileds\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"options-select\">\n            <ion-icon class=\"flaticon-delivery-1\"></ion-icon>\n            <ion-label>Distances</ion-label>\n            <ion-select (ionChange)=\"updateSettings()\" [(ngModel)]=\"userInfo.show_kmanzeige\" placeholder=\"Select One\" class=\"ion-text-end\">\n              <ion-select-option [value]=\"1\" >Yes</ion-select-option>\n              <ion-select-option [value]=\"0\" >No</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"field-info\"> <i class=\"flaticon-information\"></i> Display the distances of transferred routes. Please note that this is\n            not the exact distance covered. Due to signal deviations, there may\n            be differences between the actual route and the FINDER portal. </div>\n        </ion-list>\n      </div>\n\n      <div class=\"label-fileds\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"options-select\">\n            <ion-icon class=\"flaticon-graph\"></ion-icon>\n            <ion-label>Snap</ion-label>\n            <ion-select (ionChange)=\"updateSettings()\" [(ngModel)]=\"userInfo.snap_to_road\" placeholder=\"Select One\" class=\"ion-text-end\">\n              <ion-select-option [value]=\"1\">Yes</ion-select-option>\n              <ion-select-option [value]=\"0\">No</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"field-info\"> <i class=\"flaticon-information\"></i> Snap the displayed route by default to the road. Please note, that it is not always possible to generate that optimized route. Depending on the lenght and complexity of the route it might fall back to straight lines. </div>\n        </ion-list>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title> <img src=\"../../assets/images/gps.png\"> Device settings </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"white\">\n      <ion-searchbar type=\"text\" autocorrect=\"on\" autocomplete=\"on\" debounce=\"700\"  [(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n    </ion-card-content>\n    <div *ngIf=\"searching\" class=\"spinner-container\">\n      <ion-spinner></ion-spinner>\n    </div>\n  </ion-card>\n\n  <div *ngIf=\"devices\">\n    <ion-card *ngFor=\"let device of searchItem\">\n      <ion-card-header>\n        <ion-card-title> \n          <img alt=\"Image not Found\" *ngIf=\"!device.iconusecustom\" src=\"../../../assets/icons/map/devices/device_markers/{{device.iconname}}.png\">\n          <img alt=\"Image not Found\" *ngIf=\"device.iconusecustom\" [src]=\"(this.url+'/upload/images/users/'+this.userId+'/devices/'+device.id+'/customImg/'+device.iconcustomimage)\">\n          <ion-label>{{device.name}}</ion-label>\n        </ion-card-title>\n\n        <ion-icon class=\"flaticon-settings\" (click)=\"deviceSetting(device)\"></ion-icon>\n\n      </ion-card-header>\n      <ion-card-content class=\"device-detail\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/userid.png\">\n            </ion-avatar>\n            <ion-label>ID:</ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">{{device.id}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/username.png\">\n            </ion-avatar>\n            <ion-label>Name:</ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">{{device.name}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/finder.png\">\n            </ion-avatar>\n            <ion-label>Finder Identifier:</ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">{{device.imei}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/calendar.png\">\n            </ion-avatar>\n            <ion-label>Storage Time:</ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">{{device.speicherdauer}} Days</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/coffee-breaks.png\">\n            </ion-avatar>\n            <ion-label>Interval:</ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">{{device.intervalllaenge}}s</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/google-maps.png\">\n            </ion-avatar>\n            <ion-label>Last Position: </ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">\n              <a href=\"https://maps.google.com/maps?f=q&hl=de&q={{device.last_lat}},{{device.last_lng}}(Location)&ie=UTF8&z=16&iwloc=addr&om=1\" target=\"_blank\">\n                <ion-icon class=\"flaticon-pin\"></ion-icon>\n              </a>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/images/google-maps.png\">\n            </ion-avatar>\n            <ion-label>Last Record:</ion-label>\n            <ion-label slot=\"end\" class=\"ion-text-end detail-item\">{{device.last_dateunix * 1000 | date:'dd.MM.yyyy HH:mm:ss'}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/members/device-management/device-management.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/members/device-management/device-management.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DeviceManagementPageModule */

  /***/
  function srcAppMembersDeviceManagementDeviceManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceManagementPageModule", function () {
      return DeviceManagementPageModule;
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


    var _device_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-management.page */
    "./src/app/members/device-management/device-management.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts"); // import { DeviceSettingPageModule } from './modal/device-setting/device-setting.module';


    var routes = [{
      path: '',
      component: _device_management_page__WEBPACK_IMPORTED_MODULE_6__["DeviceManagementPage"]
    }];

    var DeviceManagementPageModule = function DeviceManagementPageModule() {
      _classCallCheck(this, DeviceManagementPageModule);
    };

    DeviceManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [// DeviceSettingPageModule,
      src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_device_management_page__WEBPACK_IMPORTED_MODULE_6__["DeviceManagementPage"]]
    })], DeviceManagementPageModule);
    /***/
  },

  /***/
  "./src/app/members/device-management/device-management.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/members/device-management/device-management.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMembersDeviceManagementDeviceManagementPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--contentbg);\n}\nion-content .device-list .flaticon-move {\n  color: #adadad;\n  font-size: 20px;\n}\nion-content .device-list ion-list ion-item {\n  --background: var(--lightgrey);\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\nion-content .device-list ion-list ion-item ion-avatar {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\nion-content .device-list ion-list ion-item ion-avatar img {\n  border-radius: 5px;\n}\nion-content .device-list ion-list ion-item ion-toggle {\n  margin: 0;\n  padding: 5px 8px;\n}\nion-content .device-list ion-list ion-item .item-inner {\n  border: 0 !important;\n}\nion-content ion-card {\n  border-bottom: solid 1px var(--bordercolor);\n  border-radius: 0;\n  margin: 0 0 10px;\n  box-shadow: none;\n}\nion-content ion-card .white {\n  background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-content ion-card:last-child {\n  margin-bottom: 0;\n}\nion-content ion-card ion-card-header {\n  text-align: left;\n  background: var(--lightgrey);\n}\nion-content ion-card ion-card-header ion-card-title {\n  font-size: 14px;\n  color: var(--black);\n  margin: 0;\n}\nion-content ion-card ion-card-header ion-card-title img {\n  display: inline;\n  width: 25px;\n  vertical-align: middle;\n  margin: -3px 5px 0 0;\n}\nion-content ion-card ion-card-header ion-icon {\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  font-size: 20px;\n  height: 25px;\n  color: var(--primary);\n}\nion-content ion-card ion-card-header i {\n  position: absolute;\n  color: var(--primary);\n  right: 15px;\n  bottom: 15px;\n  font-size: 16px;\n}\nion-content ion-card ion-card-content {\n  padding: 10px;\n}\nion-content ion-card ion-card-content.device-detail {\n  padding: 0;\n}\nion-content ion-card ion-card-content ion-list {\n  padding: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item {\n  --min-height: 40px;\n}\nion-content ion-card ion-card-content ion-list ion-item:last-child {\n  border: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item .item-native {\n  padding: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-avatar {\n  width: 20px;\n  height: 20px;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-avatar img {\n  border-radius: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-icon {\n  font-size: 17px;\n  color: var(--primary);\n  height: 27px;\n  width: 26px;\n  padding: 2px;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-label {\n  font-size: 14px;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-label.detail-item {\n  color: #949494;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-select {\n  width: 100%;\n  display: contents;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-select .select-icon .select-icon-inner {\n  color: var(--primary) !important;\n}\nion-content ion-card ion-card-content ion-list ion-item .color-box {\n  border-radius: 5px;\n  height: 35px;\n  width: 90px;\n  float: right;\n}\nion-content ion-card ion-card-content .label-fileds {\n  padding: 0;\n  border-bottom: solid 1px var(--bordercolor);\n}\nion-content ion-card ion-card-content .label-fileds .field-info {\n  padding: 5px 0 10px;\n  font-size: 12px;\n  line-height: 17px;\n}\nion-content ion-card ion-card-content .label-fileds .field-info i {\n  margin-right: 3px;\n  font-size: 14px;\n}\nion-content ion-card ion-card-content .options-select {\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content ion-card ion-card-content .options-select ion-icon {\n  margin: 0 0px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9tZW1iZXJzL2RldmljZS1tYW5hZ2VtZW50L2RldmljZS1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVtYmVycy9kZXZpY2UtbWFuYWdlbWVudC9kZXZpY2UtbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw4QkFBQTtBQ0RKO0FESVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FES1k7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNIaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRnBCO0FER29CO0VBQ0ksa0JBQUE7QUNEeEI7QURJZ0I7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNGcEI7QURJZ0I7RUFDSSxvQkFBQTtBQ0ZwQjtBRFNJO0VBQ0csMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0MsZ0JBQUE7QUNQUjtBRFFRO0VBQ0kseUVBQUE7QUNOWjtBRFFRO0VBQ0ksZ0JBQUE7QUNOWjtBRFFRO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBQ05aO0FEUVk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDTmhCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTHBCO0FEUVk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ05oQjtBRFFZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05oQjtBRFVRO0VBSUksYUFBQTtBQ1haO0FEUVk7RUFDSSxVQUFBO0FDTmhCO0FEU1k7RUFDSSxVQUFBO0FDUGhCO0FEUWdCO0VBQ0ksa0JBQUE7QUNOcEI7QURPb0I7RUFDSSxTQUFBO0FDTHhCO0FET29CO0VBQ0ksVUFBQTtBQ0x4QjtBRE9vQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTHhCO0FETXdCO0VBQ0ksZ0JBQUE7QUNKNUI7QURPb0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMeEI7QURRb0I7RUFDSSxlQUFBO0FDTnhCO0FET3dCO0VBQ0ksY0FBQTtBQ0w1QjtBRFFvQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ054QjtBRFE0QjtFQUNHLGdDQUFBO0FDTi9CO0FEVW9CO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSeEI7QURZWTtFQUNJLFVBQUE7RUFDQSwyQ0FBQTtBQ1ZoQjtBRFdnQjtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVHBCO0FEVW9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDUnhCO0FEWVk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDVmhCO0FEV29CO0VBQ0ksaUJBQUE7QUNUeEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2RldmljZS1tYW5hZ2VtZW50L2RldmljZS1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnRiZyk7XG4gICAgLmRldmljZS1saXN0e1xuICAgICAgICAvL3BhZGRpbmc6M3B4IDEwcHggMTBweDtcbiAgICAgICAgLmZsYXRpY29uLW1vdmV7XG4gICAgICAgICAgICBjb2xvcjogI2FkYWRhZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodGdyZXkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi10b2dnbGV7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbS1pbm5lcntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNhcmR7XG4gICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC53aGl0ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodGdyZXkpO1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtM3B4IDVweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICAmLmRldmljZS1kZXRhaWx7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBpb24tbGlzdHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjowO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pdGVtLW5hdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWF2YXRhcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5kZXRhaWwtaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tc2VsZWN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50czsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdC1pY29uLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yLWJveHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxhYmVsLWZpbGVkc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgICAgICAgICAgICAgICAuZmllbGQtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9wdGlvbnMtc2VsZWN0e1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDBweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50YmcpO1xufVxuaW9uLWNvbnRlbnQgLmRldmljZS1saXN0IC5mbGF0aWNvbi1tb3ZlIHtcbiAgY29sb3I6ICNhZGFkYWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHRncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRldmljZS1saXN0IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGV2aWNlLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAuZGV2aWNlLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRvZ2dsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLndoaXRlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRncmV5KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogLTNweCA1cHggMCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50LmRldmljZS1kZXRhaWwge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBoZWlnaHQ6IDI3cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsLmRldGFpbC1pdGVtIHtcbiAgY29sb3I6ICM5NDk0OTQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3QgLnNlbGVjdC1pY29uIC5zZWxlY3QtaWNvbi1pbm5lciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSAuY29sb3ItYm94IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA5MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5sYWJlbC1maWxlZHMge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAubGFiZWwtZmlsZWRzIC5maWVsZC1pbmZvIHtcbiAgcGFkZGluZzogNXB4IDAgMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmxhYmVsLWZpbGVkcyAuZmllbGQtaW5mbyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLm9wdGlvbnMtc2VsZWN0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAub3B0aW9ucy1zZWxlY3QgaW9uLWljb24ge1xuICBtYXJnaW46IDAgMHB4IDAgMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/members/device-management/device-management.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/members/device-management/device-management.page.ts ***!
    \*********************************************************************/

  /*! exports provided: DeviceManagementPage */

  /***/
  function srcAppMembersDeviceManagementDeviceManagementPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceManagementPage", function () {
      return DeviceManagementPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _constants_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../constants.enum */
    "./src/app/constants.enum.ts");
    /* harmony import */


    var _modal_device_setting_device_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal/device-setting/device-setting.page */
    "./src/app/members/device-management/modal/device-setting/device-setting.page.ts");

    var DeviceManagementPage = /*#__PURE__*/function () {
      function DeviceManagementPage(authService, storage, modalController, loadingCtrl) {
        _classCallCheck(this, DeviceManagementPage);

        this.authService = authService;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.devices = null;
        this.searchTerm = '';
        this.searching = false;
        this.url = _constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROUTE;
      }

      _createClass(DeviceManagementPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_ID).then(function (res) {
                      _this.userId = res;
                    });

                  case 2:
                    this.getUserInfo();
                    this.getDevices(); // this.setFilteredItems();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getDevices",
        value: function getDevices() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Please Wait',
                      translucent: true
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.authService.getDevices().then(function (res) {
                      _this2.devices = res.success;
                      console.log(_this2.devices);

                      _this2.setFilteredItems();
                    })["catch"](function (e) {
                      console.log(e);
                    });

                  case 7:
                    _context2.next = 9;
                    return loading.dismiss();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setFilteredItems",
        value: function setFilteredItems() {
          this.searchItem = this.filterDevices(this.searchTerm);
        }
      }, {
        key: "filterDevices",
        value: function filterDevices(searchTerm) {
          return this.devices.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          });
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.authService.getUserInfo(this.userId).then(function (res) {
                      _this3.userInfo = res.success;
                      console.log(res.success);
                    })["catch"](function (e) {
                      console.log(e);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "deviceSetting",
        value: function deviceSetting(device) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(device);
                    _context4.next = 3;
                    return this.modalController.create({
                      component: _modal_device_setting_device_setting_page__WEBPACK_IMPORTED_MODULE_6__["DeviceSettingPage"],
                      componentProps: {
                        id: device.id,
                        name: device.name,
                        color: device.spurfarbe,
                        iconname: device.iconname,
                        iconusecustom: device.iconusecustom,
                        iconcustomimage: device.iconcustomimage,
                        device_viewlink: 0,
                        shaireLink: 'device.name',
                        user_id: this.userId,
                        url: this.url
                      }
                    });

                  case 3:
                    modal = _context4.sent;
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    _context4.next = 8;
                    return modal.onWillDismiss();

                  case 8:
                    _yield$modal$onWillDi = _context4.sent;
                    data = _yield$modal$onWillDi.data;
                    this.updateDeviceMapSetting(data);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateSettings",
        value: function updateSettings() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var mapStyle, routeIcon;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log('fired');
                    _context5.next = 3;
                    return this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].MAP).then(function (res) {
                      mapStyle = res;
                    });

                  case 3:
                    _context5.next = 5;
                    return this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROUTE_ICON).then(function (res) {
                      routeIcon = res;
                    });

                  case 5:
                    this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROUTE_ICON, this.userInfo.route_icons);
                    _context5.next = 8;
                    return this.authService.updateUserMapSetting(this.userInfo.route_icons, this.userInfo.distance_unit, this.userInfo.map, this.userInfo.show_kmanzeige, this.userInfo.snap_to_road, this.userInfo.pauses).then(function (res) {
                      console.log(res);
                    })["catch"](function (e) {
                      console.log(e);
                    });

                  case 8:
                    this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].MAP, this.userInfo.map);
                    console.log(mapStyle);
                    console.log(this.userInfo.map);

                    if (!(routeIcon !== this.userInfo.route_icons)) {
                      _context5.next = 15;
                      break;
                    }

                    console.log('update route Icons');
                    _context5.next = 15;
                    return this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].UPDATE_MAP, 1);

                  case 15:
                    if (!(mapStyle !== this.userInfo.map)) {
                      _context5.next = 19;
                      break;
                    }

                    console.log('update style');
                    _context5.next = 19;
                    return this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].UPDATE_STYLE, 1);

                  case 19:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "updateDeviceMapSetting",
        value: function updateDeviceMapSetting(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.authService.updateDeviceMapSetting(data.id, data.name, data.color, data.iconname, data.iconusecustom, data.device_viewlink).then(function (res) {
                      var found = _this4.devices.find(function (element) {
                        return element.id === data.id;
                      });

                      _this4.devices[_this4.devices.indexOf(found)].name = data.name;
                      _this4.devices[_this4.devices.indexOf(found)].color = data.color;
                      _this4.devices[_this4.devices.indexOf(found)].iconname = data.iconname;
                      _this4.devices[_this4.devices.indexOf(found)].iconusecustom = data.iconusecustom;
                      _this4.devices[_this4.devices.indexOf(found)].iconcustomimage = data.iconcustomimage;
                    })["catch"](function (e) {
                      console.log(e);
                    });

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return DeviceManagementPage;
    }();

    DeviceManagementPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    DeviceManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-device-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-management.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/members/device-management/device-management.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-management.page.scss */
      "./src/app/members/device-management/device-management.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], DeviceManagementPage);
    /***/
  }
}]);
//# sourceMappingURL=device-management-device-management-module-es5.js.map