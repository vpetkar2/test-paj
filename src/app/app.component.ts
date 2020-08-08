import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, LoadingController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private fcm: FCM,
    private alertCtrl: AlertController
    ) {
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.authenticationService.authenticationState.subscribe( tokenState => {
        this.authenticationService.platform.subscribe( state => {
          if (state) {
            if (tokenState) {
              console.log('url', this.router.url);
              // debugger;
              if (this.router.url === '/login' || this.router.url === '/') {
                this.router.navigate(['map']);
                this.splashScreen.hide();
              } else {
                this.router.navigate([this.router.url]);
                this.splashScreen.hide();
              }
            } else {
              this.router.navigate(['/login']);
              this.splashScreen.hide();
            }
          }
        });
      });
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
            console.log("Received in background");
            //   this.alertCtrl.create({
            //     header: 'Notification',
            //     message: data.text,
            //     buttons: ['OK']
            // }).then(alertEl => {
            //   alertEl.present();
            // });
          
        } else {
          console.log("Received in foreground");
          console.log(data);
          this.alertCtrl.create({
            header: data.title,
            message: data.body,
            buttons: ['OK']
        }).then(alertEl => {
          alertEl.present();
        });
        };
      });
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
