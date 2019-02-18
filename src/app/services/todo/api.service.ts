import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import _map from 'lodash-es/map';
import { Todo } from 'app/common/models/todo';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo>(`${API_URL}/todos`)
    .pipe(map(list => _map(list, u => u)));
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${API_URL}/todos`, todo)
    .pipe(map(td => new Todo(td)));
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${API_URL}/todos/${todoId}`)
    .pipe(map(obj => _map(obj, u => u)));
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${API_URL}/todos/${todo.id}`, todo)
    .pipe(map(obj => _map(obj, u => u)));
  }


  public deleteTodoById(todoId: number): Observable<null> {

    return this.httpClient.delete(`${API_URL}/todos/${todoId}`)
    .pipe(map(response => null));
  }

}
