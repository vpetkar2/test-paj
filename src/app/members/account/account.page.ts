import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController, MenuController } from '@ionic/angular';
import {Constants} from '../../constants.enum';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {
  public registerForm: FormGroup;
  email: string;
  fName: string;
  lName: string;
  userID: number;
  userData: any;

  validationMessages = {
    email: [
        { type: 'required', message: 'Email is required.' },
        { type: 'minlength', message: 'Email must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Email cannot be more than 30 characters long.' }
      ],
    fname: [
      { type: 'required', message: 'First Name is required.' }
    ],
    lname: [
      { type: 'required', message: 'Last Name is required.' }
    ],
  };

  constructor(
    private menu: MenuController,
    private authService: AuthenticationService,
    public formBuilder: FormBuilder,
    private storage: Storage,
    public loadingCtrl: LoadingController
    ) {
    this.registerForm = formBuilder.group({
      fname: ['', Validators.compose([Validators.maxLength(30),  Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lname: ['', Validators.compose([Validators.maxLength(30),  Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      // tslint:disable-next-line: max-line-length
      email: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])]
    });
   }

  ngOnInit() {
    this.getUserInfo();
    this.menu.close();
  }

  ionViewWillEnter() {
  }

  async getUserInfo() {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    this.storage.get(Constants.USER_ID).then(res => {
      this.userID = res;
    });
    await loading.present();
    await this.authService.getUserInfo(this.userID).then(
      res => {
        this.userData = res.success;
      }
    ).catch (e => {
      console.log(e);
    });
    await loading.dismiss();
    this.email = this.userData.email;
    this.fName = this.userData.firstname;
    this.lName = this.userData.lastname;
  }

  async update(form) {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    this.storage.get(Constants.USER_ID).then(res => {
      this.userID = res;
    });
    await loading.present();
    await this.authService.updateUserInfo(form.value.fname, form.value.lname, form.value.email, this.userID);
    this.userData.firstname = form.value.fname;
    this.userData.lastname = form.value.lname;
    this.userData.email = form.value.email;
    this.storage.set(Constants.USER_DATA, this.userData);
    loading.dismiss();
  }
}
