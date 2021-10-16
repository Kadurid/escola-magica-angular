import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'alunos', component: AlunoComponent},
  {path:'professores', component: ProfessorComponent},
  {path:'disciplinas', component: DisciplinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
