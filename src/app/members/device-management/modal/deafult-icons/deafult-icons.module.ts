import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeafultIconsPage } from './deafult-icons.page';

const routes: Routes = [
  {
    path: '',
    component: DeafultIconsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeafultIconsPage]
})
export class DeafultIconsPageModule {}
