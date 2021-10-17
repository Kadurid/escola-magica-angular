import { EscolaridadeENUM } from './../../shared/core/enum/escolaridade.enum';
import { ClasseENUM } from './../../shared/core/enum/classe.enum';
import { Aluno } from './../../shared/core/model/aluno.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalhar-aluno',
  templateUrl: './detalhar-aluno.component.html'
})
export class DetalharAlunoComponent implements OnInit {

  alunos: Aluno[] = [];
  aluno!: Aluno;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAlunos();
    this.getAluno();
  }

  getAlunos() {
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

  getAluno() {
    const id = this.activatedRoute.snapshot.params.id;
    this.aluno = this.alunos.filter(e => e.matricula == id)[0];
    console.log(this.aluno);
  }

}
