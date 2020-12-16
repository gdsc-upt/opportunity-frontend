import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
	declarations: [MenuComponent],
	imports: [CommonModule],
	exports: [MenuComponent],
})
export class SharedModule {}
