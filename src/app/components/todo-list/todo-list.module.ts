import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { AddTodoFormModule } from '~/app/components/add-todo-form/add-todo-form.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, AddTodoFormModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
