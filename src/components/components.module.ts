import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [LoadingSpinnerComponent],
	imports: [IonicModule],
	exports: [LoadingSpinnerComponent]
})
export class ComponentsModule {}
