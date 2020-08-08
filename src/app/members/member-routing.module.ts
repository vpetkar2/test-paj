import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  // { path: 'map', canActivate: [AuthGuard], loadChildren: './members/map/map.module#MapPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'device-management', loadChildren: './device-management/device-management.module#DeviceManagementPageModule' },
  { path: 'deafult-icons', loadChildren: './device-management/modal/deafult-icons/deafult-icons.module#DeafultIconsPageModule' },
  { path: 'device-img', loadChildren: './device-management/modal/device-img/device-img.module#DeviceImgPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'device-details', loadChildren: './dashboard/modal/device-details/device-details.module#DeviceDetailsPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
