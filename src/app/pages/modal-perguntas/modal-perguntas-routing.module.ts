import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPerguntasPage } from './modal-perguntas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPerguntasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPerguntasPageRoutingModule {}
