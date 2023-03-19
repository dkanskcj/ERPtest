import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InOutInfoPage } from './in-out-info.page';

const routes: Routes = [
  {
    path: '',
    component: InOutInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InOutInfoPageRoutingModule {}
