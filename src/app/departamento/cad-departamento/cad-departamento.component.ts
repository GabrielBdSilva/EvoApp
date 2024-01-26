import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-departamento',
  templateUrl: './cad-departamento.component.html',
  styleUrls: ['./cad-departamento.component.css']
})
export class CadDepartamentoComponent {
  novoDepartamento: any = {};

  constructor(private apiService: ApiService, private router: Router) {}

  cadastrarDepartamento(): void {
    this.apiService.cadastrarDepartamento(this.novoDepartamento).subscribe(() => {
      this.router.navigate(['/departamentos']);
    });
  }
}

