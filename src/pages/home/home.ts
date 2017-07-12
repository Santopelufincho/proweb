import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DevinsPage } from '../devins/devins';
import { HousinsPage } from '../housins/housins';
import { PhoneinsPage } from '../phoneins/phoneins';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loadingCtrl: LoadingController, private aFauth: AngularFireAuth, public navCtrl: NavController, private view: ViewController, private toast: ToastController ) {

  }

  ionViewWillLoad(){

  }

  Logout(){

    this.navCtrl.setRoot(LoginPage);

    firebase.auth().signOut();

   }


  toPetPage(){

  		this.navCtrl.push(DevinsPage);

  }

  toHousePage(){
  		this.navCtrl.push(HousinsPage);
  }

  toPhonePage(){
  		this.navCtrl.push(PhoneinsPage);
  }

}
