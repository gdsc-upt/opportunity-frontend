import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ChipComponent } from './components/chip/chip.component';

const matImports = [MatProgressSpinnerModule, MatIconModule];

@NgModule({
    declarations: [MenuComponent, ButtonComponent, ChipComponent],
    imports: [CommonModule, RouterModule, ...matImports, ReactiveFormsModule],
    exports: [CommonModule, ...matImports, MenuComponent, ButtonComponent, ChipComponent]
})
export class SharedModule {}
