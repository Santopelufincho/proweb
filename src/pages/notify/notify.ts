import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

    exitDash() {

  	this.navCtrl.setRoot(HomePage); 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
  }

}
