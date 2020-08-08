function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu side=\"start\" contentId=\"first\" type=\"overlay\" direction=\"y\" auto-hide=\"true\" menuClose=\"true\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <div class=\"panel-user-detail\">\n      <ion-avatar slot=\"start\">\n        <img src=\"./../../../assets/images/user-placeholder.jpg\">\n      </ion-avatar>\n        <h3>{{fName+' '+lName}}</h3>\n        <p> <i class=\"flaticon-placeholder\"></i> Your own location display here</p>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list id=\"inbox-list\" lines=\"none\">\n\n      <ion-item auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\" (click)=\"selectedIndex = i;\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"currenctUrl == p.url\">\n        <ion-icon class=\"{{p.menuicon}}\" slot=\"start\"></ion-icon>\n        <ion-label>{{ p.title }} </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"logout()\">\n        <ion-icon class=\"flaticon-alert\" slot=\"start\"></ion-icon>\n        <ion-label> Logout </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <a (click)=\"openImprint()\">\n            <span>Imprints</span>\n          </a>\n        </ion-col>\n        <ion-col class=\"ion-text-center\">\n          <a style=\"color: #6e6e6e;\">\n            <span>Version 1.00</span>\n          </a>\n        </ion-col>\n        <ion-col class=\"ion-text-end\">\n          <a (click)=\"openPrivacyPolicy()\">\n            <span>Policy</span>\n          </a>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>\n\n<!-- <ion-menu side=\"end\" contentId=\"first\" type=\"overlay\" (ionDidOpen)=\"loadConfigMenu()\" direction=\"y\">\n\n  <ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>Menu</ion-title>\n      <ion-buttons slot=\"primary\">\n          <ion-button (click)=\"toggleReorderGroup()\">Reorder</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content [scrollEvents]=\"true\" scrollY=\"true\">\n    <ion-radio-group [(ngModel)]=\"radioCheck\" id=\"deviceRadio\">\n      <ion-reorder-group id=\"reorder\" (ionItemReorder)=\"doReorder($event)\" disabled=\"true\">\n        <ion-item *ngFor=\"let item of data; let i = index\" >\n          <ion-reorder slot=\"start\"></ion-reorder>\n          <ion-toggle color=\"primary\" class=\"toggleButtons\" (ionChange)=\"passToggleValue($event)\" id={{item.id}} checked></ion-toggle>\n          <ion-label>{{item.name}}</ion-label>\n          <ion-radio slot=\"end\" class=\"radioButtons\" (click)=\"enableDeviceData(item.id, item.name, i)\" id=\"r{{item.id}}\"></ion-radio>\n        </ion-item>\n        </ion-reorder-group>\n    </ion-radio-group>\n\n    <br><br>\n    <ion-item class=\"device-heading\">\n      <ion-label>Device: {{deviceName}}</ion-label>\n    </ion-item>\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header [class.slides-color]=\"colorClassActive[0]\" (click)=\"toggleColor(0)\">\n          Info's\n        </mat-expansion-panel-header>\n    \n        <ion-list >\n          <ion-item-group>\n            <ion-item-divider class=\"ion-no-padding\">\n              <ion-label>Latest Data:</ion-label>\n            </ion-item-divider>\n\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"battery-charging\"></ion-icon>\n            <ion-label>{{deviceInfoValues.battery}}</ion-label>\n            </ion-item>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"speedometer\"></ion-icon>\n              <ion-label>{{deviceInfoValues.speed}}km/h</ion-label>\n            </ion-item>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"pin\"></ion-icon>\n              <a id=\"googleMapsLink\" target=\"_blank\">Google Maps</a>\n              \n            </ion-item>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"clock\"></ion-icon>\n              <ion-label>{{deviceInfoValues.time}}</ion-label>\n            </ion-item>\n\n            <ion-item-divider class=\"ion-no-padding\">\n              <ion-label>Nearest Location:</ion-label>\n            </ion-item-divider>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"film\"></ion-icon>\n              <ion-label>{{deviceInfoValues.street}}</ion-label>\n            </ion-item>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"business\"></ion-icon>\n              <ion-label>{{deviceInfoValues.building}}</ion-label>\n            </ion-item>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>{{deviceInfoValues.city}}</ion-label>\n            </ion-item>\n\n            <ion-item-divider class=\"ion-no-padding\">\n              <ion-label>Stopped Since:</ion-label>\n            </ion-item-divider>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"log-in\"></ion-icon>\n              <ion-label>{{deviceInfoValues.lastLogin}}</ion-label>\n            </ion-item>\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon name=\"stopwatch\"></ion-icon>\n              <ion-label>{{deviceInfoValues.days}}</ion-label>\n            </ion-item>\n        </ion-item-group>\n        </ion-list>\n      </mat-expansion-panel>\n        \n      <mat-expansion-panel>\n        <mat-expansion-panel-header [class.slides-color]=\"colorClassActive[1]\" (click)=\"toggleColor(1)\">\n          Route\n        </mat-expansion-panel-header>\n        <ion-segment>\n          <ion-segment-button id=4 (click)=\"showTab(4)\">\n            \n            <ion-label>DateRange</ion-label>\n          </ion-segment-button>\n          <ion-segment-button id=0 (click)=\"showTab(0)\">\n            \n            <ion-label>LastMinutes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button id=1 (click)=\"showTab(1)\">\n            \n            <ion-label>LastPoints</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <form #f=\"ngForm\" (ngSubmit)=\"getPoints(f)\">\n          <ion-grid *ngIf=\"selectedTab == 4\"> \n            <ion-row >\n              <ion-col size-md=\"6\" offset-md=\"3\"> \n                <ion-list  class=\"ion-no-padding\">\n                      \n                  <ion-item class=\"ion-no-padding\">\n                        <ion-icon name=\"calendar\"></ion-icon>\n                        <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"startDate\" ngModel pickerFormat=\"MMM DD, YYYY HH:mm\"  name=\"startDate\" placeholder=\"Start Date\">\n                        </ion-datetime>\n                  </ion-item>\n                  <ion-item class=\"ion-no-padding\">\n                        <ion-icon name=\"calendar\"></ion-icon>\n                        <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"endDate\" ngModel pickerFormat=\"MMM DD, YYYY HH:mm\" name=\"endDate\" placeholder=\"End Date\">\n                        </ion-datetime>                                       \n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid *ngIf=\"selectedTab == 0\"> \n            <ion-row >\n              <ion-col size-md=\"6\" offset-md=\"3\"> \n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-icon name=\"time\"></ion-icon>\n                    <ion-input placeholder=\"Last Minutes\" [(ngModel)]=\"lastMinutes\" ngModel name=\"lastMinutes\" class=\"text-alignment\">\n                    </ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n              </ion-row>\n          </ion-grid>\n          <ion-grid *ngIf=\"selectedTab == 1\"> \n            <ion-row >\n              <ion-col size-md=\"6\" offset-md=\"3\"> \n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-icon name=\"analytics\"></ion-icon>\n                    <ion-input placeholder=\"Last WayPoints\" [(ngModel)]=\"lastPoints\" ngModel name=\"lastPoints\" class=\"text-alignment\">\n                    </ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-item class=\"ion-no-padding\">\n            <ion-button type=\"submit\" slot=\"end\">\n              <ion-label>Save</ion-label>\n            </ion-button>\n          </ion-item>\n        </form>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel>\n        <mat-expansion-panel-header [class.slides-color]=\"colorClassActive[2]\" (click)=\"toggleColor(2)\">\n          Alarms\n        </mat-expansion-panel-header>\n          \n        <div *ngIf=\"deviceModel; else NoDeviceModel\">\n        \n        <ion-list >\n          \n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_sos===1 || deviceModel.alarm_drop==1\">\n            <div *ngIf=\"deviceModel.alarm_sos===1; else drop\">\n              <ion-label class=\"item-paddings\">SOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-sos.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(0)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>\n            <ng-template #drop>\n              <div>\n                <ion-label class=\"item-paddings\">Remove the FINDER</ion-label>\n                <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-drop.png\" class=\"icon-dimensions item-bottom-padding\">\n                </ion-img>\n              </div>\n            </ng-template>\n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmsos\" id=\"alarmsos\">\n            </ion-toggle>\n\n          </ion-item>\n\n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_batteriestand===1\">\n            <div>\n              <ion-label class=\"item-paddings\">Low Battery</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-battery.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(1)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>  \n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmakkuwarnung\" id=\"alarmakkuwarnung\">\n            </ion-toggle>                               \n          </ion-item>\n\n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_erschuetterung===1\">\n            <div>\n              <ion-label class=\"item-paddings\">Shock&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-shock.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(2)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>\n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmbewegung\" id=\"alarmbewegung\">\n            </ion-toggle>\n          </ion-item>\n\n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_stromunterbrechung===1\">\n            <div>\n              <ion-label class=\"item-paddings\">Power cut-off</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-power-cut.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(3)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>\n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmstromunterbrechung\" id=\"alarmstromunterbrechung\">\n            </ion-toggle>\n          </ion-item>\n\n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_zuendalarm===1\">\n            <div>\n              <ion-label class=\"item-paddings\">Ignition alert</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-ignition.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(4)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>\n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmzuendalarm\" id=\"alarmzuendalarm\">\n            </ion-toggle>\n          </ion-item>\n\n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_geschwindigkeit===1\">\n            <div>\n              <ion-label class=\"item-paddings\">Speeding alert</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-speeding.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(5)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>\n            <div slot=\"end\">\n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmgeschwindigkeit\" id=\"alarmgeschwindigkeit\">\n            </ion-toggle>\n            <div *ngIf=\"deviceAlarmsValues.alarmgeschwindigkeit===1\" slot=\"end\">\n              <ion-item class=\"ion-no-padding\">\n              <ion-label>km/h</ion-label></ion-item>\n              <ion-item class=\"ion-no-padding\">\n              <ion-input type=\"number\" [(ngModel)]=\"alarmgeschwindigkeitab\" (ionBlur)=\"updateSpeed(alarmgeschwindigkeitab)\" placeholder=\"Value\" class=\"speed-input-width\"></ion-input>\n            </ion-item></div></div>\n          </ion-item>\n\n          <ion-item class=\"ion-no-padding\" *ngIf=\"deviceModel.alarm_radius===1\">\n            <div>\n              <ion-label class=\"item-paddings\">Leave/Enter area</ion-label>\n              <ion-img src=\"../../../assets/icons/map/alarms/paj-icon-alarm-radius.png\" class=\"icon-dimensions item-bottom-padding\">\n              </ion-img>\n              <ion-icon name=\"help-circle-outline\" (click)=\"showAlarmInfo(6)\" class=\"mouseIcon infoIconPosition\"></ion-icon>\n            </div>\n            <ion-toggle slot=\"end\" color=\"primary\" (ionChange)=\"enableAlarmData($event)\" [checked]=\"deviceAlarmsValues.alarmgeozaunbefahren\" id=\"alarmgeozaunbefahren\">\n            </ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ng-template #NoDeviceModel>\n        <ion-label class=\"item-paddings\">No data for Alarms</ion-label>\n      </ng-template>\n      </mat-expansion-panel>\n        \n    </mat-accordion>\n      \n    \n    <ion-item>\n        <ion-button (click)=\"logout()\" slot=\"end\">\n          <ion-icon slot=\"start\" name=\"power\"></ion-icon>\n          <ion-label>Logout</ion-label>\n        </ion-button>\n    </ion-item>\n  </ion-content>\n</ion-menu> -->\n<ion-router-outlet id=\"first\"></ion-router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarSideBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/***************************************/\n\nion-menu {\n  margin: 0;\n  padding: 0;\n  --background: url('panel-bg.jpg') no-repeat;\n}\n\nion-menu ion-header ion-toolbar {\n  height: 185px;\n  padding: 20px 10px 20px 20px !important;\n  overflow: auto !important;\n  min-height: 130px !important;\n}\n\nion-menu ion-header ion-toolbar ion-avatar {\n  width: 90px;\n  height: 90px;\n  border: solid 5px #f57d48;\n  vertical-align: top;\n}\n\nion-menu ion-header .panel-user-detail {\n  width: 100%;\n  text-align: left;\n}\n\nion-menu ion-header .panel-user-detail h3 {\n  margin: 0;\n  padding: 10px 0 0;\n  font-size: 18px;\n}\n\nion-menu ion-header .panel-user-detail p {\n  margin: 0;\n  padding: 5px 0 0;\n  font-size: 14px;\n  font-weight: normal;\n}\n\nion-menu ion-content {\n  margin: 0;\n  padding: 0;\n  --background: transparent;\n}\n\nion-menu ion-content ion-list {\n  background: transparent;\n  padding: 0;\n}\n\nion-menu ion-content ion-list ion-item {\n  --background:transparent;\n}\n\nion-menu ion-content ion-list ion-item ion-icon {\n  padding: 2px;\n  margin-right: 10px;\n  font-size: 21px;\n  height: 27px;\n  width: 32px;\n}\n\nion-menu ion-footer ion-toolbar {\n  --background: #f0f0f0;\n  --min-height: 45px;\n}\n\nion-menu ion-footer ion-toolbar span {\n  font-size: 13px;\n}\n\n/***************************************/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZGF0YWxvZ3kvcGFqcG9ydGFsdjIvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURNRTtFQUNFLGVBQUE7QUNISjs7QURNRTtFQUNFLG1CQUFBO0FDSEo7O0FETUU7O0VBRUUsa0JBQUE7QUNISjs7QURVRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDUko7O0FEV0U7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNYSjs7QURjRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGtCRTtFQUNFLCtCQUFBO0FDZko7O0FEa0JFO0VBQ0UsY0FBQTtBQ2ZKOztBRGtCRTtFQUNFLGdCQUFBO0FDZko7O0FEa0JFO0VBQ0Usc0JBQUE7QUNmSjs7QURrQkU7RUFDRSxtQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNmSjs7QURrQkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNmSjs7QURrQkU7RUFDRSwrQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7QUNmSjs7QURrQkU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLGtCQUFBO0FDZko7O0FEa0JFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNoQko7O0FEbUJFO0VBQ0UsaUNBQUE7QUNoQko7O0FEb0JFLHdDQUFBOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFFQSwyQ0FBQTtBQ25CSjs7QURxQlE7RUFDSSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDbkJaOztBRHFCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ25CaEI7O0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDckJaOztBRHNCWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNwQmhCOztBRHNCWTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3BCaEI7O0FEd0JJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFJQSx5QkFBQTtBQ3pCUjs7QUQwQlE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7QUN4Qlo7O0FEeUJZO0VBQ0Usd0JBQUE7QUN2QmQ7O0FEd0JjO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdEJoQjs7QUQ0Qk07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDMUJSOztBRDJCUTtFQUNFLGVBQUE7QUN6QlY7O0FEK0JFLHdDQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgXG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIFxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gICAgY29sb3I6ICM2MTZlN2U7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM3Mzg0OWE7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1ub3RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIH1cbiAgXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIFxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvLyBMZWZ0IHBhbmVsIG1lbnUgY3VzdG9taXphdGlvbiBzdGFydFxuICBpb24tbWVudXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhbmVsLWJnLmpwZycpIG5vLXJlcGVhdDtcbiAgICBpb24taGVhZGVye1xuICAgICAgICBpb24tdG9vbGJhcntcbiAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOjIwcHggMTBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tYXZhdGFye1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDVweCAjZjU3ZDQ4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAucGFuZWwtdXNlci1kZXRhaWx7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7IFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwOyBcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jb250ZW50e1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC5pbm5lci1zY3JvbGx7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBpb24tbGlzdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWZvb3RlcntcbiAgICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIC0tbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ICBcbiAgfVxuICAvLyBMZWZ0IHBhbmVsIG1lbnUgY3VzdG9taXphdGlvbiBlbmRcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8iLCJpb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmlvbi1tZW51IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYW5lbC1iZy5qcGdcIikgbm8tcmVwZWF0O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGhlaWdodDogMTg1cHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTMwcHggIWltcG9ydGFudDtcbn1cbmlvbi1tZW51IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogc29saWQgNXB4ICNmNTdkNDg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5pb24tbWVudSBpb24taGVhZGVyIC5wYW5lbC11c2VyLWRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciAucGFuZWwtdXNlci1kZXRhaWwgaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMCAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tbWVudSBpb24taGVhZGVyIC5wYW5lbC11c2VyLWRldGFpbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1tZW51IGlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tbWVudSBpb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cbmlvbi1tZW51IGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICB3aWR0aDogMzJweDtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIC0tbWluLWhlaWdodDogNDVweDtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXIgaW9uLXRvb2xiYXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppComponentsSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
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


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _constants_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../constants.enum */
    "./src/app/constants.enum.ts");
    /* harmony import */


    var src_app_geo_json_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/geo-json-template */
    "./src/app/geo-json-template.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SideBarComponent = /*#__PURE__*/function () {
      function SideBarComponent(router, authService, menu, storage, alertCtrl, iab, loadingCtrl) {
        _classCallCheck(this, SideBarComponent);

        this.router = router;
        this.authService = authService;
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.outputData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = null;
        this.markersInfo = null;
        this.isAdmin = null;
        this.deviceChecked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.flyToDevice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.colorClassActive = [false, false, false];
        this.highlightSelectedDevice = false;
        this.type = 1;
        this.selDeviceID = null;
        this.dataPoints = null;
        this.selectedTab = 0;
        this.notFirstTime = false;
        this.toggleArray = [];
        this.deviceModel = new src_app_geo_json_template__WEBPACK_IMPORTED_MODULE_6__["DeviceModel"]();
        this.deviceAlarmsValues = new src_app_geo_json_template__WEBPACK_IMPORTED_MODULE_6__["DeviceModel"]();
        this.deviceInfoValues = new src_app_geo_json_template__WEBPACK_IMPORTED_MODULE_6__["DeviceInfo"]();
        this.lastLatLng = {};
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Map',
          url: '/map',
          menuicon: 'flaticon-placeholder'
        }, {
          title: 'Dasboard',
          url: '/dashboard',
          menuicon: 'flaticon-speedometer'
        }, {
          title: 'Device Management',
          url: '/device-management',
          menuicon: 'flaticon-map'
        }, {
          title: 'Alarm Summary',
          url: '/notifications',
          menuicon: 'flaticon-emergency'
        }, {
          title: 'My Account',
          url: '/account',
          menuicon: 'flaticon-user-2'
        }, {
          title: 'About Us',
          url: '/about-us',
          menuicon: 'flaticon-info'
        }];
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.currenctUrl = this.router.url;
                    _context.next = 3;
                    return this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_DATA).then(function (res) {
                      if (res == null) {
                        _this.getUserInfo();
                      } else {
                        _this.userData = res;
                        _this.lName = _this.userData.firstname;
                        _this.fName = _this.userData.lastname;
                      }
                    });

                  case 3:
                    _context.next = 5;
                    return this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].DEVICE_NAME).then(function (res) {
                      _this.deviceName = res;
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log('test: ' + this.radioCheck);
          console.log('second');
        }
      }, {
        key: "toggleColor",
        value: function toggleColor(id) {
          var _this2 = this;

          var index = 0;
          this.colorClassActive.forEach(function (value) {
            if (index === id) {
              _this2.colorClassActive[index] = !_this2.colorClassActive[index];
            } else {
              _this2.colorClassActive[index] = false;
            }

            index = index + 1;
          });
        }
      }, {
        key: "drawStreetAddress",
        value: function drawStreetAddress(streetInfo) {
          this.deviceInfoValues.street = streetInfo.address.road; // + ' ' + streetInfo.address.house_number;

          this.deviceInfoValues.building = streetInfo.address.postcode + ' ' + streetInfo.address.city + ' ' + streetInfo.address.neighbourhood;
          this.deviceInfoValues.city = streetInfo.address.country + ' (' + streetInfo.address.county + ')';
        }
      }, {
        key: "logout",
        value: function logout() {
          this.menu.close();
          this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].UPDATE_MAP, 1);
          this.storage.clear();
          this.authService.logout();
        }
      }, {
        key: "openPrivacyPolicy",
        value: function openPrivacyPolicy() {
          this.iab.create('https://start.finder-portal.com/privacy-policy', '_blank');
          console.log('InAppBrowser');
        }
      }, {
        key: "openImprint",
        value: function openImprint() {
          this.iab.create('https://start.finder-portal.com/imprint', '_blank');
          console.log('InAppBrowser');
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

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
                    this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_ID).then(function (res) {
                      _this3.userID = res;
                    });
                    _context2.next = 6;
                    return loading.present();

                  case 6:
                    _context2.next = 8;
                    return this.authService.getUserInfo(this.userID).then(function (res) {
                      // console.log('start user');
                      // console.log(res);
                      // console.log('end user');
                      _this3.userData = res.success;
                      _this3.lName = _this3.userData.firstname;
                      _this3.fName = _this3.userData.lastname;

                      _this3.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_DATA, _this3.userData);
                    })["catch"](function (e) {
                      console.log(e);
                    });

                  case 8:
                    _context2.next = 10;
                    return loading.dismiss();

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SideBarComponent;
    }();

    SideBarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"])], SideBarComponent.prototype, "reorderGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SideBarComponent.prototype, "outputData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SideBarComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SideBarComponent.prototype, "markersInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SideBarComponent.prototype, "isAdmin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SideBarComponent.prototype, "deviceChecked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SideBarComponent.prototype, "flyToDevice", void 0);
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-bar.component.scss */
      "./src/app/components/side-bar/side-bar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], SideBarComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/side-bar/side-bar.component */
    "./src/app/components/side-bar/side-bar.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      exports: [_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=default~about-us-about-us-module~account-account-module~dashboard-dashboard-module~device-management~71eddb9c-es5.js.map