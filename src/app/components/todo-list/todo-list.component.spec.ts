import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { AddTodoFormModule } from '../add-todo-form/add-todo-form.module';
import { TodoService } from '~/app/services/todo.service';
import { Todo } from '~/app/models/todo.model';

@Component({
  selector: `app-test-component`,
  template: `
    <app-todo-list [addTodoFormVisible]="addTodoFormVisible"></app-todo-list>
  `,
})
class TestComponent {
  addTodoFormVisible = false;
}

describe('TodoListComponent Input', () => {
  let fixture: ComponentFixture<TestComponent>;

  it('should show/hide addForm based on addTodoFormVisible input', () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TodoListComponent],
      imports: [AddTodoFormModule],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    let textArea = fixture.nativeElement.querySelector('textarea');

    expect(textArea).toBeFalsy();

    fixture.componentInstance.addTodoFormVisible = true;
    fixture.detectChanges();
    textArea = fixture.nativeElement.querySelector('textarea');

    expect(textArea).toBeTruthy();
  });
});

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;
  const dateNow = new Date();

  const todoServiceStub: Partial<TodoService> = {
    getTodos() {
      return [
        new Todo(dateNow, null, 'Todo 1', false),
        new Todo(dateNow, null, 'Todo 2', false),
        new Todo(dateNow, null, 'Todo 3', false),
      ];
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [AddTodoFormModule],
      providers: [{ provide: TodoService, useValue: todoServiceStub }],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show get all todos on init', async () => {
    await fixture.whenStable();
    expect(component.todos).toEqual(todoService.getTodos());
  });
});
