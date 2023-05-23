import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { SharedModule } from '~/app/components/shared/shared.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, SharedModule],
  exports: [MenuComponent],
})
export class MenuModule {}
