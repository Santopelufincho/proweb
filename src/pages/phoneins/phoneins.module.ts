import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneinsPage } from './phoneins';

@NgModule({
  declarations: [
    PhoneinsPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneinsPage),
  ],
  exports: [
    PhoneinsPage
  ]
})
export class PhoneinsPageModule {}
