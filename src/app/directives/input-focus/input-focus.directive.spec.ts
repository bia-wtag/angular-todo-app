import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFocusDirective } from './input-focus.directive';

describe('InputFocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  @Component({
    selector: 'app-test-component',
    template: ` <textarea appInputFocus></textarea> `,
  })
  class TestComponent {}

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [InputFocusDirective, TestComponent],
    }).createComponent(TestComponent);
  });

  it('should put focus on the component its applied on', () => {
    const element = fixture.nativeElement.querySelector('textarea');
    spyOn(element, 'focus');

    fixture.detectChanges();

    expect(element.focus).toHaveBeenCalled();
  });
});
