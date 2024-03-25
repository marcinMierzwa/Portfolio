import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SliderComponent, RouterLink]
})
export class HomeComponent {

}
