import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos: any[] = [];
  loading: boolean;

  constructor(private http: HttpClient,
    private spotifyService: SpotifyService) {

      this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevosLanzamientos = data;
        this.loading = false;
      });
          
  }

  ngOnInit() {
  }

}
