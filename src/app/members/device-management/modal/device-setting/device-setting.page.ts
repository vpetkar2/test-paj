import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './../../../../services/authentication.service';
import { ModalController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { DeafultIconsPage } from './../deafult-icons/deafult-icons.page';
import { DeviceImgPage } from './../device-img/device-img.page';
@Component({
  selector: 'app-device-setting',
  templateUrl: './device-setting.page.html',
  styleUrls: ['./device-setting.page.scss'],
})
export class DeviceSettingPage implements OnInit {
  constructor( public modelCtrl: ModalController, private authService: AuthenticationService) { }
  @Input() id: number;
  @Input() name: string;
  @Input() color: string;
  @Input() iconusecustom: number;
  @Input() iconcustomimage: string;
  @Input() device_viewlink: number;
  @Input() shaireLink: string;
  @Input() iconname: string;
  @Input() user_id: number;
  @Input() url: string;
  uploadedFile: any = null;
  // @Input() data: any;
  ngOnInit() {
  }

  async dismiss() {
    await this.modelCtrl.dismiss({
      dismissed: true,
      id: this.id,
      name: this.name,
      color: this.color,
      iconname: this.iconname,
      iconusecustom: this.iconusecustom,
      iconcustomimage: this.iconcustomimage,
      device_viewlink: this.device_viewlink,
    });
  }
  async DeviceImg() {
    const modal = await this.modelCtrl.create({
      component: DeviceImgPage,
      componentProps: {
        id: this.id,
        iconname: this.iconname,
        iconusecustom: this.iconusecustom,
        uploadedFile: this.uploadedFile,
        url: this.url,
        user_id: this.user_id,
        iconcustomimage: this.iconcustomimage,

      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.iconname) {
      this.iconname = data.iconname;
      this.iconusecustom = data.iconusecustom;
      this.iconcustomimage = data.iconcustomimage;
    }
  }

  handleFileInput(files: FileList) {
    this.uploadedFile = files.item(0);
    console.log(files.item(0));
  }

  async updateDeviceCustImage() {
    // this.authService.updateDeviceCustImage(this.id, this.uploadedFile);
   }
}
