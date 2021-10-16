import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { Disciplina } from 'src/app/shared/core/model/disciplina.model';
import { IProfessor } from 'src/app/shared/core/model/professor.model';
import { DisciplinaService } from 'src/app/shared/core/service/disciplina.service';
import { ProfessorService } from 'src/app/shared/core/service/professor.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html'
})
export class DisciplinaComponent extends BaseFormComponent implements OnInit {
  formulario!: FormGroup;

  professores: IProfessor[] | undefined;

  constructor(
    private fb: FormBuilder,
    private service: DisciplinaService,
    private professorService: ProfessorService
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.getProfessor();
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

  submit(){
    console.log(this.formulario);
    let disciplina = new Disciplina();
    this.service.create(disciplina);

  }
}
