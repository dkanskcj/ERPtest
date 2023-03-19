import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: '',
        loadChildren: () => import('../folder/folder.module').then(m=>m.FolderPageModule)
      },
      {
        path:'install/install',
        loadChildren: () => import('../pages/install/install/install.module').then(m=>m.InstallPageModule)
      },
      {
        path:'install/receipt',
        loadChildren: () =>import('../pages/install/receipt/receipt.module').then(m=>m.ReceiptPageModule)
      },
      {
        path:'install/setup',
        loadChildren: () => import('../pages/install/setup/setup.module').then(m=>m.SetupPageModule)
      },
      {
        path:'install/release',
        loadChildren: () => import('../pages/install/release/release.module').then(m=>m.ReleasePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
