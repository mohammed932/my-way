import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DifficultiesGuidePage } from './difficulties-guide';

@NgModule({
  declarations: [
    DifficultiesGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(DifficultiesGuidePage),
    ComponentsModule
  ],
})
export class DifficultiesGuidePageModule {}
