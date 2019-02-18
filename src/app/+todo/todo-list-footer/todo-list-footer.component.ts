import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../common/models/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];

  constructor() {
  }
}
