import { IAluno } from './aluno.model';
import { IProfessor } from './professor.model';

export interface IDisciplina {
    id?: number;
    nome?: string;
    professorResponsavel?: IProfessor;
    alunos?: IAluno[];
    revogada?: string;
    cargaHoraria?: number;
}

export class Disciplina implements IDisciplina {
    constructor(
        public id?: number,
        public nome?: string,
        public professorResponsavel?: IProfessor,
        public alunos?: IAluno[],
        public revogada?: string,
        public cargaHoraria?: number
    ) {}
}