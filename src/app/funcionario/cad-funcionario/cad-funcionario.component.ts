// cad-funcionario.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.component.html',
  styleUrls: ['./cad-funcionario.component.css']
})
export class CadFuncionarioComponent implements OnInit {
  novoFuncionario: any = {};
  departamentoId: number = 7;

 constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.departamentoId = +params['departamentoId'];
    });
  }

  cadastrarFuncionario(): void {
    this.novoFuncionario.departamentoId = this.departamentoId;
    this.apiService.cadastrarFuncionario(this.novoFuncionario).subscribe(() => {
      this.router.navigate(['/departamentos', this.departamentoId, 'funcionarios']);
    });
  }
}
