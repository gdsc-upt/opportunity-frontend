import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [MenuComponent, ContactComponent],
    imports: [CommonModule, RouterModule],
    exports: [MenuComponent, ContactComponent]
})
export class SharedModule {
}
