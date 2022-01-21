import { Component, OnInit } from '@angular/core';
import { Netplis } from './models/Netplis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public netPlis!: Netplis;
  constructor() { 
    this.netPlis = {
    navbar: {
      title: "NetPlis",
      logo: {
        src: "../../../assets/images/img-netplis/logo.png",
        alt: "Netplis Logo"
      }
    },
    hero: {
      title: "Top 5 global",
      imgGallery: [
        {
          src: "../../../assets/images/img-netplis/brazen.jpg",
          alt: "Brazen"
        },
        {
          src: "../../../assets/images/img-netplis/don't_look_up.jpg",
          alt: "Don't look up"
        },
        {
          src: "../../../assets/images/img-netplis/just_go_whith_it.jpg",
          alt: "Just go with it"
        },
        {
          src: "../../../assets/images/img-netplis/mother_android.jpg",
          alt: "Mother/Android"
        },
        {
          src: "../../../assets/images/img-netplis/pets2.jpg",
          alt: "Pets2"
        }
      ]
    }
    };
    film: {
      title: ""
      imgGallery: [{
        src: "",
        alt: ""
      }]
    }
  
  }

  ngOnInit(): void {
  }

}
