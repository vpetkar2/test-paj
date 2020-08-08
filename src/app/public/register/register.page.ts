import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  email: string;
  username: string;
  password: string;
  cPassword: string;

  validationMessages = {
    'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'minlength', message: 'Email must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Email cannot be more than 30 characters long.' }
      ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' }
    ],
    'c_password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' }
    ],
  };
  constructor(private authService: AuthenticationService, public formBuilder: FormBuilder, public loadingCtrl: LoadingController) {
    this.registerForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30),  Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      c_password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ngOnInit() {
  }

  async register(form) {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();
    this.authService.register(form.value.name, form.value.email, form.value.password);
    loading.dismiss();
    this.email = '';
    this.username = '';
    this.password = '';
    this.cPassword = '';
  }

}
