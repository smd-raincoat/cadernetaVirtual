import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpsPage } from './helps';

@NgModule({
  declarations: [
    HelpsPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpsPage),
  ],
})
export class HelpsPageModule {}
