import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotifyPage } from './notify';

import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    NotifyPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifyPage),
  ],
  exports: [
    NotifyPage
  ]
})
export class NotifyPageModule {}
