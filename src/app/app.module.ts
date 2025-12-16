import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [
    ReactiveFormsModule,
    MatMenuModule,
    CommonModule
  ],
})
export class AppModule { }
