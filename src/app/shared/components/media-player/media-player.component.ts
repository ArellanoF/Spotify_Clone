import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://www.periodicoelbuscador.com/asset/thumbnail,992,558,center,center//media/periodicoelbuscador/images/2017/01/10/plastik_sheetOne1.jpg',
    album: "Plastikman",
    name: "Hawtin",
    url: '',
    _id: 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
