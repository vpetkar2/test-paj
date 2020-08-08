import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    public loadingCtrl: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();

    // this.notifications = await this.authService.getNotifications();
    await this.authService.getNotifications().then(
      res => {
        this.notifications = res.success;
      }
    ).catch (e => {
      console.log(e);
    });
    console.log(this.notifications);
    loading.dismiss();
  }

  loadMap() {
    this.router.navigate(['/map']);
  }
}
