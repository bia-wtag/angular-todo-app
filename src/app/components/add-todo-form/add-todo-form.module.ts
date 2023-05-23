import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoFormComponent } from './add-todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '~/app/components/shared/shared.module';
import { InputFocusModule } from '~/app/directives/input-focus/input-focus.module';

@NgModule({
  declarations: [AddTodoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InputFocusModule,
  ],
  exports: [AddTodoFormComponent],
})
export class AddTodoFormModule {}
