import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './+todo/todo.module';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TodoModule,
    HttpClientModule,
    MatIconModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
