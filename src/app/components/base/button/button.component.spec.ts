import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ButtonComponent } from './button.component';

// dummy component to wrap button and pass projected content
@Component({
  selector: 'app-wrapper-component',
  template: `
    <app-button (clickEvent)="changeClickedValue()">
      <div class="projected-content">{{ createButtonLabel }}</div>
    </app-button>
  `,
})
export class WrapperComponent {
  createButtonLabel = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeClickedValue() {}
}

describe('ButtonComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should display the projected content correctly', () => {
    const projectedDiv: HTMLDivElement = fixture.debugElement.query(
      By.css('.projected-content')
    ).nativeElement;
    expect(projectedDiv.textContent).toEqual('');

    wrapper.createButtonLabel = 'Create';
    fixture.detectChanges();
    expect(projectedDiv.textContent).toEqual(wrapper.createButtonLabel);
  });

  it('should emit to parent component on click', fakeAsync(() => {
    spyOn(wrapper, 'changeClickedValue');

    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    button.click();
    tick();
    expect(wrapper.changeClickedValue).toHaveBeenCalled();
  }));
});
