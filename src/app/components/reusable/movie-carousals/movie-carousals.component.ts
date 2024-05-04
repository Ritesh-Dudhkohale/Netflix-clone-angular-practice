import { NgFor, NgForOf, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { animate, style, transition, trigger } from '@angular/animations';
import { DescriptionPipe } from '../../../pipes/description/description.pipe';
import { ImagePipe } from '../../../pipes/image/image.pipe';
import { videoModel } from '../models/video-content.interface';

@Component({
  selector: 'app-movie-carousals',
  templateUrl: './movie-carousals.component.html',
  styleUrls: ['./movie-carousals.component.css'],
  standalone: true,
  imports: [NgFor, DescriptionPipe, ImagePipe, NgIf],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MovieCarousalsComponent implements OnInit, AfterViewInit {
  @Input() sectionId!: string;
  @Input() videoContents: videoModel[] = [];
  @Input() title!: string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  selectedContent: string | null = null;
  constructor() {}
  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnInit() {}

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }

  setHoverMovie(movie: videoModel) {
    this.selectedContent = movie.title ?? (movie as any).name;
  }

  clearHoverMovie() {
    this.selectedContent = null;
  }
}
