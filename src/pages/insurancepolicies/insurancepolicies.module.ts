import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsurancepoliciesPage } from './insurancepolicies';

@NgModule({
  declarations: [
    InsurancepoliciesPage,
  ],
  imports: [
    IonicPageModule.forChild(InsurancepoliciesPage),
  ],
  exports: [
    InsurancepoliciesPage
  ]
})
export class InsurancepoliciesPageModule {}
