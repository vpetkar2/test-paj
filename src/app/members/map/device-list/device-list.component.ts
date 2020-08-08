import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonReorderGroup } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';
import { Constants } from 'src/app/constants.enum';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  @ViewChild(IonReorderGroup, { static: true }) reorderGroup: IonReorderGroup;
  @Input() data;
  radioCheck;
  selectedDeviceId;

  userId: number;
  url: string = Constants.ROUTE;

  constructor(
    private storage: Storage,
    public modalController: ModalController,
    private authService: AuthenticationService
    ) { }

  async ngOnInit() {
    await this.storage.get(Constants.USER_ID).then(res => {
      this.userId = res;
    });
  }

  async ionViewDidEnter() {
    await this.storage.get('selected-device-data').then(res => {
      this.selectedDeviceId = res.deviceID;
    });
    console.log(this.data);
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  doReorder(ev: any) {
    this.data = ev.detail.complete(this.data);
    ev.detail.complete();
    this.authService.updateDevicePosition(this.data);
  }

  passToggleValue() {

  }

  enableDeviceData(deviceID, deviceName, radioIndex) {
    const obj = {deviceID, deviceName, radioIndex};
    this.storage.set('selected-device-data', obj);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
