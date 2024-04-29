import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MovieCarousalsComponent } from '../reusable/movie-carousals/movie-carousals.component';
import { videoModel } from '../reusable/models/video-content.interface';

interface MovieResponse {
  results: any[]; // Change 'any[]' to the actual type of your movie results
}

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    MovieCarousalsComponent,
    BannerComponent,
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  constructor(private movieService: MovieService) {}

  allMovies: videoModel[] = [];
  popularMovies: videoModel[] = [];
  upComingMovies: videoModel[] = [];
  tvShows: videoModel[] = [];
  topRated: videoModel[] = [];

  ngOnInit() {
    this.movieService.getMovies().subscribe((res) => {
      console.log(res);
      this.allMovies = (res as any).results;
    });

    this.movieService.getPopularMovies().subscribe((res) => {
      console.log(res);
      this.popularMovies = (res as any).results;
    });

    this.movieService.getTvShows().subscribe((res) => {
      console.log(res);
      this.tvShows = (res as any).results;
    });

    this.movieService.getUpcomingMovies().subscribe((res) => {
      console.log(res);
      this.upComingMovies = (res as any).results;
    });

    this.movieService.getTopRated().subscribe((res) => {
      console.log(res);
      this.topRated = (res as any).results;
    });
  }
}
