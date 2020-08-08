import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
import { AuthenticationService } from './../../services/authentication.service';
import { Constants } from '../../constants.enum';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private storage: Storage, private authService: AuthenticationService, public loadingCtrl: LoadingController) { }
  userId: number;
  userInfo: any;
  devices: any = null;
  searchItem: any;
  searchTerm: string = '';
  searching: boolean = false;
  url: string = Constants.ROUTE;
  async ngOnInit() {
    await this.storage.get(Constants.USER_ID).then(res => {
      this.userId = res;
    });
    this.getDashboard();
  }

  async getDashboard() {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();
    await this.authService.getDashboard().then(
      res => {
        this.devices = res.dashboardData;
        this.setFilteredItems();
        const chart: any = new CanvasJS.Chart('SpeedChart', {
          theme: 'light2',
          zoomEnabled: true,
          toolTip: {
            content: '{name}: {y}km/h - {x}'
          },
          data: this.devices,
          legend: {
            cursor: 'pointer',
            fontFamily: 'roboto',
            itemclick(e: any) {
              console.log(e);
              if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                e.dataSeries.visible  = false;
                this.visibility = false;
              } else {
                e.dataSeries.visible = true;
                this.visibility = true;
              }
              e.chart.render();
            }
          },
          axisX: {
            labelFontFamily: 'roboto',
            labelFontSize: 10,
            labelAngle: -40,
            valueFormatString: 'DD.MM - HH:mm',
            gridThickness: 1,
            gridDashType: 'dot'
            },
            axisY: {
              title : ('Speed') + ' [' + ('km/h') + ']',
              titleFontFamily: 'roboto',
              titleFontSize: 10,
              labelFontFamily: 'roboto',
              labelFontSize: 10,
              gridThickness: 1
            },
        });
        chart.render();
        $('.canvasjs-chart-credit').hide();
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
    console.log(this.devices);
    const deviceArr = this.devices.map(item => {
      if ('device_distance' in item) {
        console.log('in if');
      } else {
        console.log('in else');
        item.device_distance = { day1: 0, day7: 0, day30: 0 };
      }
      return item;
    });

    return deviceArr.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }
}
