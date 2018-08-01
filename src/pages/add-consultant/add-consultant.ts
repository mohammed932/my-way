import { GeneralProvider } from './../../providers/general/general';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { ConsultProvider } from '../../providers/consult/consult';

@IonicPage()
@Component({
  selector: 'page-add-consultant',
  templateUrl: 'add-consultant.html',
})
export class AddConsultantPage {
  data: any = {}
  waiting: boolean = false
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private event: Events,
    private generalService: GeneralProvider,
    private consultService: ConsultProvider,
    public navParams: NavParams) {
  }


  send() {
    this.waiting = true
    this.consultService.addConsult(this.data).subscribe(data => {
      if (data.success) {
        this.showAlert()
      } else {
        this.generalService.showError(data.errors)
      }
      this.waiting = false
    }, err => {
      this.waiting = false
    })
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'نجاح',
      subTitle: 'تم الارسال بنجاح',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.data = {}
            this.navCtrl.pop().then(() => {
              this.event.publish('add-consult:success')
            })
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
