import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { DeviceSettingPageModule } from './modal/device-setting/device-setting.module';
import { DeviceManagementPage } from './device-management.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DeviceManagementPage
  }
];

@NgModule({
  imports: [
    // DeviceSettingPageModule,
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceManagementPage]
})
export class DeviceManagementPageModule {}
