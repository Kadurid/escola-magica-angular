import { DetalharAlunoComponent } from './components/aluno/detalhar-aluno.component';
import { ListarAlunosComponent } from './components/aluno/listar-alunos.component';
import { HomeComponent } from './components/home/home.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'incluir-alunos', component: AlunoComponent},
  {path:'listar-alunos', component: ListarAlunosComponent},
  {path: 'detalhar-aluno/:id', component: DetalharAlunoComponent},
  {path:'professores', component: ProfessorComponent},
  {path:'disciplinas', component: DisciplinaComponent},
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
