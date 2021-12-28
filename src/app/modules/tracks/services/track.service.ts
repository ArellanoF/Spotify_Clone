import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TracksModule } from '../tracks.module';
import { TrackModel } from '@core/models/tracks.models';



  
  
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) {
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]>{
    return new Promise<TrackModel[]>((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !=id)
    resolve(listTmp)
  })
}

  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
        return data;
      })
    )
  }
  getAllRandom$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
       mergeMap(({ data }: any) => this.skipById(data,1)),
      
        // map((dataRevertida) => {
        //   return dataRevertida.filter((track: TrackModel) => track._id != 1)
          
        // })
    )
}
}
