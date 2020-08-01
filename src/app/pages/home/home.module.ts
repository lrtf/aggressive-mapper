import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalPerguntasPage } from '../modal-perguntas/modal-perguntas.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule

  ],
  declarations: [HomePage, ModalPerguntasPage]
})
export class HomePageModule { }
