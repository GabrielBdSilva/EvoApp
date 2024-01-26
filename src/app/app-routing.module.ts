import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartamentoComponent } from './departamento/list-departamento/list-departamento.component';
import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { CadFuncionarioComponent } from './funcionario/cad-funcionario/cad-funcionario.component';
import { CadDepartamentoComponent } from './departamento/cad-departamento/cad-departamento.component';
import { EditDepartamentoComponent } from './departamento/edit-departamento/edit-departamento.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'departamentos', component: ListDepartamentoComponent },
  { path: 'departamentos/:id/funcionarios', component: ListFuncionarioComponent },
  { path: 'departamentos/:departamentoId/funcionarios/editar/:funcionarioId', component: EditFuncionarioComponent },
  { path: 'departamentos/:departamentoId/cadastrar-funcionario', component: CadFuncionarioComponent },


  { path: 'editar-departamento/:id', component: EditDepartamentoComponent },
  { path: 'cadastrar-departamento', component: CadDepartamentoComponent },

  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
