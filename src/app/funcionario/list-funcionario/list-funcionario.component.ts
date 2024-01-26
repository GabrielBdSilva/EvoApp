import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {
  funcionarios: any[] = [];
  departamentoId: number = 0;

  funcionariosFiltrados: any[] = [];
  termoPesquisa: string = '';
  private termoPesquisaSubject = new Subject<string>();

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }


   ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.departamentoId = +params['id'];
      this.carregarFuncionarios();
      this.inicializarObservadorDePesquisa();
      this.atualizarLista();
    });
  }

  carregarFuncionarios(): void {
    this.apiService.getFuncionariosPorDepartamento(this.departamentoId).subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  pesquisar(): void {
    this.aplicarFiltro();
  }

  inicializarObservadorDePesquisa(): void {
    this.termoPesquisaSubject.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(() => {
      this.aplicarFiltro();
    });
  }
  atualizarLista(): void {
    this.termoPesquisaSubject.next(this.termoPesquisa);
  }

  aplicarFiltro(): void {
    this.funcionariosFiltrados = this.funcionarios.filter(funcionario =>
      funcionario.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase()) ||
      funcionario.rg.includes(this.termoPesquisa)
    )
  }


  cadastrarFuncionario(): void {
    const departamentoId = this.route.snapshot.params['id'];
    this.router.navigate(['/departamentos', departamentoId, 'cadastrar-funcionario']);
  }

  editarFuncionario(id: number): void {
    this.router.navigate(['/departamentos', this.departamentoId, 'funcionarios', 'editar', id]);
  }

  excluirFuncionario(id: number): void {
    if (confirm('Deseja realmente excluir este funcionário?')) {
      this.apiService.excluirFuncionario(id).subscribe(() => {
        this.router.navigate(['/departamentos']);
      });
    }


  }
}
