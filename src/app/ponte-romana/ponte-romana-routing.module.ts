import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PonteRomanaPage } from './ponte-romana.page';

const routes: Routes = [
  {
    path: '',
    component: PonteRomanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PonteRomanaPageRoutingModule {}
