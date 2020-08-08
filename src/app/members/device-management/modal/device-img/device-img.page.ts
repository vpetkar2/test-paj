import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeafultIconsPage } from './../deafult-icons/deafult-icons.page';
import { AuthenticationService } from './../../../../services/authentication.service';
import { Platform } from '@ionic/angular';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-device-img',
  templateUrl: './device-img.page.html',
  styleUrls: ['./device-img.page.scss'],
})
export class DeviceImgPage implements OnInit {
  @Input() iconname: string;
  @Input() id: number;
  @Input() iconusecustom: number;
  @Input() url: string;
  @Input() user_id: number;
  @Input() iconcustomimage: string;
  isApp: boolean;
  photo: SafeResourceUrl;

  constructor(public modelCtrl: ModalController,
              public authService: AuthenticationService,
              public platform: Platform,
              private sanitizer: DomSanitizer ) { }
  ngOnInit() {
    if (this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }
    console.log(this.isApp);
  }
  async dismiss() {
    await this.modelCtrl.dismiss({
      dismissed : true,
      id: this.id,
      iconname: this.iconname,
      iconusecustom: this.iconusecustom,
      iconcustomimage: this.iconcustomimage
    });
  }

  async DeafultImg() {
    const modal = await this.modelCtrl.create({
      component: DeafultIconsPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.iconname) {
      this.iconname = data.iconname;
      this.iconusecustom = 0;
      this.authService.updateDeviceCustImage(this.id, 0, data.iconname, null);
    }
  }
  fileupload($event: any) {
    console.log($event.target.files[0]);
    if($event.target.files[0]) {
      console.log('helo');
      this.iconusecustom = 1;
      this.authService.updateDeviceCustImage(this.id, 1, null,  $event.target.files[0]).then((data) => {
        if (this.iconusecustom && data.body.iconcustomimage) {
          this.iconcustomimage = data.body.iconcustomimage;
        }
      });
      // device_id: any, isCustom: any, deafultImgName: any , fileToUpload: File
    }
  }
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });

    // Can be set to the src of an image now
    this.iconusecustom = 1;
    this.authService.updateDeviceCustImage(this.id, 1, null, this.dataURLtoFile(image.dataUrl, 'hello.png')).then((data) => {
      if (this.iconusecustom && data.body.iconcustomimage) {
        this.iconcustomimage = data.body.iconcustomimage;
      }
    });
  }
  dataURLtoFile(dataurl, filename) {
    var arr: any = dataurl.split(','),
        mime: any = arr[0].match(/:(.*?);/)[1],
        bstr: any = atob(arr[1]),
        n = bstr.length,
        u8arr: any = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type: mime});
  }
}
