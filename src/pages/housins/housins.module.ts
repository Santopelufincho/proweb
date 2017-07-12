import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousinsPage } from './housins';

@NgModule({
  declarations: [
    HousinsPage,
  ],
  imports: [
    IonicPageModule.forChild(HousinsPage),
  ],
  exports: [
    HousinsPage
  ]
})
export class HousinsPageModule {}
