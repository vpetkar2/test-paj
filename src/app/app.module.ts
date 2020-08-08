import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { DeviceSettingPageModule } from './members/device-management/modal/device-setting/device-setting.module';
import { DeviceImgPageModule } from './members/device-management/modal/device-img/device-img.module';
import { DeafultIconsPageModule } from './members/device-management/modal/deafult-icons/deafult-icons.module';
import '@fortawesome/fontawesome-free';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FCM} from '@ionic-native/fcm/ngx';

import { DeviceDetailsPageModule } from './members/dashboard/modal/device-details/device-details.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    IonBottomDrawerModule,
    DeviceSettingPageModule,
    DeviceImgPageModule,
    DeafultIconsPageModule,
    DeviceDetailsPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    FCM,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // app = angular.module('MyApp', ['ngMaterial'])
  // .config(function( $mdGestureProvider ) {
  //     $mdGestureProvider.skipClickHijack();
  // });

}
