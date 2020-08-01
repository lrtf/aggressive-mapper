import { Component, ViewChild, OnInit } from '@angular/core';
import { QuestionarioService } from 'src/app/services/questionario.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Questionario, Pergunta, Modulo, Feature } from 'src/app/interfaces/questionario';
import { IonSelect, AlertController, ModalController } from '@ionic/angular';
import { ModalPerguntasPage } from '../modal-perguntas/modal-perguntas.page';
import { QuestionarioResposta } from 'src/app/interfaces/questionario-resposta';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  /* questionario: Questionario; */
  questionarioForm: FormGroup;
  modulo: any;
  feature: any;

  modulos: Modulo[] = [];
  features: Feature[] = [];

  hideList = true;

  @ViewChild('countryList') countrySelectRef: IonSelect;

  questionario = {
    "perguntasObrigatorias": [
      {
        "id": 1,
        "descricao": "O que está acontencendo?",
        "dataCriacao": "2020-07-23T08:46:47.833917"
      },
      {
        "id": 5,
        "descricao": "O problema é reincidente?",
        "dataCriacao": "2020-07-24T13:35:20.230653"
      }
    ],
    "modulos": [
      {
        "id": 1,
        "descricao": "Backend"
      },
      {
        "id": 2,
        "descricao": "Frontend"
      },
    ],
    "perguntasOpcionais": [
      {
        "id": 2,
        "descricao": "O que está acontencendo?",
        "dataCriacao": "2020-07-23T08:47:01.978207"
      },
      {
        "id": 3,
        "descricao": "Quem é você?",
        "dataCriacao": "2020-07-23T16:54:31.622616"
      },
      {
        "id": 4,
        "descricao": "Quem é você?",
        "dataCriacao": "2020-07-23T16:55:03.560539"
      },
      {
        "id": 6,
        "descricao": "Que dia é hoje?",
        "dataCriacao": "2020-07-24T13:35:34.877676"
      }
    ]
  }

  constructor(
    private questionarioService: QuestionarioService,
    private modalCtrl: ModalController,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.questionarioForm = this.fb.group({
      usuario: ['', Validators.required],
      idFeature: [''],
      idModulo: [''],
      perguntas: this.fb.array([]),
      respostas: this.fb.array([]),
    });

    //Popula o formulario de perguntas dinamicamente
    this.questionario.perguntasObrigatorias.map(pergunta => {
      this.perguntas.push(this.formPerguntas(pergunta));
    })

    this.loadFeatures();
    this.loadModulos();
  }


  //FormPergunta
  formPerguntas(pergunta): FormGroup {
    return this.fb.group({
      idPergunta: [pergunta.id],
      pergunta: [pergunta.descricao],
      resposta: [''],
    });
  }

  //Formulario de respostas
  setRespostasForm(resposta): FormGroup {
    return this.fb.group({
      idPergunta: [resposta.idPergunta],
      descricao: [resposta.resposta]
    });
  }

  get perguntas() {
    return this.questionarioForm.get('perguntas') as FormArray;
  }

  get respostas() {
    return this.questionarioForm.get('respostas') as FormArray;
  }


  ionViewWillEnter() {
  }

  async showModalQuestoes() {
    const modal = await this.modalCtrl.create({
      component: ModalPerguntasPage,
      componentProps: {
        data: this.questionario.perguntasOpcionais,
      },
      backdropDismiss: false

    })
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('PERGUNTA ', data);
    this.perguntas.push(this.formPerguntas(data));
  }


  displayCountry() {
    this.countrySelectRef.open();
  }

  /*   loadQuestionarios() {
      this.questionarioService.getQuestionarios().subscribe((res: Questionario) => {
        this.questionario = res;
      });
    }
   */
  selectModulo(event) {
    console.log('Clickou em ', event.target.value, ' ', this.modulo);
  }

  selectFeature(event) {
    console.log('Clickou em ', event.target.value, ' ', this.feature);
  }

  save() {
    this.perguntas.value.forEach(element => {
      this.respostas.push(this.setRespostasForm(element));
    });
    this.questionarioForm.removeControl('perguntas');
    this.questionarioService.saveResposta(this.questionarioForm.value).subscribe(resp => {
      console.log('RESP ', resp);
    });
    console.log('Questionarios ', this.questionarioForm.value);
    this.createForm();
  }


  loadModulos() {
    this.questionarioService.getModulos().subscribe((resp: Modulo[]) => {
      this.modulos = resp;
    })
  }

  loadFeatures() {
    this.questionarioService.getFeatures().subscribe((resp: Feature[]) => {
      this.features = resp;
    })
  }

}
