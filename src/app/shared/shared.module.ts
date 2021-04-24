import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipComponent } from '@components/chip/chip.component';
import { OpportunityCardComponent } from '@components/opportunity-card/opportunity-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from '@components/banner/banner.component';

const components = [MenuComponent, ButtonComponent, ChipComponent, OpportunityCardComponent, BannerComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, RouterModule, ReactiveFormsModule, MatProgressSpinnerModule, MatIconModule],
    exports: [CommonModule, ReactiveFormsModule, MatProgressSpinnerModule, MatIconModule, ...components],
})
export class SharedModule {
}
