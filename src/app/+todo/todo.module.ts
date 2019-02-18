
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './todo.routes';

import {MatIconModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoComponent } from './todo.component';
import { TopShadowDirective } from 'app/common/directive/top-shadow.directive';


@NgModule({
    declarations: [
      TodoListComponent,
      TodoListFooterComponent,
      TodoListHeaderComponent,
      TodoListItemComponent,
      TodoComponent,
      TopShadowDirective
    ],
    exports: [TodoComponent],
    imports: [
        PAGES_ROUTES,
        CommonModule,
        MatIconModule
    ]
})
export class TodoModule { }
