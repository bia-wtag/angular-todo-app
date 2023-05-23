import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addTodoFormVisible = false;

  updateAddTodoFormVisibility(updatedVisibility: boolean) {
    this.addTodoFormVisible = updatedVisibility;
  }
}
