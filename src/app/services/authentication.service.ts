import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpEventType} from '@angular/common/http';
import {Constants} from '../constants.enum';
import { PolylinePoints, DevicePosition } from '../geo-json-template';
import axios from 'axios';


const TOKEN_KEY = 'auth-token';
const IS_ADMIN = 'isAdmin';
interface ImageName {
  iconcustomimage: any;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
  platform = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    public httpClient: HttpClient,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {

    this.storage.get(Constants.TOKEN_KEY).then(res => {
      // console.log('auth key');
      // console.log(res);
      if (res) {
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
      this.platform.next(true);
    });
  }

  async login(email: string, password: string) {
    // const headers = new HttpHeaders({
    //   'Content-Type':  'application/json',
    //   'Access-Control-Allow-Methods': 'GET, POST',
    //   'Access-Control-Allow-Origin': '*'
    // });
    // const requestOptions = new HttpRequest("POST",'http://192.168.178.42/api/login',{ headers: headers });
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();
    const postData = {
      email,
      password
    };
    this.httpClient.post(Constants.ROUTE + '/api/login',
      postData).subscribe(data => {
      this.authenticationState.next(true);
      // console.log(IS_ADMIN);
      // tslint:disable-next-line: no-string-literal
      this.storage.set(Constants.TOKEN_KEY, data['success']['token']);
      // tslint:disable-next-line: no-string-literal
      this.storage.set(Constants.IS_ADMIN, data['success']['isAdmin']);
      // tslint:disable-next-line: no-string-literal
      this.storage.set(Constants.USER_ID, data['success']['userID']);
      this.storage.set(Constants.ROUTE_ICON, data['success']['routeIcon']);
      console.log(data);
      return data;
     }, error => {
      console.log(error);
      this.authenticationState.next(false);
      return null;
    });
    loading.dismiss();
  }

  async registerFBToken(token) {
    const postData = {
      fbtoken: token
    };
    // console.log(postData);
    return await this.httpClient.post(Constants.ROUTE + '/api/fcm/register', postData).toPromise()
    .then(res => {
      console.log(res);
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  // async createNotification() {
  //   const postData = {
  //     "iddevice": 6622,
  //     "icon": "testIcon",
  //     "meldungtyp": 1,
  //     "lat": 55,
  //     "lng": 7,
  //     "isread": 0,
  //     "radiusin":0,
  //     "radiusout": 0,
  //     "zuendon":0,
  //     "zuendoff":0,
  //     "push":0   
  //   };
  //   // console.log(postData);
  //   return await this.httpClient.post(Constants.ROUTE + '/api/notification', postData).toPromise()
  //   .then(res => {
  //     console.log(res);
  //     return res;
  //   }).catch (error => {
  //     console.log(error);
  //     return null;
  //   });
  // }

  async getDevices() {
    return await this.httpClient.get(Constants.ROUTE + '/api/device').toPromise()
    .then(res => {
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  async getDevicesModel(listofIDs) {
    const postData = {
      model_nrs: listofIDs
    };
    // console.log(postData);
    return await this.httpClient.post(Constants.ROUTE + '/api/deviceModel', postData).toPromise()
    .then(res => {
      // console.log(res);
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  async getGeoFences(listofIDs) {
    const postData = {
      deviceIDs: listofIDs
    };
    // console.log(postData);
    return await this.httpClient.post(Constants.ROUTE + '/api/geofences', postData).toPromise()
    .then(res => {
      // console.log(res);
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  async getDevicePoints(deviceID: number, type: any, dateStart: any, dateEnd: any, lastMinutes: any, lastPoints: any) {
    let getData = null;
    let url = '/api/trackerdata/' + deviceID;
    switch (type) {
      case 0: { // Last Minutes
         getData = {
           lastMinutes: lastMinutes.toString()
         };
         url = url + '/last_minutes';
         break;
      }
      case 1: { // last Points
        getData = {
          lastPoints: lastPoints.toString()
        };
        url = url + '/last_points';
        break;
      }
      case 4: { // date range
        getData = {
          dateStart: dateStart.toString(),
          dateEnd: dateEnd.toString()
        };
        url = url + '/date_range';
        break;
      }
    }
    // console.log(getData);
    return this.httpClient.get(Constants.ROUTE + url, {params: getData}).toPromise()
    .then(res => {
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
      // this.authenticationState.next(true);
      // this.storage.set(TOKEN_KEY, data["success"]["token"]);
    //   this.alertCtrl.create({
    //     header: 'User',
    //     message: 'User updated successfully',
    //     buttons: ['OK']
    // }).then(alertEl => {
    //   alertEl.present();
    // });
  }


  async updateUserInfo(firstname: string, lastname: string, email: string, UserID: number) {
    const putData = {
      firstname,
      email,
      lastname,
    };
    return this.httpClient.put(Constants.ROUTE + '/api/customer/' + UserID, putData).subscribe(data => {
      // this.authenticationState.next(true);
      // this.storage.set(TOKEN_KEY, data["success"]["token"]);
      this.alertCtrl.create({
        header: 'User',
        message: 'User updated successfully',
        buttons: ['OK']
    }).then(alertEl => {
      alertEl.present();
    });
      return data;
   }, error => {
    console.log(error);
    return null;
  });
  }


  async getUserInfo(UserID: number) {
    return await this.httpClient.get(Constants.ROUTE + '/api/customer/' + UserID).toPromise()
    .then(res => {
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  async getStreetAdrress(lat, lng) {
    // return await this.httpClient.get('https://global-geo1.paj-gps.de/geocode/reverse?lan='
    //                                   + lat + '&lon=' + lng + '&format=jsonv2').toPromise()
    return await this.httpClient.get(Constants.ROUTE + '/api/streetAddress?lat=' + lat + '&lon=' + lng).toPromise()
    .then(res => {
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }


  register(name: string, email: string, password: string) {
    const postData = {
      name,
      email,
      password,
      c_password: password,
    };
    this.httpClient.post(Constants.ROUTE + '/api/customer',
      postData).subscribe(data => {
        // this.authenticationState.next(true);
        // this.storage.set(TOKEN_KEY, data["success"]["token"]);
        this.alertCtrl.create({
          header: 'User',
          message: 'User created successfully',
          buttons: ['OK']
      }).then(alertEl => {
        alertEl.present();
      });
        return data;
     }, error => {
      console.log(error);
      return null;
    });
  }

  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = a[key] // (typeof a[key] === 'number')
        // ? a[key].toUpperCase() : a[key];
      const varB = b[key] // (typeof b[key] === 'number')
        // ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  createDevice() {
    const postData = 'test';
    return this.httpClient.post(Constants.ROUTE + '/api/device', postData).subscribe(data => {
      console.log(data);
      return data;
   }, error => {
    console.log(error);
    return null;
  });
  }

  updateDevicePosition(devices: any) {
    const deviceArray: DevicePosition[] = [];
    let index = 0;
    devices.forEach(device => {
      const devicePosObj = new DevicePosition();
      devicePosObj.id = device.id;
      devicePosObj.devicepos = index;
      index = index + 1;
      deviceArray.push(devicePosObj);
    });
    deviceArray.sort(this.compareValues('id'));
    const putData = {
      deviceArray
    };
    console.log(deviceArray);
    return this.httpClient.post(Constants.ROUTE + '/api/device/devicepositions', deviceArray).subscribe(data => {
      console.log(data);
      return data;
   }, error => {
    console.log(error);
    return null;
  });
  }

  async createGeofence(deviceID: number, type: number, options: string, coordinates: any) {
    const postData = {
      shape_type: type,
      coordinates,
      options
    };
    // console.log(postData);
    return await this.httpClient.post(Constants.ROUTE + '/api/geofence/' + deviceID, postData).toPromise()
    .then(res => {
      // console.log(res);
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  async updateGeofence(geofenceID: number, deviceID: number, coordinates: any, type: number, options: string) {
    const putData = {
      shape_type: type,
      coordinates,
      options
    };
    return this.httpClient.put(Constants.ROUTE + '/api/geofence/' + deviceID + '/' + geofenceID, putData).subscribe(data => {
    return data;
   }, error => {
    console.log(error);
    return null;
  });
  }
  
  async deleteGeofence(geofenceID: number, deviceID: number,) {
    return this.httpClient.delete(Constants.ROUTE + '/api/geofence/' + deviceID + '/' + geofenceID).subscribe(data => {
    return data;
   }, error => {
    console.log(error);
    return null;
  });
  }

  updateDeviceShow(deviceID: number, status: number) {
    const putData = {
      deviceshow : status
    };
    return this.httpClient.put(Constants.ROUTE + '/api/device/' + deviceID, putData).subscribe(data => {
    return data;
   }, error => {
    console.log(error);
    return null;
    });
  }

  updateRadiusInfo(deviceID: number, radiusInMeters: number, radiusLat: number, radiusLng: number) {
    const radiusInM = radiusInMeters.toFixed(2);
    console.log(radiusInM);
    const putData = {
      radius_meter : radiusInM,
      radius_lat: radiusLat,
      radius_lng: radiusLng
    };
    return this.httpClient.put(Constants.ROUTE + '/api/device/' + deviceID, putData).subscribe(data => {
    return data;
   }, error => {
    console.log(error);
    return null;
    });
  }

  updateDeviceAlarms(deviceID: number, alarmName: string, alarmValue: number) {
    const key = alarmName;
    const putData = {};
    putData[key] = alarmValue;
    console.log(putData);
    return this.httpClient.put(Constants.ROUTE + '/api/device/' + deviceID, putData).toPromise()
    .then(res => {
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  updateSpurInfo(
    deviceID: number,
    selectedTab: number,
    startDate: number,
    endDate: number,
    lastMinutes: number,
    lastPoints: number) {
    const putData = {
      spurdatum : startDate,
      spurmodus : selectedTab,
      spurdatumbis : endDate,
      spurminuten : lastMinutes,
      spurpunkte : lastPoints
    };
    console.log(putData);
    return this.httpClient.put(Constants.ROUTE + '/api/device/' + deviceID, putData).toPromise().then(res => {
      // console.log(res);
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  renderPolyline(polylinePoints: PolylinePoints[]) {
    const postData = {
      shape : polylinePoints,
    };
    return this.httpClient.post(Constants.ROUTE + '/api/renderPoints',
      postData).toPromise().then(res => {
        // console.log(res);
        return res;
      }).catch (error => {
        console.log(error);
        return null;
      });

  }

  async updateUserMapSetting(route_icons: string,
    distance_unit: string,
    map: string,
    show_kmanzeige: number,
    snap_to_road: number,
    pauses: number
    ) {
    const putData = {
      route_icons,
      distance_unit,
      map,
      show_kmanzeige,
      snap_to_road,
      pauses
    };
    return this.httpClient.put(Constants.ROUTE + '/api/customers/map-settting', putData).subscribe(data => {
      console.log(data);
      // this.authenticationState.next(true);
      // this.storage.set(TOKEN_KEY, data["success"]["token"]);
      this.alertCtrl.create({
        header: 'User',
        message: 'User updated successfully',
        buttons: ['OK']
    }).then(alertEl => {
      alertEl.present();
    });
      return data;
   }, error => {
    console.log(error);
    return null;
  });
  }

  async getNotifications() {
    return await this.httpClient.get(Constants.ROUTE + '/api/notifications').toPromise()
    .then(res => {
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }

  async updateDeviceMapSetting(
    id: number,
    name: string,
    spurfarbe: string,
    iconname: string,
    iconusecustom: number,
    device_viewlink: number,
    ) {
    const putData = {
      id,
      name,
      spurfarbe,
      iconname,
      iconusecustom,
      device_viewlink,
    };
    return this.httpClient.put(Constants.ROUTE + '/api/device/' + id, putData).subscribe(data => {
      console.log('josh',data);
      return data;
     }, error => {
      console.log(error);
      return null;
    });
  //   return this.httpClient.put(Constants.ROUTE + '/api/device/' + id, putData).subscribe(data => {
  //     console.log(data);
  //     this.alertCtrl.create({
  //       header: 'User',
  //       message: 'User updated successfully',
  //       buttons: ['OK']
  //   }).then(alertEl => {
  //     alertEl.present();
  //   });
  //     return data;
  //  }, error => {
  //   console.log(error);
  //   return null;
  // });
  }

  updateDeviceCustImage( device_id: any, isCustom: any, deafultImgName: any , fileToUpload: File ) {

    const fd = new FormData();
    const header = new HttpHeaders();
    if (fileToUpload != null && isCustom) {
      console.log('1');
      header.append('Content-Type', 'multipart/form-data');
      header.append('Accept', 'application/json');
      fd.append('uploadedFile', fileToUpload,  fileToUpload.name);
    } else if (deafultImgName && !isCustom) {
      console.log('2');
      fd.append('iconname', deafultImgName);
    }
    fd.append('iconusecustom', isCustom);
    fd.append('device_id', device_id);
    // console.log(fd.get('uploadedFile'));
    return  this.httpClient.post<ImageName>(Constants.ROUTE + '/api/device-custom-img/', fd, {
      headers: header,
      reportProgress: true,
      observe: 'events'
      })
      .toPromise().then(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log('sssssaaa',event);
        return event;
      }
    });
  }
  getDashboard(){
    return this.httpClient.get(Constants.ROUTE + '/api/customer/dashboard').toPromise()
    .then(res => {
      console.log(res);
      return res;
    }).catch (error => {
      console.log(error);
      return null;
    });
  }
  logout() {
    this.storage.set(Constants.UPDATE_MAP, 1);
    this.storage.set(Constants.UPDATE_LOGIN, 1);
    return this.storage.remove(Constants.TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
