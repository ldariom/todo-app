import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../common/models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  color: string;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleState: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  toggleTodoState(todo: Todo) {
    this.toggleState.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
