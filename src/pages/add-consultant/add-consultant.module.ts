import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddConsultantPage } from './add-consultant';

@NgModule({
  declarations: [
    AddConsultantPage,
  ],
  imports: [
    IonicPageModule.forChild(AddConsultantPage),
  ],
})
export class AddConsultantPageModule {}
