import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhoneinsPage } from '../phoneins/phoneins';
import { DataProvider } from '../../providers/data/data';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider) {
     console.log(data.devicety);
  }

  public getDeviceType(){
    console.log(this.device);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesubmitPage');
  }

}
