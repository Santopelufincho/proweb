import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PhoneinsPage } from '../../pages/phoneins/phoneins';
import firebase from 'firebase'; 
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
	
	public db: any;
	public devices: any;
	public phones: any;
	public tablets: any;
	public devicety = "";

	/*init() {
		const fbConf = {

    		apiKey: "AIzaSyDiYTNLdtwXyNCYOpcwDnqZIIB9G9EpixY",
    		authDomain: "proweb-7d432.firebaseapp.com",
    		databaseURL: "https://proweb-7d432.firebaseio.com",
    		projectId: "proweb-7d432",
    		storageBucket: "proweb-7d432.appspot.com",
    		messagingSenderId: "833461538093"
		};
		firebase.initializeApp(fbConf);

	}*/



  	constructor() {
		
  		this.db = firebase.database().ref('/');
		this.devices = firebase.database().ref('/Devices');
		this.phones = firebase.database().ref('/Devices/PHONES');
		this.tablets = firebase.database().ref('/Devices/TABLETS');
  	}
 }
