import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { SwiperSliderComponent } from "../swiper-slider/swiper-slider.component";


@Component({
    selector: 'app-work',
    standalone: true,
    templateUrl: './work.component.html',
    styleUrl: './work.component.css',
    imports: [CommonModule, SwiperSliderComponent]
})
export class WorkComponent {

  data:DataService = inject(DataService)

  projects$ = this.data.getProjects;

}
