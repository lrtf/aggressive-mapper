import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Questionario } from '../interfaces/questionario';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  questionarios: Questionario[];

  constructor(private http: HttpClient) { }

  getQuestionarios() {
    return this.http.get(environment.urlAPI + '/questionarios');
  }

  getFeatures() {
    return this.http.get(environment.urlAPI + '/features');
  }

  getModulos() {
    return this.http.get(environment.urlAPI + '/modulos');
  }

  saveResposta(body) {
    return this.http.post(environment.urlAPI + '/questionarios', body);
  }

}