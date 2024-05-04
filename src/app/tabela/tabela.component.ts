import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LISTATAREFAS } from './base-tarefa';
import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  //Variáveis
  title = "Tabela de tarefas";
  tarefas : Tarefa[] = []
  novaTarefa = {
    id: 1,
    nome: "Hoje",
    descricao: "Sal",
    quantidadeEstoque: 5,
    quantidadeMinima: 7
  }

  //Eventos
  focaInput(){
    this.tarefas.push({
      id: this.novaTarefa.id,
      nome: this.novaTarefa.nome,
      descricao: this.novaTarefa.descricao,
      quantidadeEstoque: this.novaTarefa.quantidadeEstoque,
      quantidadeMinima: this.novaTarefa.quantidadeMinima
    });
  }

  constructor (private tarefaService : TarefaService) {}

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas() : void{
    this.tarefas = this.tarefaService.getTarefas();
  }
}