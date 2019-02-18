import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../common/models/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @ViewChild('newItem') el: ElementRef;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  addTodo(val: string) {
    this.newTodo.title = val;
    this.add.emit(this.newTodo);
    this.el.nativeElement.value = '';
  }

}
