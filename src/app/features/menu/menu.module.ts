import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class MenuModule { }
