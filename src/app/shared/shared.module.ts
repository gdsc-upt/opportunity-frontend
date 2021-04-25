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
import { OpportunitiesListComponent } from '@components/opportunities-list/opportunities-list.component';
import { FooterComponent } from '@components/footer/footer.component';

const components = [
    MenuComponent,
    ButtonComponent,
    ChipComponent,
    OpportunityCardComponent,
    OpportunitiesListComponent,
    BannerComponent,
    FooterComponent,
];

const matImports = [MatProgressSpinnerModule, MatIconModule];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, RouterModule, ReactiveFormsModule, ...matImports],
    exports: [CommonModule, RouterModule, ReactiveFormsModule, ...matImports, ...components],
})
export class SharedModule {}
