import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../models/Netplis';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
@Input() public hero!: Film
  constructor() { }

  ngOnInit(): void {
  }

}
