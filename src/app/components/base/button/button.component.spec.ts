import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-wrapper-component',
  template: `
    <app-button testId="add-todo-btn">
      <div>{{ createButtonLabel }}</div>
    </app-button>
  `,
})
export class WrapperComponent {
  createButtonLabel = '';
}

describe('ButtonComponent Emit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
  });
  it('should emit on click', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const button = fixture.componentInstance;

    spyOn(button.clickEvent, 'emit');

    fixture.nativeElement
      .querySelector('button')
      .dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(button.clickEvent.emit).toHaveBeenCalled();
  });
});

describe('ButtonComponent Integration with Wrapper', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, ButtonComponent],
    });

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should display the projected content correctly', () => {
    expect(button.textContent).toEqual('');

    wrapper.createButtonLabel = 'Create';
    fixture.detectChanges();

    expect(button.textContent).toEqual(wrapper.createButtonLabel);
  });

  it('should add testId correctly', () => {
    expect(button.dataset['testId']).toEqual('add-todo-btn');
  });
});
