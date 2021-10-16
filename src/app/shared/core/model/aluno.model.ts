export interface IAluno {
    matricula?: string;
    nome?: string;
    caminhoArcanista?: string;
    dataNascimento?: string;
    idade?: string;
    escolaridade?: string;
    nota?: [];
    foto?: string;
    curriculo?: string;
    disciplinas?: [];
    disciplinasFinalizadas?: [];
    escolaPretendida?: string;
}

export class Aluno implements IAluno {
    constructor(
        public matricula?: string,
        public nome?: string,
        public caminhoArcanista?: string,
        public dataNascimento?: string,
        public idade?: string,
        public escolaridade?: string,
        public nota?: [],
        public foto?: string,
        public curriculo?: string,
        public disciplinas?: [],
        public disciplinasFinalizadas?: [],
        public escolaPretendida?: string
    ) {}
}