import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';



const todoRoutes: Routes = [
    {
        path: '',
        component: TodoComponent,
        children: [
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( todoRoutes );
