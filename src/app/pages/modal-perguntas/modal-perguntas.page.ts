import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-perguntas',
  templateUrl: './modal-perguntas.page.html',
  styleUrls: ['./modal-perguntas.page.scss'],
})
export class ModalPerguntasPage implements OnInit {

  @Input() data: any;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('data ', this.data);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  selectQuestion(pergunta) {
    this.modalCtrl.dismiss({ 'id': pergunta.id, 'descricao': pergunta.descricao });
  }

}
