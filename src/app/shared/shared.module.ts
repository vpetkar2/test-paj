import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [SideBarComponent]
})
export class SharedModule { }
