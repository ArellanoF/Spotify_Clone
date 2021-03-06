import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackService } from '@modules/tracks/services/track.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
   mainMenu:{
     defaultOptions: Array<any>,
     accessLink: Array<any>
   } = { defaultOptions:[], accessLink: []}


   customOptions: Array<any> =[]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: "uil uil-estate",
        router: ["/", "auth"]
      },
      {
        name: 'Buscar',
        icon: "uil uil-search",
        router: ["/", "history"]
      },
      {
        name: 'Tu bliblioteca',
        icon: "uil uil-chart",
        router: ["/", "favorites"],
       
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: "uil-plus-square",
        router: ["/", "list"]
      },
      {
        name: 'Canciones que me gustan',
        icon: "uil-heart-medical"
        
      }
    ]
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ["/"]
      },
      {
        name: 'Mi lista º2',
        router: ["/"]
      },
      {
        name: 'Mi lista º3',
        router: ["/"]
      },
      {
        name: 'Mi lista º4',
        router: ["/"]
      }
    ];
    
    
}
}
