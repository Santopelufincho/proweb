import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import firebase from 'firebase';
import { Pipe, PipeTransform } from '@angular/core';
import { DevicesubmitPage } from '../devicesubmit/devicesubmit';
import * as _ from 'lodash';

/**
 * Generated class for the PhoneinsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-phoneins',
  templateUrl: 'phoneins.html',
  providers: [DataProvider]
})
export class PhoneinsPage {


	public manufactureList: any[] =[];
	public devicetype: any;
	public devicename: "";	
	manufacture = "";
	versionname = "";
	phoneop = false;
	tabletop = false; 
	//public input = document.getElementById("chicken").getElementsByTagName('h3')[0];

	 
	public devices:FirebaseListObservable<any>;
	public phones:FirebaseListObservable<any>;
	public tablets:FirebaseListObservable<any>;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFireDatabase, public data :DataProvider ) {
		this.devicetype = firebase.database().ref('/Devices/PHONE/Information');
  		this.devices = angFire.list('/Devices');
  		this.phones = angFire.list('/Devices/PHONE/Information/');
  		this.tablets = angFire.list('/Devices/TABLET/Information/');
		

	}


	tosubmit(version: string){
		this.navCtrl.push(DevicesubmitPage);
		version = this.devicename;
		console.log(version);
	}

	getPhoneVersion(version: string)
	{
		//phone = this.devicename;
		console.log(version);
	}

  	test() {
  		var getmeversion = this.devicetype.child('PSAMJ7');
  		console.log(getmeversion.once('value'));
  	}

  	phoneoption() {
  		this.phoneop = true;
  		this.tabletop = false;
  	}

  	tabletoption() {
  		this.tabletop = true;
  		this.phoneop = false;
  	}

  deviceoptionchange(option: string) {
  	console.log("option" + option);
  	if (option == "phone")
  	{
  		this.phoneoption();
		this.tablets = this.angFire.list('/Devices/TABLET/Information', {
			query: {
				orderByChild: 'manufacturer',
				equalTo: null
			}
		});
  	}
  	else if ( option == "tablet"){
  		this.tabletoption();
		this.phones = this.angFire.list('/Devices/PHONE/Information', {
			query: {
				orderByChild: 'manufacturer',
				equalTo: null
			}
		});
  	}
  	else {
  		this.phoneop = false;
		this.tabletop = false; 
    }


  }

   pickManufac(manufac: string) {
   	console.log("I have been triggered");
   	if (this.tabletop == false && this.phoneop == true) {
   		console.log(this.tabletop);
   		console.log(this.phoneop);
  			this.phones = this.angFire.list('/Devices/PHONE/Information', {

  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: manufac
  				}	
  			});
			this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: null
  				}	
  			});

  		}
  	else if (this.tabletop == true && this.phoneop == false) {
  		console.log(this.tabletop);
  		console.log(this.phoneop);
  		this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: manufac, 
  				}	
  			});
		this.phones = this.angFire.list('/Devices/PHONE/Information', {

  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: null, 
  				}	
  			});

  	}
  	else {

  		console.log(this.tabletop);
  		console.log(this.phoneop);

  		this.devices = this.angFire.list('Devices');
  	}

  }

     pickVersion(version: string) {

  	   	if (this.tabletop == false && this.phoneop == true) {
  	   		console.log(this.tabletop);
  			console.log(this.phoneop);

  			this.phones = this.angFire.list('/Devices/PHONE/Information', {

  				query: {
  					orderByChild: 'version', 
  					equalTo: version, 
  				}	
  			}); 
			this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'version', 
  					equalTo: null, 
  				}	
  			});
  		}
  		else if (this.tabletop == true && this.phoneop == false) {
  			console.log(this.tabletop);
  			console.log(this.phoneop);

  			this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'version', 
  					equalTo: version, 
  				}	
  			});
			
			this.phones = this.angFire.list('/Devices/PHONE/Information', {

  				query: {
  					orderByChild: 'version', 
  					equalTo: null, 
  				}	
  			});

  		}
  		else {
  			console.log(this.tabletop);
  			console.log(this.phoneop);

  			this.devices = this.angFire.list('Devices');
  		}
  	}



  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneinsPage');
  }

}
