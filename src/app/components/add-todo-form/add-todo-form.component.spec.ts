import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoFormComponent } from './add-todo-form.component';
import { SharedModule } from '~/app/components/shared/shared.module';

describe('AddTodoFormComponent', () => {
  let component: AddTodoFormComponent;
  let fixture: ComponentFixture<AddTodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoFormComponent],
      imports: [FormsModule, ReactiveFormsModule, SharedModule],
    });
    fixture = TestBed.createComponent(AddTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
