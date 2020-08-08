import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../../services/authentication.service';
import { DeviceModel } from 'src/app/geo-json-template';
import { Constants } from 'src/app/constants.enum';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  userId: number;
  url: string = Constants.ROUTE;
  deviceAllData;
  deviceAlarmsValues;
  deviceData;
  deviceId;
  deviceInfo;
  alarmgeschwindigkeitab: number;
  deviceModel = new DeviceModel();
  constructor(
    private modalController: ModalController,
    private authService: AuthenticationService,
    private alertCtrl: AlertController,
    private storage: Storage,
    public loadingCtrl: LoadingController
    ) { }

  async ngOnInit() {

    await this.storage.get(Constants.USER_ID).then(res => {
      this.userId = res;
    });
    // console.log(this.deviceAlarmsValues);
    // console.log(this.deviceData);
    // console.log(this.deviceId);
    // console.log(this.deviceInfo);
    // console.log(this.deviceModel);
  }

  ionViewDidEnter() {
    this.alarmgeschwindigkeitab = this.deviceAlarmsValues.alarmgeschwindigkeitab;
  }

  async enableAlarmData($event) {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();

    await this.authService.updateDeviceAlarms(this.deviceId, $event.target.id, Number($event.detail.checked))
    .then(
      res => {
        this.dismiss('updateDevices');
      }
    ).catch (e => {
        console.log(e);
    });

    loading.dismiss();
  }

  async updateSpeed($event) {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();

    await this.authService.updateDeviceAlarms(this.deviceId, 'alarmgeschwindigkeitab', $event)
    .then(
      res => {
        this.deviceAlarmsValues = res.success;
        this.dismiss('updateDevices');
      }
    ).catch (e => {
        console.log(e);
    });

    loading.dismiss();
  }

  showAlarmInfo(messageIndex) {
    const alarmsMessageHeader = [
      'SOS Alert',
      'Low Battery Alert',
      'Shock Alert',
      'Power CutOff Alert',
      'Ignition Lock Alert',
      'Speeding Limit Alert',
      'GeoFence Alert'
    ];
    const alarmsMessageDescription = [
      'Please press the SOS button for 3 seconds to trigger an SOS alert. After the SOS alert has been triggered, 10 minutes must elapse before a new alert can be triggered.',
      'If the battery is low, the FINDER sends an alarm to the FINDER portal. So you can react as quickly as possible and recharge the FINDER.',
      'If the FINDER shakes, it sends an alert to the FINDER portal. So you can intervene in time. After this alert has been triggered, the FINDER must remain in a viewpoint for 10 minutes without any movement. The alert then automatically gets reactivated.',
      'If the FINDER is disconnected from the external power supply, you will immediately receive an alert. Subsequently the FINDER is powered by the internal battery. The internal battery is designed for emergencies and lasts about 1 day.',
      'If the engine of your car is started or stoped, you will get an alarm.',
      'You want to check if a person or a vehicle is driving too fast? With this alert you can set a speed limit. If this limit exceeds, you will be notified by an alarm. The minimum speed is 50 km/h. 10 Minutes after the alert has been triggered, it will automatically reset itself.',
      'The geofence is an area in the form of a perimeter. If the FINDER enters or leaves this area, you will receive an alert.'
    ];
    this.alertCtrl.create({
      header: alarmsMessageHeader[messageIndex],
      message: alarmsMessageDescription[messageIndex],
      buttons: ['OK']
    }).then(alertEl => {
      alertEl.present();
    });

  }

  dismiss(type: string = '') {
    this.modalController.dismiss({
      type,
      dismissed: true
    });
  }
}
