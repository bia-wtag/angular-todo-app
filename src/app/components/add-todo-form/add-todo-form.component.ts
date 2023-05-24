import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '~/app/models/todo.model';
import { TodoService } from '~/app/services/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent {
  addTodoLabel = 'Add Todo';
  titleErrorLabel = 'Title is required';
  title = new FormControl('', [Validators.required]);
  isSubmitted = false;

  @Output() updateAddTodoFormVisibility = new EventEmitter();

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.isSubmitted = true;
    if (!this.title.value?.trim() || this.title.invalid) {
      this.title.setValue('');
      return;
    }

    this.todoService.addTodo(
      new Todo(new Date(), null, this.title.value.trim(), false)
    );

    this.title.setValue('');
    this.isSubmitted = false;
  }

  showError() {
    return (
      this.isSubmitted &&
      this.title.invalid &&
      (this.title.dirty || this.title.touched)
    );
  }

  resetAddForm() {
    this.title.setValue('');
    this.updateAddTodoFormVisibility.emit();
  }
}
