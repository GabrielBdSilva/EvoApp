import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class ListDepartamentoComponent implements OnInit {
  departamentos: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.carregarDepartamentos();
  }

cadastrarDepartamento(): void {
  this.router.navigate(['/cadastrar-departamento']);
}

  carregarDepartamentos(): void {
    this.apiService.getDepartamentos().subscribe(departamentos => {
      this.departamentos = departamentos;
    });
  }
  editarDepartamento(id: number): void {
    this.router.navigate(['/editar-departamento', id]);
  }

  excluirDepartamento(departamentoId: number): void {
    if (confirm('Deseja realmente excluir este departamento?')) {
      this.apiService.excluirDepartamento(departamentoId).subscribe(() => {

        this.carregarDepartamentos();
      });
    }
  }

  verFuncionarios(departamentoId: number): void {
    this.router.navigate(['/departamentos', departamentoId, 'funcionarios']);
  }

}
