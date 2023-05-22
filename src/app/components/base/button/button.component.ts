import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [attr.data-test-id]="testId" (click)="onClick()">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() testId = '';
  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
