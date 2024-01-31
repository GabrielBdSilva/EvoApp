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
  fotoSelecionada: File | null = null;

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
    if (this.fotoSelecionada) {
      const nomeArquivo = this.fotoSelecionada.name;
      const caminhoDestino = `../../../assets/ft-func/${nomeArquivo}`;

      this.funcionario.foto = caminhoDestino;
    }

    this.apiService.atualizarFuncionario(this.funcionario).subscribe(() => {
      this.router.navigate(['/departamentos', this.funcionario.departamentoId, 'funcionarios']);
    });
  }

  selecionarFoto(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.fotoSelecionada = files[0];
    }
  }
}
