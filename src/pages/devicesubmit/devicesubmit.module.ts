import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicesubmitPage } from './devicesubmit';

@NgModule({
  declarations: [
    DevicesubmitPage,
  ],
  imports: [
    IonicPageModule.forChild(DevicesubmitPage),
  ],
  exports: [
    DevicesubmitPage
  ]
})
export class DevicesubmitPageModule {}
