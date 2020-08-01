export interface Questionario {
  perguntasObrigatorias: Pergunta[];
  perguntasOpcionais: Pergunta[];
  modulos: Modulo[];
}

export interface Pergunta {
  id: number;
  descricao: string;
  dataCriacao: Date;
}

export interface Modulo {
  id: number;
  descricao: string;
}

export interface Feature {
  id: number;
  descricao: string;
}