import { ClasseENUM } from "../enum/classe.enum";
import { SubClasseENUM } from "../enum/sub-classe.enum";

export interface IProfessor {
    id?: number;
    nome?: string;
    classe?: ClasseENUM;
    subClasse?: SubClasseENUM;
    idade?: number;
    curriculo?: string;
}

export class Professor implements IProfessor {
    constructor(
        public id?: number,
        public nome?: string,
        public classe?: ClasseENUM,
        public subClasse?: SubClasseENUM,
        public idade?: number,
        public curriculo?: string
    ) {}
}