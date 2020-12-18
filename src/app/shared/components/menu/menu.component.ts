import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public menuItems = [
        {
            id: 1,
            name: 'OpportUNITY',
            route: '',
            type: 'InternalLink',
        },
        {
            id: 2,
            name: 'Despre',
            route: '',
            type: 'InternalLink',
        },
        {
            id: 3,
            name: 'Oportunitati',
            route: '/oportunitati',
            type: 'InternalLink',
        },
        {
            id: 4,
            name: 'Adauga oportunitate',
            route: '/adauga-oportunitate',
            type: 'InternalLink',
        },
    ];

    public constructor() {}

    public ngOnInit(): void {}
}
