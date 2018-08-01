import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private emailComposer: EmailComposer,
    private iab: InAppBrowser,
    public navParams: NavParams) {
  }

  openPage(page) {
    this.navCtrl.push(page)
  }

  openUrl(url) {
    console.log('url : ', url);
    this.iab.create(`${url}/Tolearnmfm`)
  }

  openEmail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

    let email = {
      to: 'Info@tolearnmfm.com',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

}
