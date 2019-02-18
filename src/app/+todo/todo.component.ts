import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'app/services/todo/todo-data.service';
import { Todo } from 'app/common/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public ngOnInit() {
     this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo) {
     this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoState(todo) {
     this.todoDataService
      .toggleTodoState(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

}



