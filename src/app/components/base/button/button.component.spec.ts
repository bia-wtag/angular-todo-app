import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-wrapper-component',
  template: `
    <app-button>
      <div>{{ createButtonLabel }}</div>
    </app-button>
  `,
})
export class WrapperComponent {
  createButtonLabel = '';
}

describe('ButtonComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, ButtonComponent],
    });
  });

  it('should display the projected content correctly', () => {
    const fixture = TestBed.createComponent(WrapperComponent);
    const wrapper = fixture.componentInstance;

    const projectedElement = fixture.nativeElement.querySelector('button');
    expect(projectedElement.textContent).toEqual('');

    wrapper.createButtonLabel = 'Create';
    fixture.detectChanges();

    expect(projectedElement.textContent).toEqual(wrapper.createButtonLabel);
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
