import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-deafult-icons',
  templateUrl: './deafult-icons.page.html',
  styleUrls: ['./deafult-icons.page.scss'],
})
export class DeafultIconsPage implements OnInit {

  constructor( public modelCtrl: ModalController) { }
  deafult_icon: any = [
    //v
    'v2_grandma',
    'v2_antique_car',
    'v2_antique_car_2',
    'v2_antique_car_3',
    'v2_bag',
    'v2_boat',
    'v2_boat_2',
    'v2_boat_3',
    'v2_boat_4',
    'v2_car',
    'v2_car_2',
    'v2_car_3',
    'v2_car_4',
    'v2_car_5',
    'v2_cat',
    'v2_cat_2',
    'v2_cat_3',
    'v2_cat_4',
    'v2_cat_5',
    'v2_cat_6',
    'v2_cat_7',
    'v2_dog',
    'v2_dog_2',
    'v2_dog_3',
    'v2_dog_4',
    'v2_dog_5',
    'v2_dog_6',
    'v2_dog_7',
    'v2_dog_8',
    'v2_dog_9',
    'v2_excavator',
    'v2_excavator_2',
    'v2_jetski',
    'v2_motorcycle',
    'v2_motorcycle_2',
    'v2_motorcycle_3',
    'v2_motorcycle_4',
    'v2_motorcycle_5',
    'v2_motorcycle_6',
    'v2_quad',
    'v2_quad_2',
    'v2_truck',
    'v2_truck_2',
    'v2_truck_3',
    'v2_truck_4',
    'paj_iconset_auto',
    'paj_iconset_auto1', 
    'paj_iconset_auto2', 
    'paj_iconset_auto3', 
    'paj_iconset_auto4', 
    'paj_iconset_auto5',
    'paj_iconset_auto6', 
    'paj_iconset_auto7', 
    'paj_iconset_auto8', 
    'paj_iconset_auto9', 
    'paj_iconset_auto10',
    'paj_iconset_lkw1', 
    'paj_iconset_lkw2', 
    'paj_iconset_lkw3',
    'paj_iconset_lkw4',
    'paj_iconset_lkw5',
    'paj_iconset_motorrad', 
    'paj_iconset_personen',
    'paj_iconset_baumaschinen1', 
    'paj_iconset_baumaschinen2', 
    'paj_iconset_baumaschinen3',
    'paj_iconset_camping1',
    'paj_iconset_camping2',
    'paj_iconset_landwirtschaft1',
];
addNumber() {
  for (let i = 1; i <= 100; i++) {
    this.deafult_icon.push('paj_iconset_' + i);
  }

}
  ngOnInit() {
    this.addNumber();
  }
  async dismiss(icon=null) {
    await this.modelCtrl.dismiss({
      dismissed: true,
      iconname: icon,
    });
  }
}
