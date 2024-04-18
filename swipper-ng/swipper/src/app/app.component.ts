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

imageNumbers = [1, 2, 3, 4 ];

swiperElement = signal<SwiperContainer |null>(null);

  ngOnInit(): void {

    const swiperElementConstructor =document.querySelector('swiper-container');

    const swiperOptions: SwiperOptions = {
      // loop: true,
      slidesPerView: 1,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

      },
  



    }
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();


  }


}

// `<div class=${className}>
//           <span class="number">${index + 1}</span>
//           <span class="line"></span>
//           </div>`
