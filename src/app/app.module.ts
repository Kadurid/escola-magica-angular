import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/core/navbar/navbar.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunoComponent,
    ProfessorComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
