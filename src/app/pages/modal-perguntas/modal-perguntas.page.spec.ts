import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPerguntasPage } from './modal-perguntas.page';

describe('ModalPerguntasPage', () => {
  let component: ModalPerguntasPage;
  let fixture: ComponentFixture<ModalPerguntasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPerguntasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPerguntasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
