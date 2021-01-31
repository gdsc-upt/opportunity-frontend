import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() public small = false;
    @Input() public disabled = false;
    @Input() public fullWidth = false;
    @Input() public loading = false;
    @Input() public label: string;
    @Input() public matIcon: string;
    @Output() public action = new EventEmitter<any>();
}
