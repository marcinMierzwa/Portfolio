import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';
// import function to register Swiper custom elements

import { SwiperContainer } from 'swiper/element/bundle';
import { Project } from '../../Services/data.service';
import { CommonModule } from '@angular/common';
import { SwiperOptions} from 'swiper/types';


@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperSliderComponent implements OnInit {

  @Input() reciveProjects$!: Observable<Project[]>;

  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {

    const swiperElementConstructor = document.querySelector('swiper-container');

    const swiperOptions: SwiperOptions = {
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 60,
        shadowScale: .8,
    },
    breakpoints: {
      1023: {
        navigation: {
          // hideOnClick: true,
          enabled:false
        }
      },
      1024: {
        navigation: {
          // hideOnClick: true,
          enabled:true
        }
      },


    },
    on: {
      init() {
        // ...
      },
    
    }

  }





    

    Object.assign(swiperElementConstructor!, swiperOptions);

    this.swiperElement.set(swiperElementConstructor as SwiperContainer);

    this.swiperElement()?.initialize();
  }

}
