import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { DeviceInfo } from 'src/app/geo-json-template';
import { Constants } from 'src/app/constants.enum';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  userId: number;
  url: string = Constants.ROUTE;
  deviceAllData;
  deviceInfo = new DeviceInfo();
  deviceData;
  constructor(
    public modalController: ModalController,
    private storage: Storage) { }

  async ngOnInit() {
    console.log('info comp');
    console.log(this.deviceAllData);
    await this.storage.get(Constants.USER_ID).then(res => {
      this.userId = res;
    });
    const gMapsLink = document.getElementById('googleMapsLink');
    const anchorValue = 'https://www.google.de/maps?f=q&hl=de&q=' + this.deviceAllData.last_lat + ',' + this.deviceAllData.last_lng;
    gMapsLink.setAttribute('href', anchorValue);
  }

  // ngOnInit() {
  //   console.log(this.deviceAllData);
  //   console.log(this.deviceData);
  //   console.log(this.deviceInfo);
  // }

  dismiss(type: string = '') {
    this.modalController.dismiss({
      type,
      dismissed: true
    });
  }
}
