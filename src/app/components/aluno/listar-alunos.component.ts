import { ClasseENUM } from './../../shared/core/enum/classe.enum';
import { EscolaridadeENUM } from './../../shared/core/enum/escolaridade.enum';
import { Aluno } from './../../shared/core/model/aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html'
})
export class ListarAlunosComponent implements OnInit {

  alunos: Aluno[] = [];


  constructor() { }

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno() {
    this.alunos.push(new Aluno('202101et', 'Jao', ClasseENUM.CLERIGO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202102et', 'Maria', ClasseENUM.BARDO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202103et', 'Enzo', ClasseENUM.GUERREIRO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202104et', 'Valentina', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202105et', 'Geruza', ClasseENUM.CLERIGO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202106et', 'Tam', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202107et', 'Igor', ClasseENUM.CLERIGO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202108et', 'Breno', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202109et', 'Italo', ClasseENUM.BARDO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202110et', 'Jaozinho', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunos.push(new Aluno('202111et', 'Mariazinha', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
  }

}
