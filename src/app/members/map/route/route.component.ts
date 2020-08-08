import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Constants } from 'src/app/constants.enum';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from './../../../services/authentication.service';
import { createNgModule } from '@angular/compiler/src/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent implements OnInit {

  userId: number;
  url: string = Constants.ROUTE;
  deviceAllData;
  deviceData;
  selDeviceID;
  startDate;
  endDate;
  lastMinutes;
  lastPoints;

  constructor(
    public loadingCtrl: LoadingController,
    private modalController: ModalController,
    private storage: Storage,
    private authService: AuthenticationService) { }

  async ngOnInit() {
    await this.storage.get(Constants.USER_ID).then(res => {
      this.userId = res;
    });
  }

  dismiss(type: string = '') {
    this.modalController.dismiss({
      type,
      dismissed: true
    });
  }

  async getPoints(form: NgForm) {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();

    const startDate = Date.parse(this.startDate);
    const endDate = Date.parse(this.endDate);

    await this.storage.get('selected-device-data').then(res => {
      this.selDeviceID = res.deviceID;
    });
    await this.authService.updateSpurInfo (
      this.selDeviceID, 3, startDate / 1000, endDate / 1000, +this.lastMinutes, +this.lastPoints).then(res => {
      });
    this.dismiss('updateRoute');
    loading.dismiss();
  }
}
