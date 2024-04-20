import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasteloChavesPageRoutingModule } from './castelo-chaves-routing.module';

import { CasteloChavesPage } from './castelo-chaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasteloChavesPageRoutingModule
  ],
  declarations: [CasteloChavesPage]
})
export class CasteloChavesPageModule {}
