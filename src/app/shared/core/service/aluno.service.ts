import { Injectable } from "@angular/core";
import { EscolaridadeENUM } from "../enum/escolaridade.enum";
import { Aluno } from "../model/aluno.model";

@Injectable({ providedIn: 'root' })
export class AlunoService {
    constructor() {}

    create(aluno: Aluno): Aluno {
        console.log('aluno criado');
        return new Aluno();
    }

    findAll(): Aluno[] {
        let ps = new Array();
        ps.push(new Aluno('202101et', 'Jao', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202102et', 'Maria', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202103et', 'Enzo', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202104et', 'Valentina', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202105et', 'Geruza', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202106et', 'Tam', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202107et', 'Igor', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202108et', 'Breno', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202109et', 'Italo', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202110et', 'Jaozinho', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        ps.push(new Aluno('202111et', 'Mariazinha', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
        return ps;
    }
}
