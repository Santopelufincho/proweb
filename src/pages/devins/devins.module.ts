import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevinsPage } from './devins';

@NgModule({
  declarations: [
    DevinsPage,
  ],
  imports: [
    IonicPageModule.forChild(DevinsPage),
  ],
  exports: [
    DevinsPage
  ]
})
export class DevinsPageModule {}
