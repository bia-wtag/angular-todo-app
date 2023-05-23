import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from '~/app/models/todo.model';

describe('TodoService', () => {
  let service: TodoService;

  const todoTitle = 'Go to sleep';
  const mockTodo = new Todo(new Date(), null, todoTitle, false);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#addTodo should add todo to list', () => {
    service.addTodo(mockTodo);
    expect(service.getTodos()[0]).toEqual(mockTodo);
  });

  it('#getTodos should get all todos from list', () => {
    service.addTodo(mockTodo);
    service.addTodo(mockTodo);
    service.addTodo(mockTodo);

    expect(service.getTodos().length).toEqual(3);
    expect(service.getTodos()[2]).toEqual(mockTodo);
  });
});
