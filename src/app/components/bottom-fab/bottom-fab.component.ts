import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-bottom-fab',
  templateUrl: './bottom-fab.component.html',
  styleUrls: ['./bottom-fab.component.scss'],
})
export class BottomFabComponent implements OnInit {
  @Input() data: any = null;
  @Input() isAdmin: string = null;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  openPrivacyPolicy() {
    this.iab.create('https://start.finder-portal.com/privacy-policy', '_blank');
    console.log('InAppBrowser');
  }

  openImprint() {
    this.iab.create('https://start.finder-portal.com/imprint', '_blank');
    console.log('InAppBrowser');
  }

}
