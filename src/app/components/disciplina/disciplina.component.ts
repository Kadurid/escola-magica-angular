import { SchoolsOfMagicENUM } from './../../shared/core/enum/schools-of-magic.enum';
import { AlertModalService } from './../../shared/core/service/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { ClasseENUM } from 'src/app/shared/core/enum/classe.enum';
import { EscolaridadeENUM } from 'src/app/shared/core/enum/escolaridade.enum';
import { SubClasseENUM } from 'src/app/shared/core/enum/sub-classe.enum';
import { Aluno, IAluno } from 'src/app/shared/core/model/aluno.model';
import { Disciplina } from 'src/app/shared/core/model/disciplina.model';
import { IProfessor, Professor } from 'src/app/shared/core/model/professor.model';
import { DisciplinaService } from 'src/app/shared/core/service/disciplina.service';
import { Location } from '@angular/common';

@Component({
  selector: 'incluir-disciplina',
  templateUrl: './disciplina.component.html'
})
export class DisciplinaComponent extends BaseFormComponent implements OnInit {

  professores: IProfessor[] = [];
  alunosDisponiveis: IAluno[] = [];
  alunosAdicionados: IAluno[] = [];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private service: DisciplinaService,
    private alertService: AlertModalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getProfessor();
    this.getAluno();
    this.createForm();
  }

  createForm() {
    this. formulario =this.fb.group({
      id: [null],
      nome: [null],
      professorResponsavel: [""],
      matricula: [""],
      revogada: [null],
      cargaHoraria: [null]
    })
  }

  buildProfessor(){
    const id = this.formulario.get("professorResponsavel")?.value;
    const professor = this.professores.filter(e => e.id == id);
    this.formulario.patchValue({
      professorResponsavel: professor
    })
  }

  addAlunos(){
    const matricula = this.formulario.get('matricula')?.value;
    const aluno = this.alunosDisponiveis.filter(e => e.matricula == matricula);
    if(!this.alunosAdicionados.includes(aluno[0])&& !(this.formulario.get('matricula')?.value=="")){
      this.alunosAdicionados.push(aluno[0]);
    }
    else{
      if(this.alunosAdicionados.includes(aluno[0]))
      this.alertService.showAlertWarning("Student already added")
      else
      this.alertService.showAlertWarning("Pick a student first")
    }

  }

  getProfessor() {
    this.professores.push(new Professor(1, 'magin', ClasseENUM.CLERIGO, SubClasseENUM.TECNOMAGO, 123, 'muito bom'));
    this.professores.push(new Professor(2, 'bardin', ClasseENUM.BARDO, SubClasseENUM.GUERREIROARCANO, 1239, 'muito bom'));
    this.professores.push(new Professor(3, 'obscuro', ClasseENUM.ARCANISTA, SubClasseENUM.TECNOMAGO, 153, 'muito bom'));
    this.professores.push(new Professor(4, 'elfin', ClasseENUM.GUERREIRO, SubClasseENUM.BARDOENTUSIASTA, 113, 'muito bom'));
  }

  getAluno() {
    this.alunosDisponiveis.push(new Aluno('202101et', 'Jao', ClasseENUM.CLERIGO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.ABJURACAO));
    this.alunosDisponiveis.push(new Aluno('202102et', 'Maria', ClasseENUM.BARDO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.ADIVINHACAO));
    this.alunosDisponiveis.push(new Aluno('202103et', 'Enzo', ClasseENUM.GUERREIRO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.CONJURACAO));
    this.alunosDisponiveis.push(new Aluno('202104et', 'Valentina', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.ENCANTAMENTO));
    this.alunosDisponiveis.push(new Aluno('202105et', 'Geruza', ClasseENUM.CLERIGO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.EVOCACAO));
    this.alunosDisponiveis.push(new Aluno('202106et', 'Tam', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.NECROMANCIA));
    this.alunosDisponiveis.push(new Aluno('202107et', 'Igor', ClasseENUM.CLERIGO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.ABJURACAO));
    this.alunosDisponiveis.push(new Aluno('202108et', 'Breno', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.EVOCACAO));
    this.alunosDisponiveis.push(new Aluno('202109et', 'Italo', ClasseENUM.BARDO, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.EVOCACAO));
    this.alunosDisponiveis.push(new Aluno('202110et', 'Jaozinho', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.EVOCACAO));
    this.alunosDisponiveis.push(new Aluno('202111et', 'Mariazinha', ClasseENUM.ARCANISTA, '10/10/199', 12, EscolaridadeENUM.INICIANTE, [], '', '', [], [], SchoolsOfMagicENUM.EVOCACAO));
  }

  // addAluno() {
  //   console.log(this.formulario.get('alunos')?.value);
  //   const matricula = this.formulario.get('alunos')?.value;
  //   const aluno = this.alunosDisponiveis.filter(e => e.matricula = matricula);
  //   this.alunosAdicionados.push(this.getAlunoAdicionado(aluno));
  //   console.log(this.alunosAdicionados);
  // }

  getAlunoAdicionado(data: any): IAluno {
    return data.alunos;
  }


  fromData(data: any){
    let disciplina = new Disciplina();
    disciplina.id = data.id;
    disciplina.nome = data.nome;
    disciplina.professorResponsavel = data.professorResponsavel;
    disciplina.alunos = this.alunosAdicionados;
    disciplina.revogada = data.revogada;
    disciplina.cargaHoraria = data.cargaHoraria;
    return disciplina;
  }

  submit(){
    let disciplina = this.fromData(this.formulario);
    const values = this.alunosAdicionados.map(e => new FormControl(e))
    this.buildProfessor();
    this.formulario.addControl("alunos", this.fb.array(values))
    this.formulario.removeControl("matricula");
    this.service.create(disciplina);
    console.log(this.formulario.value);
    this.location.back();
    this.alertService.showAlertSuccess("Success!")
  }
}
