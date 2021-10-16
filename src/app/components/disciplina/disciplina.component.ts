import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { Disciplina } from 'src/app/shared/core/model/disciplina.model';
import { DisciplinaService } from 'src/app/shared/core/service/disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html'
})
export class DisciplinaComponent extends BaseFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DisciplinaService
  ) {
    super();
  }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.fb.group({
      id: [null],
      nome: [null],
      professorResponsavel: [null],
      alunos: [null],
      revogada: [null],
      cargaHoraria: [null]
    })
  }

  submit(){
    console.log(this.formulario);
    let disciplina = new Disciplina();
    this.service.create(disciplina);

  }
}
