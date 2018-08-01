import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsulteDetailsPage } from './consulte-details';

@NgModule({
  declarations: [
    ConsulteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsulteDetailsPage),
  ],
})
export class ConsulteDetailsPageModule {}
