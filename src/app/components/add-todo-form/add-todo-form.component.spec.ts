import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoFormComponent } from './add-todo-form.component';
import { SharedModule } from '~/app/components/shared/shared.module';
import { InputFocusModule } from '~/app/directives/input-focus/input-focus.module';
import { By } from '@angular/platform-browser';
import { TodoService } from '~/app/services/todo.service';

describe('AddTodoFormComponent', () => {
  let component: AddTodoFormComponent;
  let fixture: ComponentFixture<AddTodoFormComponent>;
  let textarea: HTMLTextAreaElement;
  let submitBtn: HTMLButtonElement;
  let deleteBtn: HTMLButtonElement;
  let todoService: TodoService;

  const todoServiceStub: Partial<TodoService> = {
    addTodo() {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        InputFocusModule,
      ],
      providers: [{ provide: TodoService, useValue: todoServiceStub }],
    });
    fixture = TestBed.createComponent(AddTodoFormComponent);
    todoService = TestBed.inject(TodoService);

    component = fixture.componentInstance;
    textarea = fixture.debugElement.query(By.css('textarea')).nativeElement;
    submitBtn = fixture.debugElement
      .query(By.css('.button-group'))
      .nativeElement.firstChild.querySelector('button');
    deleteBtn = fixture.debugElement
      .query(By.css('.button-group'))
      .nativeElement.lastChild.querySelector('button');
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the textarea correctly with attributes', () => {
    spyOn(textarea, 'focus');
    fixture.detectChanges();

    expect(textarea).toBeTruthy();
    expect(textarea.required).toBeTruthy();
    expect(textarea.focus).toHaveBeenCalled();
  });

  it('should update title when textarea value changes', () => {
    fixture.detectChanges();

    expect(textarea.value).toBeFalsy();
    expect(component.title.value).toBeFalsy();

    const newTodo = 'Todo 1';
    textarea.value = newTodo;
    textarea.dispatchEvent(new Event('input'));

    expect(component.title.value).toEqual(newTodo);
  });

  it('should show submit button correctly', () => {
    component.addTodoLabel = 'Create';
    fixture.detectChanges();

    expect(submitBtn).toBeTruthy();
    expect(submitBtn.textContent).toEqual('Create');
  });

  it('#onSubmit should clear input and call #addTodo service', () => {
    component.title.setValue('Todo 1');
    spyOn(todoService, 'addTodo');

    component.onSubmit();
    fixture.detectChanges();

    expect(component.title.value).toBeFalsy();
    expect(todoService.addTodo).toHaveBeenCalled();
  });

  it('should call #onSubmit when submit button is clicked', () => {
    spyOn(component, 'onSubmit');

    submitBtn.click();
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should show error when invalid value submitted', () => {
    fixture.detectChanges();

    const errorElement = fixture.debugElement.query(By.css('.input-error'));
    expect(errorElement).toBeFalsy();

    component.titleErrorLabel = 'Title required';

    submitBtn.click();
    fixture.detectChanges();

    // TODO: figure out why error component doesn't show
  });

  it('should show delete button correctly', () => {
    expect(deleteBtn).toBeTruthy();
  });

  it('should call #resetAddForm when delete button clicked', () => {
    spyOn(component, 'resetAddForm');

    deleteBtn.click();
    fixture.detectChanges();

    expect(component.resetAddForm).toHaveBeenCalled();
  });

  it('#resetAddForm should clear input and emit when invoked', () => {
    component.title.setValue('Todo 1');
    spyOn(component.updateAddTodoFormVisibility, 'emit');

    component.resetAddForm();
    fixture.detectChanges();

    expect(component.title.value).toBeFalsy();
    expect(component.updateAddTodoFormVisibility.emit).toHaveBeenCalled();
  });
});
