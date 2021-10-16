import { EscolaridadeENUM } from "../enum/escolaridade.enum";
import { IDisciplina } from "./disciplina.model";

export interface IAluno {
    matricula?: string;
    nome?: string;
    caminhoArcanista?: string;
    dataNascimento?: string;
    idade?: number;
    escolaridade?: EscolaridadeENUM;
    nota?: [];
    foto?: string;
    curriculo?: string;
    disciplinas?: IDisciplina[];
    disciplinasFinalizadas?: IDisciplina[];
    escolaPreferida?: string;
}

export class Aluno implements IAluno {
    constructor(
        public matricula?: string,
        public nome?: string,
        public caminhoArcanista?: string,
        public dataNascimento?: string,
        public idade?: number,
        public escolaridade?: EscolaridadeENUM,
        public nota?: [],
        public foto?: string,
        public curriculo?: string,
        public disciplinas?: IDisciplina[],
        public disciplinasFinalizadas?: IDisciplina[],
        public escolaPreferida?: string
    ) {}
}
