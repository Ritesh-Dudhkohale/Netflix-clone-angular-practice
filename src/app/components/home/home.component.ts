import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MovieCarousalsComponent } from '../reusable/movie-carousals/movie-carousals.component';
import { videoModel } from '../reusable/models/video-content.interface';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieCarousalsComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}

  allMovies: videoModel[] = [];
  popularMovies: videoModel[] = [];
  upComingMovies: videoModel[] = [];
  tvShows: videoModel[] = [];
  topRated: videoModel[] = [];

  ngOnInit() {
    this.movieService.getMovies().subscribe((res) => {
      this.allMovies = (res as any).results;
    });

    this.movieService.getPopularMovies().subscribe((res) => {
      this.popularMovies = (res as any).results;
    });

    this.movieService.getTvShows().subscribe((res) => {
      console.log(res)
      this.tvShows = (res as any).results;
    });

    this.movieService.getUpcomingMovies().subscribe((res) => {
      this.upComingMovies = (res as any).results;
    });

    this.movieService.getTopRated().subscribe((res) => {
      this.topRated = (res as any).results;
    });
  }
}
