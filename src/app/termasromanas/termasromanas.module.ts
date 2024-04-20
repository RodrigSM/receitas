import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermasromanasPageRoutingModule } from './termasromanas-routing.module';

import { TermasromanasPage } from './termasromanas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermasromanasPageRoutingModule
  ],
  declarations: [TermasromanasPage]
})
export class TermasromanasPageModule {}
