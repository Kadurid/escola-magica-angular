import { SubClasseENUM } from './../../shared/core/enum/sub-classe.enum';
import { ClasseENUM } from './../../shared/core/enum/classe.enum';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Professor } from './../../shared/core/model/professor.model';
import { ProfessorService } from './../../shared/core/service/professor.service';

@Component({
  selector: 'incluir-professor',
  templateUrl: './professor.component.html'
})
export class ProfessorComponent implements OnInit {

  classes: string[] = [];
  subClasses: string[] = [];

  constructor(
    private location: Location,
    private service: ProfessorService
  ) { }

  ngOnInit(): void {
    this.createClasse();
    this.createSubClasse();
  }

  createClasse(){
    this.classes.push(ClasseENUM.ARCANISTA);
    this.classes.push(ClasseENUM.BARDO);
    this.classes.push(ClasseENUM.CLERIGO);
    this.classes.push(ClasseENUM.GUERREIRO);
  }

  createSubClasse(){
    this.subClasses.push(SubClasseENUM.BARDOENTUSIASTA);
    this.subClasses.push(SubClasseENUM.GUERREIROARCANO);
    this.subClasses.push(SubClasseENUM.TECNOMAGO);
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  onSubmit(formulario: NgForm) {
    console.log(formulario.value);
    let professor = new Professor();
    professor.classe = formulario.value.classe;
    professor.nome = formulario.value.nome;
    professor.idade = formulario.value.idade;
    professor.subClasse = formulario.value.subClasse;
    this.service.create(professor);
    this.location.back();

  }

}
