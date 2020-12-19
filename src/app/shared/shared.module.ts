import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

const matImports = [MatProgressSpinnerModule];

@NgModule({
    declarations: [MenuComponent, ButtonComponent],
    imports: [CommonModule, RouterModule, ...matImports, ReactiveFormsModule],
    exports: [MenuComponent, ButtonComponent],
})
export class SharedModule {}
