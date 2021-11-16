import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover:'https://www.periodicoelbuscador.com/asset/thumbnail,992,558,center,center//media/periodicoelbuscador/images/2017/01/10/plastik_sheetOne1.jpg',
    album:"Plastikman",
    name:"Hawtin"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
