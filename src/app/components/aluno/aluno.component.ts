import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { Aluno } from 'src/app/shared/core/model/aluno.model';
import { AlunoService } from 'src/app/shared/core/service/aluno.service';

@Component({
  selector: 'incluir-aluno',
  templateUrl: './aluno.component.html'
})
export class AlunoComponent extends BaseFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private service: AlunoService
  ) {
    super();
  }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.fb.group({
      matricula: [null],
      nome: [null],
      caminhoArcanista: [null],
      dataNascimento: [null],
      idade: [null],
      escolaridade: [null],
      nota: [null],
      foto: [null],
      curriculo: [null],
      disciplinas: [null],
      disciplinasFinalizadas: [null],
      escolaPreferida: [null]

    })
  }

  fromData(data: any){
    let aluno = new Aluno();
    aluno.matricula = data.matricula;
    aluno.nome = data.nome;
    aluno.caminhoArcanista = data.caminhoArcanista;
    aluno.dataNascimento = data.dataNascimento;
    aluno.idade = data.idade;
    aluno.escolaridade = data.escolaridade;
    aluno.nota = data.nota;
    aluno.foto = data.foto;
    aluno.curriculo = data.curriculo;
    aluno.disciplinas = data.disciplinas;
    aluno.disciplinasFinalizadas = data.disciplinasFinalizadas;
    aluno.escolaPreferida = data.escolaPreferida;
    return aluno;
  }

  submit(){
    console.log(this.formulario);
    let aluno = new Aluno();
    aluno = this.fromData(this.formulario);
    console.log(aluno);
    this.service.create(aluno);
    this.location.back();
  }

}
