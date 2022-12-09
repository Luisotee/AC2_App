export interface ICards {
  desc: string;
  iconType: string;
  nextComponent: string;
  navigation: any;
}

export interface IStudent {
  cidade: string;
  endereco: string;
  foto: string;
  matricula: string;
  nome: string;
}

export interface IDisciplina {
  carga_hor: string;
  cod_disc: string;
  nome_disc: string;
}

export interface IProfessor {
  cidade: string;
  cod_prof: string;
  endereco: string;
  nome: string;
}

export interface ITurma {
  ano: string;
  cod_disc: string;
  cod_prof: string;
  cod_turma: string;
  horario: string;
}
