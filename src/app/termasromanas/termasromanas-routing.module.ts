import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermasromanasPage } from './termasromanas.page';

const routes: Routes = [
  {
    path: '',
    component: TermasromanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermasromanasPageRoutingModule {}
