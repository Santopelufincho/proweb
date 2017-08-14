import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, data: DataProvider) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
