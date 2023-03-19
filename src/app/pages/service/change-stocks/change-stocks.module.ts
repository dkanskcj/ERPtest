import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeStocksPageRoutingModule } from './change-stocks-routing.module';

import { ChangeStocksPage } from './change-stocks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeStocksPageRoutingModule
  ],
  declarations: [ChangeStocksPage]
})
export class ChangeStocksPageModule {}
