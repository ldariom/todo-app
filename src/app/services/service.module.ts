import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { TodoDataService } from './service.index';
import { ApiService } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TodoDataService,
    ApiService
  ],
  declarations: []
})
export class ServiceModule { }



