import { GeneralProvider } from './../../providers/general/general';
import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsPage {
  Ads: any
  pageCount
  displayLoading : boolean = true
  currentPage: any = 1
  constructor(public navCtrl: NavController,
    private adService: AdsProvider,
    private generalService: GeneralProvider,
    public navParams: NavParams) {
    this.getAds()
  }

  openPage(ad) {
    this.navCtrl.push('AdDetailsPage', { adDetails: ad })
  }


  getAds() {
    this.adService.getAds(this.currentPage).subscribe(data => {
      this.Ads = data.items
      this.pageCount = data._meta.pageCount
      this.displayLoading = false
    })
  }

  async doInfinite(scroll) {
    this.currentPage += 1
    if (this.currentPage <= this.pageCount) {
      this.adService.getAds(this.currentPage).subscribe(data => {
        this.Ads = this.Ads.concat(data.items)
        scroll.complete()
      }, err => {
        this.generalService.presentToast('حدث مشكله في الخادم حاول لاحقا !')
      })
    } else {
      scroll.complete()
    }
  }

}
