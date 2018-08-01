import { GeneralProvider } from './../../providers/general/general';
import { GuideProvider } from './../../providers/guide/guide';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-difficulties-guide',
  templateUrl: 'difficulties-guide.html',
})
export class DifficultiesGuidePage {
  Guides: any
  displayLoading: boolean = true
  constructor(public navCtrl: NavController,
    private guideService: GuideProvider,
    private generalService : GeneralProvider,
    public navParams: NavParams) {
    this.getGuides()
  }

  openPage(guide) {
    this.navCtrl.push('GuideDetailsPage', { guideDetails: guide })
  }

  getGuides() {
    this.guideService.getGuides().subscribe(data => {
      this.Guides = data.items
      this.displayLoading = false
    })
  }

  
}
