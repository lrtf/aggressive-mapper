import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPerguntasPageRoutingModule } from './modal-perguntas-routing.module';

import { ModalPerguntasPage } from './modal-perguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPerguntasPageRoutingModule
  ],
  declarations: [ModalPerguntasPage]
})
export class ModalPerguntasPageModule { }
