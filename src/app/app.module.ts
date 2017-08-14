import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NotifyPage } from '../pages/notify/notify';
import { LoginPage } from '../pages/login/login';
import { DevinsPage } from '../pages/devins/devins';
import { PhoneinsPage } from '../pages/phoneins/phoneins';
import { HousinsPage } from '../pages/housins/housins';
import { RegisterPage } from '../pages/register/register';
import { DevicesubmitPage } from '../pages/devicesubmit/devicesubmit';
import { InsurancepoliciesPage } from '../pages/insurancepolicies/insurancepolicies';

import * as firebase from 'firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { Facebook } from '@ionic-native/facebook'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';


export const firebaseConfig = {
    apiKey: "AIzaSyDiYTNLdtwXyNCYOpcwDnqZIIB9G9EpixY",
    authDomain: "proweb-7d432.firebaseapp.com",
    databaseURL: "https://proweb-7d432.firebaseio.com",
    projectId: "proweb-7d432",
    storageBucket: "proweb-7d432.appspot.com",
    messagingSenderId: "833461538093"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NotifyPage,
    LoginPage,
    DevinsPage,
    PhoneinsPage,
    HousinsPage,
    RegisterPage,
    DevicesubmitPage,
    InsurancepoliciesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    NotifyPage,
    DevinsPage,
    PhoneinsPage,
    HousinsPage,
    RegisterPage,
    DevicesubmitPage,
    InsurancepoliciesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule { }
