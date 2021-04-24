import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() small = false;
    @Input() disabled = false;
    @Input() fullWidth = false;
    @Input() loading = false;
    @Input() label: string;
    @Input() matIcon: string;
    @Output() action = new EventEmitter<any>();
}
