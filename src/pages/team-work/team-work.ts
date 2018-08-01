import { GeneralProvider } from './../../providers/general/general';
import { TeamProvider } from './../../providers/team/team';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-team-work',
  templateUrl: 'team-work.html',
})
export class TeamWorkPage {
  Teams: any
  pageCount: any
  currentPage: number = 1;
  displayLoading: boolean = true
  constructor(public navCtrl: NavController,
    private teamService: TeamProvider,
    private generalService: GeneralProvider,
    public navParams: NavParams) {
    this.getTeams()
  }


  getTeams() {
    this.teamService.getTeams(this.currentPage).subscribe(data => {
      this.Teams = data.items
      this.pageCount = data._meta.pageCount
      this.displayLoading = false
    })
  }


  async doInfinite(scroll) {
    this.currentPage += 1
    if (this.currentPage <= this.pageCount) {
      this.teamService.getTeams(this.currentPage).subscribe(data => {
        this.Teams = this.Teams.concat(data.items)
        scroll.complete()
      }, err => {
        this.generalService.presentToast('حدث مشكله في الخادم حاول لاحقا !')
      })
    } else {
      scroll.complete()
    }
  }

}
