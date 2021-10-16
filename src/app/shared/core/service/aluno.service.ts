import { Injectable } from "@angular/core";
import { Aluno } from "../model/aluno.model";

@Injectable({ providedIn: 'root' })
export class AlunoService {
    constructor() {}

    create(aluno: Aluno): Aluno {
        console.log('aluno criado');
        return new Aluno();
    }

    findAll(): Aluno[] {
        console.log('carregando alunos');
        return new Array();
    }
}