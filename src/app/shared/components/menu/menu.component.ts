import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public hasShadow = false;

    public menuItems = [
        {
            id: 2,
            name: 'Despre',
            route: '',
        },
        {
            id: 3,
            name: 'Oportunități',
            route: '/oportunitati',
        },
        {
            id: 4,
            name: 'Adaugă oportunitate',
            route: '/adauga-oportunitate',
            type: 'button',
        },
    ];

    public constructor() {}

    public ngOnInit(): void {
        window.addEventListener('scroll', () => this.setMenuShadow(), true);
    }

    public setMenuShadow(): void {
        const scrollPosition = window.scrollY;
        this.hasShadow = scrollPosition > 20;
    }
}
