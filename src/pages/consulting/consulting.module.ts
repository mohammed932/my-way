import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultingPage } from './consulting';

@NgModule({
  declarations: [
    ConsultingPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultingPage),
    ComponentsModule
  ],
})
export class ConsultingPageModule {}
