import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  funcionario: any = {};
  funcionarioId: number = 0;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.funcionarioId = +params['funcionarioId'];
      this.carregarFuncionario();
    });
  }

  carregarFuncionario(): void {
    this.apiService.getFuncionarioById(this.funcionarioId).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
  }



  salvarEdicao(): void {
    this.apiService.atualizarFuncionario(this.funcionario).subscribe(() => {
      this.router.navigate(['/departamentos', this.funcionario.departamentoId, 'funcionarios']);
    });
  }
}
