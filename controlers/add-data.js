import { doc, setDoc } from "firebase/firestore";
import db from ".";

export async function addStudent({ student }) {
  await setDoc(doc(db, "Aluno", student.nome), {
    cidade: student.cidade,
    endereco: student.endereco,
    foto: student.foto,
    matricula: student.matricula,
    nome: student.nome,
  });
}

export async function addSubject({ subject }) {
  await setDoc(doc(db, "Disciplina", subject.disciplina), {
    cod_disc: subject.codigoDisciplina,
    nome_disc: subject.disciplina,
    carga_hor: subject.cargaHoraria,
  });
}

export async function addTeacher({ teacher }) {
  await setDoc(doc(db, "Professor", teacher.nome), {
    cidade: teacher.cidade,
    endereco: teacher.endereco,
    cod_prof: teacher.codigoProfessor,
    nome: teacher.nome,
  });
}

export async function addClass({ classRoom }) {
  await setDoc(doc(db, "Turma", classRoom.codigoTurma), {
    cod_turma: classRoom.codigoTurma,
    cod_disc: classRoom.codigoDisciplina,
    cod_prof: classRoom.codigoProfessor,
    ano: classRoom.ano,
    horario: classRoom.horario,
  });
}

export async function addHistory({ history }) {
  await setDoc(doc(db, "Histórico", history.matricula), {
    cod_historico: history.codigoHistorico,
    cod_turma: history.codigoTurma,
    frequencia: history.frequencia,
    matricula: history.matricula,
    nota: history.nota,
  });
}
