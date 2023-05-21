import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="onClick()">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
