import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDepartamentoComponent } from './departamento/list-departamento/list-departamento.component';
import { CadDepartamentoComponent } from './departamento/cad-departamento/cad-departamento.component';
import { CadFuncionarioComponent } from './funcionario/cad-funcionario/cad-funcionario.component';
import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { EditDepartamentoComponent } from './departamento/edit-departamento/edit-departamento.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    ListDepartamentoComponent,
    CadDepartamentoComponent,
    CadFuncionarioComponent,
    ListFuncionarioComponent,
    EditFuncionarioComponent,
    EditDepartamentoComponent,
    HomeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
