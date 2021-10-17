import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { BtnVoltarComponent } from './shared/components/btn-voltar/btn-voltar.component';
import { FooterComponent } from './shared/core/footer/footer.component';
import { NavbarComponent } from './shared/core/navbar/navbar.component';
import { FormDebugComponent } from './shared/components/form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunoComponent,
    ProfessorComponent,
    DisciplinaComponent,
    BtnVoltarComponent,
    FooterComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
