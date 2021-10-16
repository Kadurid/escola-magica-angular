import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { IAluno } from 'src/app/shared/core/model/aluno.model';
import { Disciplina } from 'src/app/shared/core/model/disciplina.model';
import { IProfessor } from 'src/app/shared/core/model/professor.model';
import { AlunoService } from 'src/app/shared/core/service/aluno.service';
import { DisciplinaService } from 'src/app/shared/core/service/disciplina.service';
import { ProfessorService } from 'src/app/shared/core/service/professor.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html'
})
export class DisciplinaComponent extends BaseFormComponent implements OnInit {
  formulario!: FormGroup;

  professores: IProfessor[] | undefined;
  alunosDisponiveis: IAluno[] | undefined;
  alunosAdicionados: IAluno[] | undefined;

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
    this.professores = this.professorService.findAll();
  }

  getAluno() {
    this.alunosDisponiveis = this.alunoService.findAll();
  }

  submit(){
    console.log(this.formulario);
    let disciplina = new Disciplina();
    this.service.create(disciplina);

  }
}
