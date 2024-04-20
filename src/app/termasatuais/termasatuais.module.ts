import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermasatuaisPageRoutingModule } from './termasatuais-routing.module';

import { TermasatuaisPage } from './termasatuais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermasatuaisPageRoutingModule
  ],
  declarations: [TermasatuaisPage]
})
export class TermasatuaisPageModule {}
