import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { Constants } from '../../constants.enum';
import { ModalController } from '@ionic/angular';
import { DeviceSettingPage } from './modal/device-setting/device-setting.page';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.page.html',
  styleUrls: ['./device-management.page.scss'],
})

export class DeviceManagementPage implements OnInit {
  userId: number;
  userInfo: any;
  routeIcons: string;
  devices: any = null;
  searchItem: any;
  searchTerm: string = '';
  searching: boolean = false;
  url: string = Constants.ROUTE;
  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    public modalController: ModalController,
    public loadingCtrl: LoadingController
    ) {}

   async ngOnInit() {
    await this.storage.get(Constants.USER_ID).then(res => {
      this.userId = res;
    });
    this.getUserInfo();
    this.getDevices();
    // this.setFilteredItems();
  }
  async getDevices() {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();
    await this.authService.getDevices().then(
      res => {
        this.devices = res.success;
        console.log(this.devices);
        this.setFilteredItems();
      }
    ).catch (e => {
      console.log(e);
    });
    await loading.dismiss();
  }

  setFilteredItems() {
    this.searchItem = this.filterDevices(this.searchTerm);
  }

  filterDevices(searchTerm: any) {
    return this.devices.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  async getUserInfo() {
    await this.authService.getUserInfo(this.userId).then(
      res => {
        this.userInfo = res.success;
        console.log(res.success);

      }
    ).catch (e => {
      console.log(e);
    });
  }

  async deviceSetting(device: any) {
    console.log(device);
    const modal = await this.modalController.create({
      component: DeviceSettingPage,
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
        url: this.url,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.updateDeviceMapSetting(data);
  }
  async updateSettings() {
    console.log('fired');
    let mapStyle;
    await this.storage.get(Constants.MAP).then(res => {
      mapStyle = res;
    });
    let routeIcon;
    await this.storage.get(Constants.ROUTE_ICON).then(res => {
      routeIcon = res;
    });
    this.storage.set(Constants.ROUTE_ICON, this.userInfo.route_icons);
    await this.authService.updateUserMapSetting(this.userInfo.route_icons,
      this.userInfo.distance_unit,
      this.userInfo.map,
      this.userInfo.show_kmanzeige,
      this.userInfo.snap_to_road,
      this.userInfo.pauses).then(
      res => {
        console.log(res);
      }
    ).catch (e => {
      console.log(e);
    });
    this.storage.set(Constants.MAP, this.userInfo.map);
    console.log(mapStyle);
    console.log(this.userInfo.map);
    if(routeIcon !== this.userInfo.route_icons) {
      console.log('update route Icons');
      await this.storage.set(Constants.UPDATE_MAP, 1);
    }
    if(mapStyle !== this.userInfo.map) {
      console.log('update style');
      await this.storage.set(Constants.UPDATE_STYLE, 1);
      // await this.storage.set(Constants.UPDATE_MAP, 1);
    }
  }

  async updateDeviceMapSetting(data: any) {
   this.authService.updateDeviceMapSetting(
    data.id,
    data.name,
    data.color,
    data.iconname,
    data.iconusecustom,
    data.device_viewlink,
    ).then(
      res => {
        const found = this.devices.find(element => element.id === data.id);
        this.devices[this.devices.indexOf(found)].name = data.name;
        this.devices[this.devices.indexOf(found)].color = data.color;
        this.devices[this.devices.indexOf(found)].iconname = data.iconname;
        this.devices[this.devices.indexOf(found)].iconusecustom = data.iconusecustom;
        this.devices[this.devices.indexOf(found)].iconcustomimage = data.iconcustomimage;
      }
    ).catch (e => {
      console.log(e);
    });
  }
}
