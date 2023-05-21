import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  createButtonLabel = 'Create';

  showAddTodo() {
    console.log('button clicked');
  }
}
