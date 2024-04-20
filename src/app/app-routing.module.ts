import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'receitas-individual',
    loadChildren: () => import('./receitas-individual/receitas-individual.module').then( m => m.ReceitasIndividualPageModule)
  },
  {
    path: 'termasromanas',
    loadChildren: () => import('./termasromanas/termasromanas.module').then( m => m.TermasromanasPageModule)
  },
  {
    path: 'termasatuais',
    loadChildren: () => import('./termasatuais/termasatuais.module').then( m => m.TermasatuaisPageModule)
  },
  {
    path: 'ponte-romana',
    loadChildren: () => import('./ponte-romana/ponte-romana.module').then( m => m.PonteRomanaPageModule)
  },
  {
    path: 'castelo-chaves',
    loadChildren: () => import('./castelo-chaves/castelo-chaves.module').then( m => m.CasteloChavesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
