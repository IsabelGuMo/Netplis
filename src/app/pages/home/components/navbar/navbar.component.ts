import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../../models/Netplis';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() public navbar!: Navbar
  constructor() { }

  ngOnInit(): void {
  }

}
