import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitasIndividualPageRoutingModule } from './receitas-individual-routing.module';

import { ReceitasIndividualPage } from './receitas-individual.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasIndividualPageRoutingModule,
    HttpClientModule, 
  ],
  declarations: [ReceitasIndividualPage]
})
export class ReceitasIndividualPageModule {}
