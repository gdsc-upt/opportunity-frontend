import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() public small = false;
    @Input() public disabled = false;
    @Input() public loading = false;
    @Input() public label: string;
    @Output() public action = new EventEmitter<any>();

    public constructor() {}

    public ngOnInit(): void {}
}
