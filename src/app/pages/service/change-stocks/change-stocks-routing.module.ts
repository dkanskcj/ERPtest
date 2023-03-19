import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeStocksPage } from './change-stocks.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeStocksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeStocksPageRoutingModule {}
