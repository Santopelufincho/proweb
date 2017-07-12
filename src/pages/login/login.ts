import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';

import { NotifyPage } from '../notify/notify';
import { RegisterPage } from '../register/register'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public alertCtrl: AlertController, public facebook: Facebook, private aFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }


  fblogin(){

      this.facebook.login(['email']).then(res=>{

        const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
        firebase.auth().signInWithCredential(fc).then(fs=>{
          alert("firebase sec")
        }).catch(ferr=>{
          alert("firebase error")
        })

      }).catch(err=>{
          alert(JSON.stringify(err))
      })

  }


  async nextPage(user: User) {

  	let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5
   });
   loader.present();
    try {

        const result = await this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password);
        if (result){
          this.navCtrl.push(NotifyPage);
        } 
    }
    catch(e){ 

      console.log(e); 
      let alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Invalid Username or Password',
            buttons: ['OK']
            });
            alert.present();

    }

  }

  ToRegisterPage() {

    this.navCtrl.push(RegisterPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
