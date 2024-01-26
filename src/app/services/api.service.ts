// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7028/api';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departamentos`);
  }
  getDepartamentoById(departamentoId: number): Observable<any> {
    const url = `${this.apiUrl}/departamentos/${departamentoId}`;
    return this.http.get(url);
  }
  atualizarDepartamento(departamento: any): Observable<any> {
    const url = `${this.apiUrl}/departamentos/${departamento.id}`;
    return this.http.put(url, departamento);
  }
  cadastrarDepartamento(departamento: any): Observable<any> {
    const url = `${this.apiUrl}/departamentos`;
    return this.http.post(url, departamento);
  }

  excluirDepartamento(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/departamentos/${id}`);
  }
  getFuncionarioById(funcionarioId: number): Observable<any> {
    const url = `${this.apiUrl}/funcionarios/${funcionarioId}`;
    return this.http.get<any>(url);
  }

  getFuncionariosPorDepartamento(departamentoId: number): Observable<any[]> {
    const url = `${this.apiUrl}/funcionarios/departamento/${departamentoId}`;
    return this.http.get<any[]>(url);
  }
  cadastrarFuncionario(novoFuncionario: any): Observable<any> {
    const url = `${this.apiUrl}/funcionarios`;
    return this.http.post<any>(url, novoFuncionario);
  }
  atualizarFuncionario(funcionario: any): Observable<any> {
    const url = `${this.apiUrl}/funcionarios/${funcionario.id}`;
    return this.http.put<any>(url, funcionario);
  }
  excluirFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/funcionarios/${id}`);
  }


}
