import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-ad-details',
  templateUrl: 'ad-details.html',
})
export class AdDetailsPage {
  adDetails : any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.adDetails = this.navParams.get('adDetails')
  }



}
