import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent {
  departamento: any = {};
  departamentoId: number = 0;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.departamentoId = +params['id'];
      this.carregarDepartamento();
    });
  }

  carregarDepartamento(): void {
    this.apiService.getDepartamentoById(this.departamentoId).subscribe(departamento => {
      this.departamento = departamento;
    });
  }

  salvarEdicao(): void {
    this.apiService.atualizarDepartamento(this.departamento).subscribe(() => {
      this.router.navigate(['/departamentos']);
    });
  }
}
