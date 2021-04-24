import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ChipComponent } from './components/chip/chip.component';
import { OpportunityCardComponent } from './components/opportunity-card/opportunity-card.component';

const matImports = [MatProgressSpinnerModule, MatIconModule];

@NgModule({
    declarations: [MenuComponent, ButtonComponent, ChipComponent, OpportunityCardComponent],
    imports: [CommonModule, RouterModule, ...matImports, ReactiveFormsModule],
    exports: [CommonModule, ...matImports, MenuComponent, ButtonComponent, ChipComponent, OpportunityCardComponent]
})
export class SharedModule {}
