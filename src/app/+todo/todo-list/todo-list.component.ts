import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../common/models/todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleState: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  onToggleTodoState(todo: Todo) {
    this.toggleState.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
