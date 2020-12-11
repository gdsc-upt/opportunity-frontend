import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = [
    {
      id: 1,
      name: 'OpportUNITY',
      route:'/opportUNITY'
    },

    {
      id: 2,
      name: 'Despre',
      route: '/despre'
    },

    {
      id: 3,
      name: 'Vreau să mă implic',
      route: '/vreau_sa_ma_implic'
    },

    {
      id: 4,
      name: 'Echipa',
      route: '/echipa'
    },

    {
      id: 5,
      name: 'Contact',
      route: '/contact'
    }

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
