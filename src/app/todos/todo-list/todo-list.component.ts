import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store:Store<AppState>) { 
    // this.store.select('todos').subscribe(todos => this.todos= todos) ;
  } 

  ngOnInit(): void {
    this.store.subscribe( ({todos,filtro})  => {
      this.todos = todos;
      this.filtroActual = filtro;
    })
  }

}
