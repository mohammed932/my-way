import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamWorkPage } from './team-work';

@NgModule({
  declarations: [
    TeamWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamWorkPage),
    ComponentsModule
  ],
})
export class TeamWorkPageModule { }
