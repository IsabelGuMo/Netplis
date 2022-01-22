import { Component, OnInit } from '@angular/core';
import { Netplis, Film } from './models/Netplis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public netPlis!: Netplis;
  public sciFi!: Film;
  public terror!: Film

  constructor() { 
    this.netPlis = {
      navbar: {
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
    },
   this.sciFi = {
      title: "Sci-Fi Series",
      imgGallery: [
        {
          src: "../../../assets/images/sci_fi/archivo-81.jpg",
          alt: "Archivo 81"
        },
        {
          src: "../../../assets/images/sci_fi/Katla.jpg",
          alt: "Katla"
        },
        {
          src: "../../../assets/images/sci_fi/mar.jpg",
          alt: "Mar de la tranquilidad"
        },
        {
          src: "../../../assets/images/sci_fi/stranger.jpg",
          alt: "Stranger Things"
        },
        {
          src: "../../../assets/images/sci_fi/Umbrella.jpg",
          alt: "Umbrella Academy"
        }
      ]
    }
    this.terror = {
      title: "Terror Series",
      imgGallery: [
        {
          src: "../../../assets/images/terror/blackM.jpeg",
          alt: "Black Mirror"
        },
        {
          src: "../../../assets/images/terror/Dark.jpg",
          alt: "Dark"
        },
        {
          src: "../../../assets/images/terror/Misa.jpg",
          alt: "Misa de media noche"
        },
        {
          src: "../../../assets/images/terror/haunting.jpg",
          alt: "Haunting of bly manor"
        },
        {
          src: "../../../assets/images/terror/you.jpg",
          alt: "You"
        }
      ]
    }
  
  }

  ngOnInit(): void {
  }

}
