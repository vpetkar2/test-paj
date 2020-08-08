import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import {Constants} from '../../constants.enum';
import { Storage } from '@ionic/storage';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordType = 'password';
  passwordIcon = 'eye';
  // email: string = 'testkunde@paj-gps.de';
  // password: string = 'app123#.';
  email: string = '';
  password: string = '';
  subscription;
  selectedLanguage:string;

  constructor(
    private authService: AuthenticationService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private router: Router,
    private platform: Platform,
    private authenticationService: AuthenticationService,
    private storage: Storage,
    private translateConfigService: TranslateConfigService) {
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async ionViewWillEnter() {
    // console.log('View Called');
    this.subscription = this.platform.backButton.subscribe(()=>{
      navigator['app'].exitApp();
    });
  }

  async login(form: NgForm) {
    // this.authService.login();
    // const loading = await this.loadingCtrl.create({
    //   message: 'Please Wait',
    //   translucent: true,
    // });
    // await loading.present();
    this.storage.set(Constants.MAP, 'osm');  // by default open street maps
    this.storage.set(Constants.ROUTE_ICON, 'circle'); // bydefault its circle
    this.storage.set(Constants.UPDATE_MAP, 0);
    this.storage.set(Constants.UPDATE_STYLE, 0);
    await this.authService.login(form.value.email, form.value.password);
    // await this.authenticationService.authenticationState.subscribe(state => {
    // });
    // loading.dismiss();
    this.email = '';
    this.password = '';
    // console.log(data);
  }

  vergessenPasswort() {
    this.router.navigate(['/forget-password']);
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
