import { Component, Input, OnInit } from '@angular/core';
import { Film, Hero } from '../../models/Netplis';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
@Input() public hero!: Hero
  constructor() { }

  ngOnInit(): void {
  }

}
