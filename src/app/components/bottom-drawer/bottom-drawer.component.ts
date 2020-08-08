import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController } from '@ionic/angular';
import {Constants} from '../../constants.enum';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.component.html',
  styleUrls: ['./bottom-drawer.component.scss'],
})


export class BottomDrawerComponent implements OnInit {

  @Output() outputData = new EventEmitter<string>();
  private dataPoints: any = null;
  private type = 1;
  shouldBounce = true;
  dockedHeight = 70;
  distanceTop = 250;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 80;
  startDate: string = null;
  endDate: string = null;
  lastMinutes: string = null;
  lastPoints: string = null;
  information: any[];
  colorClassActive: boolean[] = [false, false, false];
  displayColor = 'hide-color';
  selDeviceID: number = null;
  deviceName: string;

  constructor(private authService: AuthenticationService, private storage: Storage, public loadingCtrl: LoadingController) {
     }

  async ngOnInit() {
    await this.storage.get(Constants.DEVICE_NAME).then(res => {
      this.deviceName = res;
    });
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

  async getPoints(form: NgForm) {
    const startDate = Date.parse(form.value.startDate);
    // console.log(form.value.startDate);
    this.drawerState = 0;
    const endDate = Date.parse(form.value.endDate);
    await this.storage.get(Constants.SELECTED_DEVICE).then(res => {
      this.selDeviceID = res;
      // console.log(this.isAdmin);
    });
    console.log(this.selDeviceID);
    // console.log(form.value.lastPoints);
    await this.authService.getDevicePoints(
      this.selDeviceID, this.type, startDate / 1000, endDate / 1000, form.value.lastMinutes, form.value.lastPoints).then(
      res => {
        this.dataPoints = res.success;
      }
    ).catch (e => {
      console.log(e);
    });
    console.log(this.dataPoints);
    this.outputData.emit(this.dataPoints);
  }

}
