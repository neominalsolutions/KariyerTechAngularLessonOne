import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

// bir component açarken kendisine en yakın module component açar

@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TemplateFormComponent, ReactiveFormComponent]
})
export class FormModule { }

// ReactiveFormsModule module kullanmak için bu modlü tanımlamamız gerekiyor.
