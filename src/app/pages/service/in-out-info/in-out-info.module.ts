import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InOutInfoPageRoutingModule } from './in-out-info-routing.module';

import { InOutInfoPage } from './in-out-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InOutInfoPageRoutingModule
  ],
  declarations: [InOutInfoPage]
})
export class InOutInfoPageModule {}
