import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListcheckPage } from './listcheck';

@NgModule({
  declarations: [
    ListcheckPage,
  ],
  imports: [
    IonicPageModule.forChild(ListcheckPage),
  ],
})
export class ListcheckPageModule {}
