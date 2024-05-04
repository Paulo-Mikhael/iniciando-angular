import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { LISTATAREFAS } from './base-tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefas() : Tarefa[]{
    return LISTATAREFAS;
  }
}