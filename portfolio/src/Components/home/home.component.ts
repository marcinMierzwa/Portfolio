import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SliderComponent]
})
export class HomeComponent {

}
