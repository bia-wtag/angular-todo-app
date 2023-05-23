import { Todo } from './todo.model';

describe('Todo', () => {
  let todo: Todo;
  const todoTitle = 'Go to sleep';

  beforeEach(() => {
    todo = new Todo(new Date(), null, todoTitle, false);
  });

  it('should create the correct instance', () => {
    expect(todo).toBeTruthy();
    expect(todo).toBeInstanceOf(Todo);
  });
});
