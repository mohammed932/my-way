import { GeneralProvider } from './../../providers/general/general';
import { ConsultProvider } from './../../providers/consult/consult';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consulting',
  templateUrl: 'consulting.html',
})
export class ConsultingPage {
  Consults: any
  pageCount
  displayLoading : boolean = true
  currentPage: any = 1
  constructor(public navCtrl: NavController,
    private consultService: ConsultProvider,
    private generalService: GeneralProvider,
    private event: Events,
    public navParams: NavParams) {
    this.getConsults()
  }

  openPage(cons) {
    this.navCtrl.push('ConsulteDetailsPage', { consultDetails: cons })
  }

  add(cons) {
    this.navCtrl.push('AddConsultantPage')
  }

  getConsults() {
    this.consultService.getConsults(this.currentPage).subscribe(data => {
      console.log("daata : ", data)
      this.Consults = data.items
      this.pageCount = data._meta.pageCount
      this.displayLoading = false
    })
  }


  checkEvents() {
    this.event.subscribe('add-consult:success', () => {
      this.getConsults()
    })
  }

  async doInfinite(scroll) {
    this.currentPage += 1
    if (this.currentPage <= this.pageCount) {
      this.consultService.getConsults(this.currentPage).subscribe(data => {
        this.Consults = this.Consults.concat(data.items)
        scroll.complete()
      }, err => {
        this.generalService.presentToast('حدث مشكله في الخادم حاول لاحقا !')
      })
    } else {
      scroll.complete()
    }
  }

}
