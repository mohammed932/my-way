import { GeneralProvider } from './../../providers/general/general';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'page-guide-details',
  templateUrl: 'guide-details.html',
})
export class GuideDetailsPage {
  guideDetails: any
  constructor(public navCtrl: NavController,
    private generalService: GeneralProvider,
    private iab: InAppBrowser,
    public navParams: NavParams) {
    this.guideDetails = this.navParams.get('guideDetails')
    console.log('this.guideDetails : ', this.guideDetails);
  }


  openFile(url) {
    this.iab.create(url)
  }


}
