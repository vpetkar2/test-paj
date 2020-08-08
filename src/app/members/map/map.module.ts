import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapPage } from './map.page';
import { BottomFabComponent } from 'src/app/components/bottom-fab/bottom-fab.component';
import { TooltipsModule } from 'ionic-tooltips';
import { BottomDrawerComponent } from 'src/app/components/bottom-drawer/bottom-drawer.component';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { InfoComponent } from './info/info.component';
import { RouteComponent } from './route/route.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  },
  {
    path: 'device-list',
    component: DeviceListComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TooltipsModule,
    IonBottomDrawerModule,
    MatExpansionModule,
  ],
  declarations: [
    MapPage,
    BottomFabComponent,
    BottomDrawerComponent,
    DeviceListComponent,
    InfoComponent,
    AlertComponent,
    RouteComponent
  ],
  entryComponents: [
    DeviceListComponent,
    InfoComponent,
    RouteComponent,
    AlertComponent
  ]
})
export class MapPageModule {}
