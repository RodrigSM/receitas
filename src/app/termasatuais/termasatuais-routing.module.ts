import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermasatuaisPage } from './termasatuais.page';

const routes: Routes = [
  {
    path: '',
    component: TermasatuaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermasatuaisPageRoutingModule {}
