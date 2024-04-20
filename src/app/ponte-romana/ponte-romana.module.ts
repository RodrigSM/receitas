import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PonteRomanaPageRoutingModule } from './ponte-romana-routing.module';

import { PonteRomanaPage } from './ponte-romana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PonteRomanaPageRoutingModule
  ],
  declarations: [PonteRomanaPage]
})
export class PonteRomanaPageModule {}
