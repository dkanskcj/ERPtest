import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m=>m.HomePageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./pages/install/receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./pages/install/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'release',
    loadChildren: () => import('./pages/install/release/release.module').then( m => m.ReleasePageModule)
  },
  {
    path: 'install',
    loadChildren: () => import('./pages/install/install/install.module').then( m => m.InstallPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./pages/AS/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./pages/AS/receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  {
    path: 'release',
    loadChildren: () => import('./pages/AS/release/release.module').then( m => m.ReleasePageModule)
  },
  {
    path: 'as',
    loadChildren: () => import('./pages/AS/as/as.module').then( m => m.ASPageModule)
  },
  {
    path: 'retrive',
    loadChildren: () => import('./pages/AS/retrive/retrive.module').then( m => m.RetrivePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/register/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'solution',
    loadChildren: () => import('./pages/register/solution/solution.module').then( m => m.SolutionPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/register/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'change-stocks',
    loadChildren: () => import('./pages/service/change-stocks/change-stocks.module').then( m => m.ChangeStocksPageModule)
  },
  {
    path: 'in-out-info',
    loadChildren: () => import('./pages/service/in-out-info/in-out-info.module').then( m => m.InOutInfoPageModule)
  },
  {
    path: 'calc',
    loadChildren: () => import('./pages/calc/calc.module').then( m => m.CalcPageModule)
  }
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
