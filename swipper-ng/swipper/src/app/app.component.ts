import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal} from '@angular/core';import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import function to register Swiper custom elements
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions} from 'swiper/types';

// register Swiper custom elements
register();


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

swiperElement = signal<SwiperContainer |null>(null);

  ngOnInit(): void {

    const swiperElementConstructor =document.querySelector('swiper-container');

    const swiperOptions: SwiperOptions = {

      grabCursor:true,
      cubeEffect:{
        shadow: true,
        slideShadows: true,
        shadowOffset: 60,
        shadowScale: 0.94,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  



    }
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }


}
