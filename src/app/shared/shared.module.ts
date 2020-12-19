import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactComponent } from './components/contact/contact.component';

const matImports = [MatProgressSpinnerModule];

@NgModule({
    declarations: [MenuComponent, ContactComponent, ButtonComponent],
    imports: [CommonModule, RouterModule, ...matImports],
    exports: [MenuComponent, ContactComponent, ButtonComponent]
})
export class SharedModule {
}
