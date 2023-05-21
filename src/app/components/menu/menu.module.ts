import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ButtonComponent } from '~/app/components/base/button/button.component';

@NgModule({
  declarations: [MenuComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [MenuComponent],
})
export class MenuModule {}
