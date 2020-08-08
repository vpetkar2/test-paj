import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController, IonReorderGroup, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Constants } from '../../constants.enum';
import { NgForm } from '@angular/forms';
import { ToggleCheck, DeviceModel, DeviceInfo } from 'src/app/geo-json-template';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @ViewChild(IonReorderGroup, { static: true }) reorderGroup: IonReorderGroup;
  @Output() outputData = new EventEmitter<string>();
  @Input() data: any = null;
  @Input() markersInfo: any = null;
  @Input() isAdmin: string = null;
  @Output() deviceChecked = new EventEmitter<{}>();
  @Output() flyToDevice = new EventEmitter<{}>();
  deviceName: string;
  colorClassActive: boolean[] = [false, false, false];
  highlightSelectedDevice = false;
  private type = 1;
  selDeviceID: number = null;
  private dataPoints: any = null;
  radioCheck: any;
  selectedTab = 0;
  notFirstTime = false;
  startDate: any;
  endDate: any;
  lastMinutes: any;
  lastPoints: any;
  segmentID: any;
  toggleArray: ToggleCheck[] = [];
  deviceModel = new DeviceModel();
  deviceAlarmsValues = new DeviceModel();
  deviceInfoValues = new DeviceInfo();
  alarmgeschwindigkeitab: number;
  deviceStatus: string;
  lastLatLng = {};
  fName: string;
  lName: string;
  userID: number;
  userData: any;
  currenctUrl: string;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Map',
      url: '/map',
      menuicon: 'flaticon-placeholder'
    },
    {
      title: 'Dasboard',
      url: '/dashboard',
      menuicon: 'flaticon-speedometer'
    },
    {
      title: 'Device Management',
      url: '/device-management',
      menuicon: 'flaticon-map'
    },
    {
      title: 'Alarm Summary',
      url: '/notifications',
      menuicon: 'flaticon-emergency'
    },
    {
      title: 'My Account',
      url: '/account',
      menuicon: 'flaticon-user-2'
    },
    {
      title: 'About Us',
      url: '/about-us',
      menuicon: 'flaticon-info'
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private menu: MenuController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private iab: InAppBrowser,
    private loadingCtrl: LoadingController) {  }

  async ngOnInit() {
    this.currenctUrl = this.router.url;
    await this.storage.get(Constants.USER_DATA).then(res => {
      if (res == null) {
        this.getUserInfo();
      } else {
        this.userData = res;
        this.lName = this.userData.firstname;
        this.fName = this.userData.lastname;
      }
    });
    await this.storage.get(Constants.DEVICE_NAME).then(res => {
      this.deviceName = res;
    });
  }

  ionViewWillEnter() {
      console.log('test: ' + this.radioCheck);
      console.log('second');
  }

  toggleColor(id: number) {
    let index = 0;
    this.colorClassActive.forEach(value => {
        if (index === id) {
          this.colorClassActive[index] = !this.colorClassActive[index];
        } else {
          this.colorClassActive[index] = false;
        }
        index = index + 1;
    });
  }

  drawStreetAddress(streetInfo) {
    this.deviceInfoValues.street = streetInfo.address.road; // + ' ' + streetInfo.address.house_number;
    this.deviceInfoValues.building = streetInfo.address.postcode + ' ' + streetInfo.address.city + ' ' + streetInfo.address.neighbourhood;
    this.deviceInfoValues.city = streetInfo.address.country + ' (' + streetInfo.address.county + ')';
  }

  logout() {
    this.menu.close();
    this.storage.set(Constants.UPDATE_MAP, 1);
    this.storage.clear();
    this.authService.logout();
  }

  openPrivacyPolicy() {
    this.iab.create('https://start.finder-portal.com/privacy-policy', '_blank');
    console.log('InAppBrowser');
  }

  openImprint() {
    this.iab.create('https://start.finder-portal.com/imprint', '_blank');
    console.log('InAppBrowser');
  }

  async getUserInfo() {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    this.storage.get(Constants.USER_ID).then(res => {
      this.userID = res;
    });
    await loading.present();
    await this.authService.getUserInfo(this.userID).then(
      res => {
        // console.log('start user');
        // console.log(res);
        // console.log('end user');
        this.userData = res.success;
        this.lName = this.userData.firstname;
        this.fName = this.userData.lastname;
        this.storage.set(Constants.USER_DATA, this.userData);
      }
    ).catch (e => {
      console.log(e);
    });
    await loading.dismiss();
  }

}
