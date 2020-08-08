import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import {_throw} from 'rxjs/observable/throw';
import { catchError, mergeMap } from 'rxjs/operators';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import {Constants} from '../constants.enum';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  loaderToShow: any;

  constructor(
    private storage: Storage,
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const promise = this.storage.get(Constants.TOKEN_KEY);

    // this.showLoader();
    return from(promise).pipe(
        mergeMap(token => {
            // this.hideLoader();
            const clonedReq = this.addToken(request, token);
            return next.handle(clonedReq).pipe(
                catchError(error => {
                    // Perhaps display an error for specific status codes here already?
                    const msg = error.error.error;
                    if (error.status === 429) {
                      console.log('too many requests');
                      return _throw(error);
                    }
                    if (error.status === 0 || error.status === 500) {
                      console.log('Internal server error or no internet connection');
                      return _throw(error);
                    }
                    // this.hideLoader();
                    console.log(error);
                    this.alertCtrl.create({
                        header: error.name,
                        message: msg,
                        buttons: ['OK']
                    }).then(alertEl => {
                      alertEl.present();
                    });
                    // Pass the error to the caller of the function
                    // this.hideLoader();
                    if (error.status === 401) {
                      this.storage.set(Constants.UPDATE_LOGIN, 1);
                      this.authenticationService.authenticationState.next(false);
                    }
                    return _throw(error);
                })
            );
        }));
}

// Adds the token to your headers if it exists
private addToken(request: HttpRequest<any>, token: any) {
    if (token) {
        let clone: HttpRequest<any>;
        clone = request.clone({
            setHeaders: {
                // Accept: `application/json`,
                // 'Content-Type': `application/json`,
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`
            }
        });
        return clone;
    }
    // this.hideLoader();
    return request;
    }

    showLoader() {
        this.loaderToShow = this.loadingController.create({
          message: 'Processing Server Request'
        }).then((res) => {
          res.present();
          res.onDidDismiss().then((dis) => {
            console.log('Loading dismissed!');
          });
        });
        this.hideLoader();
      }

    hideLoader() {
        this.loadingController.dismiss();
    }
}
