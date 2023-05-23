import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-wrapper-component',
  template: `
    <app-button testId="create-todo-btn">
      <div>{{ createButtonLabel }}</div>
    </app-button>
  `,
})
export class WrapperComponent {
  createButtonLabel = '';
}

@NgModule({
  declarations: [WrapperComponent],
  imports: [SharedModule],
})
export class WrapperModule {}

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
    expect(button.dataset['testId']).toEqual('create-todo-btn');
  });
});
