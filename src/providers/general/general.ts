import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ToastController, AlertController } from 'ionic-angular';


@Injectable()
export class GeneralProvider {

  constructor(public http: HttpClient,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {
    console.log('Hello GeneralProvider Provider');
  }

  formatDate(date) {
    return moment.unix(date).format("YYYY/MM/DD");
  }


  showAlert(text) {
    this.alertCtrl.create({
      title: 'خطأ',
      subTitle: text,
      buttons: ['موافق']
    }).present();
  }

  showError(errors) {
    let text = ""
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        console.log(key + " -> " + errors[key])
        text += errors[key] + "<br><br>"
      }
    }
    this.showAlert(text)
  }


  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
