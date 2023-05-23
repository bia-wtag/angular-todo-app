import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from 'src/types/components';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="buttonType"
      [attr.data-test-id]="testId"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: ['button { cursor: pointer; }'],
})
export class ButtonComponent {
  @Input() testId = '';
  @Input() buttonType: ButtonType = 'button';
  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
