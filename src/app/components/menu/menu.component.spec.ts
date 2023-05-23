import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { ButtonComponent } from '~/app/components/shared/button/button.component';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run `showAddTodo` when add todo button clicked', () => {
    spyOn(component, 'showAddTodo');

    const button = fixture.debugElement.query(
      By.css('[data-test-id="create-todo-btn"]')
    );
    button.triggerEventHandler('click', null);

    expect(component.showAddTodo).toHaveBeenCalled();
  });
});
