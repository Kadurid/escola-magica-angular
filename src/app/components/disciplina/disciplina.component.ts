import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { ClasseENUM } from 'src/app/shared/core/enum/classe.enum';
import { EscolaridadeENUM } from 'src/app/shared/core/enum/escolaridade.enum';
import { SubClasseENUM } from 'src/app/shared/core/enum/sub-classe.enum';
import { Aluno, IAluno } from 'src/app/shared/core/model/aluno.model';
import { Disciplina } from 'src/app/shared/core/model/disciplina.model';
import { IProfessor, Professor } from 'src/app/shared/core/model/professor.model';
import { AlunoService } from 'src/app/shared/core/service/aluno.service';
import { DisciplinaService } from 'src/app/shared/core/service/disciplina.service';
import { ProfessorService } from 'src/app/shared/core/service/professor.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html'
})
export class DisciplinaComponent extends BaseFormComponent implements OnInit {
  formulario!: FormGroup;

  professores: IProfessor[] = [];
  alunosDisponiveis: IAluno[] = [];
  alunosAdicionados: IAluno[] = [];

  constructor(
    private fb: FormBuilder,
    private service: DisciplinaService,
    private professorService: ProfessorService,
    private alunoService: AlunoService
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.getProfessor();
    this.getAluno();
  }

  createForm() {
    this.fb.group({
      id: [null],
      nome: [null],
      professorResponsavel: [null],
      alunos: [null],
      revogada: [null],
      cargaHoraria: [null]
    })
  }

  getProfessor() {
    this.professores.push(new Professor(1, 'magin', ClasseENUM.CLERIGO, SubClasseENUM.TECNOMAGO, 123, 'muito bom'));
    this.professores.push(new Professor(2, 'bardin', ClasseENUM.BARDO, SubClasseENUM.GUERREIROARCANO, 1239, 'muito bom'));
    this.professores.push(new Professor(3, 'obscuro', ClasseENUM.ARCANISTA, SubClasseENUM.TECNOMAGO, 153, 'muito bom'));
    this.professores.push(new Professor(4, 'elfin', ClasseENUM.GUERREIRO, SubClasseENUM.BARDOENTUSIASTA, 113, 'muito bom'));
  }

  getAluno() {
    this.alunosDisponiveis.push(new Aluno('202101et', 'Jao', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202102et', 'Maria', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202103et', 'Enzo', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202104et', 'Valentina', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202105et', 'Geruza', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202106et', 'Tam', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202107et', 'Igor', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202108et', 'Breno', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202109et', 'Italo', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202110et', 'Jaozinho', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
    this.alunosDisponiveis.push(new Aluno('202111et', 'Mariazinha', 'CLERIGO', '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], 'uma ai'));
  }

  submit(){
    console.log(this.formulario);
    let disciplina = new Disciplina();
    this.service.create(disciplina);

  }
}
