import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  createButtonLabel = 'Create';

  @Input() addTodoFormVisible = false;
  @Output() updateAddTodoFormVisibility = new EventEmitter<boolean>();

  showAddTodo() {
    this.updateAddTodoFormVisibility.emit(!this.addTodoFormVisible);
  }
}
