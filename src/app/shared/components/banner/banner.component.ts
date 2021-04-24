import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
    @Input() heading: string;
    @Input() subHeading: string;
    @Input() buttonText: string;
    @Input() link: any[] | string | null | undefined;
}
