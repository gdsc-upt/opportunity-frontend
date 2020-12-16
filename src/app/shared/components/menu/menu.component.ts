import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	public menuItems = [
		{ id: 1, name: 'OpportUNITY', route: '' },
		{ id: 2, name: 'Despre', route: '' },
		{ id: 3, name: 'Oportunitati', route: '/oportunitati' },
		{ id: 4, name: 'Adauga oportunitate', route: '/adauga-oportunitate' },
	];

	constructor() {}

	public ngOnInit(): void {}
}
