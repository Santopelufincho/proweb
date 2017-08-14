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

	public tabletList: string[] =[];
	public phoneList: string[] = [];
	public devicetype: any;
	public devicename: any;	
	public deviceID: any;
	manufacture = "";
	versionname = "";
	phoneop = false;
	tabletop = false; 
	//public input = document.getElementById("chicken").getElementsByTagName('h3')[0];

	public phonesnap: any;  
	public tabletsnap: any;
	public devices:FirebaseListObservable<any>;
	public phones:FirebaseListObservable<any>;
	public tablets:FirebaseListObservable<any>;
	

  	constructor(public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFireDatabase, public data :DataProvider) {
		this.devicetype = firebase.database().ref('/Devices/PHONE/Information');
  		this.phones = angFire.list('/Devices/PHONE/Information/');
		this.tablets = angFire.list('/Devices/TABLET/Information/');
		
		
		this.tabletsnap = angFire.list('/Devices/TABLET/Information/', { preserveSnapshot: true })
			.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
				
					this.tabletList.push(snapshot.child('version').val());
        		});
   			})

		this.phonesnap = angFire.list('/Devices/PHONE/Information/', { preserveSnapshot: true })
		.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
					  
					  this.phoneList.push(snapshot.child('version').val());
        		});
   		})

		/*this.angFire.list('/Devices/PHONE/Information', { preserveSnapshot: true})
    		.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
          			console.log(snapshot.key, snapshot.child('version').val());
        });
    })*/

	}
	
	toSubmission(e)
	{
		var version = e.target.getAttribute('value');
		console.log(version);
		this.devicename = version;
  		this.phonesnap = this.angFire.list('/Devices/PHONE/Information', {
			preserveSnapshot:true,
  			query: {
  				orderByChild: 'version', 
  				equalTo: version
  			}	
		})
    		.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
					  console.log(snapshot.key)
						if (snapshot.key != null) {
							this.deviceID = snapshot.key;
							this.navCtrl.push(DevicesubmitPage, {devicetype: this.devicename, deviceID: this.deviceID});
						}
        		});
			})

		this.tabletsnap = this.angFire.list('/Devices/TABLET/Information', {
			preserveSnapshot:true,
  			query: {
  				orderByChild: 'version', 
  				equalTo: version
  			}	
		})
    		.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
					  console.log(snapshot.key)
						if (snapshot.key != null) {
							this.deviceID = snapshot.key;
							this.navCtrl.push(DevicesubmitPage, {devicetype: this.devicename, deviceID: this.deviceID});
						}
        		});
			})
			
		
		
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
		this.tabletList = [];
		this.phoneList = [];
  		this.phoneoption();
		this.tablets = this.angFire.list('/Devices/TABLET/Information',  { 
			preserveSnapshot: true,
			query: {
				orderByChild: 'manufacturer',
				equalTo: null
			}
		})
		
		this.angFire.list('/Devices/PHONE/Information', { preserveSnapshot: true })
    		.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
					  console.log(snapshot.key, snapshot.child('version').val());
					  this.phoneList.push(snapshot.child('version').val());
        	});
    	})
	}
  	else if ( option == "tablet"){
		this.tabletList = [];
		this.phoneList = [];
  		this.tabletoption();
		this.phones = this.angFire.list('/Devices/PHONE/Information', {
			query: {
				orderByChild: 'manufacturer',
				equalTo: null
			}
		});
		this.angFire.list('/Devices/TABLET/Information', { preserveSnapshot: true })
    		.subscribe(snapshots=>{
        		snapshots.forEach(snapshot => {
					  console.log(snapshot.key, snapshot.child('version').val());
					  this.tabletList.push(snapshot.child('version').val());
        	});
    	})
  	}
  	else {
  		this.phoneop = false;
		this.tabletop = false; 
    }


  }

   pickManufac(manufac: string) {
   	if (this.tabletop == false && this.phoneop == true) {
		
		this.tabletList = [];
		this.phoneList = [];
   		console.log(this.tabletop);
		console.log(this.phoneop);
		    this.phones = this.angFire.list('/Devices/PHONE/Information', {
  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: manufac
  				}	
			});

  			this.phonesnap = this.angFire.list('/Devices/PHONE/Information', {
				preserveSnapshot:true,
  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: manufac
  				}	
			})
    			.subscribe(snapshots=>{
        			snapshots.forEach(snapshot => {
						  console.log(snapshot.key, snapshot.child('version').val());
						  this.phoneList.push(snapshot.child('version').val());
        			});
				})
				
			this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: null
  				}	
  			});

  		}
  	else if (this.tabletop == true && this.phoneop == false) {
		this.tabletList = [];
		this.phoneList = [];
  		console.log(this.tabletop);
  		console.log(this.phoneop);
  		this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'manufacturer', 
  					equalTo: manufac, 
  				}	
			  });
  		this.tabletsnap = this.angFire.list('/Devices/TABLET/Information', {
			preserveSnapshot:true,
  			query: {
  					orderByChild: 'manufacturer', 
  					equalTo: manufac
  				}	
			})
    			.subscribe(snapshots=>{
        			snapshots.forEach(snapshot => {
						  console.log(snapshot.key, snapshot.child('version').val());
						  this.tabletList.push(snapshot.child('version').val());
        			});
				})
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
			this.tabletList = [];
			this.phoneList = [];

  			this.phones = this.angFire.list('/Devices/PHONE/Information', {

  				query: {
  					orderByChild: 'version', 
  					equalTo: version, 
  				}	
			  }); 
			
			this.phonesnap = this.angFire.list('/Devices/PHONE/Information', {
				preserveSnapshot:true,
  				query: {
  					orderByChild: 'version', 
  					equalTo: version
  				}	
			})
    			.subscribe(snapshots=>{
        			snapshots.forEach(snapshot => {
						  console.log(snapshot.key, snapshot.child('version').val());
						  this.phoneList.push(snapshot.child('version').val());
        			});
				})
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
			this.tabletList = [];
			this.phoneList = [];

  			this.tablets = this.angFire.list('/Devices/TABLET/Information', {

  				query: {
  					orderByChild: 'version', 
  					equalTo: version, 
  				}	
			  });
			
			this.tabletsnap = this.angFire.list('/Devices/TABLET/Information', {
				preserveSnapshot:true,
  				query: {
  					orderByChild: 'version', 
  					equalTo: version
  				}	
			})
    			.subscribe(snapshots=>{
        			snapshots.forEach(snapshot => {
						  console.log(snapshot.key, snapshot.child('version').val());
						  this.tabletList.push(snapshot.child('version').val());
        			});
				})
			
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
