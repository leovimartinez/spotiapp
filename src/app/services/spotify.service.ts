import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { 
    console.log('Spotify Service listo!!');
   }

   getQuery( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAjhGvFwv621LhJTP4i_A9QSKIOxlQa7StpcvkETSS0IFj-2jul2FYnNhibWh8VlV2hTkmNQVjIigFLt8s'
    });

    return this.httpClient.get(url, {headers});
   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?country=MX')
            .pipe( map( data => data['albums'].items) );
   }

   getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist`)
            .pipe( map( data => data['artists'].items) );
            
   }

   getArtista(id: string){

    return this.getQuery(`artists/${id}`);
            //.pipe( map( data => data['artists'].items) );
            
   }
}
