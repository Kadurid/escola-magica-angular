import { Injectable } from "@angular/core";
import { Disciplina } from "../model/disciplina.model";

@Injectable({ providedIn: 'root' })
export class DisciplinaService {
    constructor() {}

    
    create(disciplina: Disciplina): Disciplina {
        console.log('disciplina criada');
        return new Disciplina();
    }

    findAll(): Disciplina[] {
        console.log('carregando disciplinas');
        return new Array();
    }
}