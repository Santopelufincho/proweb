import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhoneinsPage } from '../phoneins/phoneins';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { InsurancepoliciesPage } from '../insurancepolicies/insurancepolicies';
import * as _ from 'lodash';

/**
 * Generated class for the DevicesubmitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-devicesubmit',
  templateUrl: 'devicesubmit.html',
  providers: [DataProvider]
})
export class DevicesubmitPage {

  public device = "";
  public deviceID = "";
  public phones: any;
  public tablets: any;
  public tabletList: string[] =[];
	public phoneList: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider, public angFire: AngularFireDatabase) {
     this.device = navParams.get('devicetype');
     this.deviceID = navParams.get('deviceID');
     console.log(this.deviceID); 
     console.log(this.device);
     this.phones = angFire.list('/Devices/PHONE/InsurancePolicy/');
     this.tablets = angFire.list('/Devices/TABLET/InsurancePolicy/');
  }

  public getDeviceType(){
    console.log(this.device);
  }

  public toSubmit(){
      this.navCtrl.push(InsurancepoliciesPage, {deviceID: this.deviceID, devicename: this.device})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesubmitPage');
  }

}
