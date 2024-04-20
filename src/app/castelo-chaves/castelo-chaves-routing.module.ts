import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasteloChavesPage } from './castelo-chaves.page';

const routes: Routes = [
  {
    path: '',
    component: CasteloChavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasteloChavesPageRoutingModule {}
