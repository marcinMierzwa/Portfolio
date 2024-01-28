import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "../Components/navigation/navigation.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { SideBarComponent } from "../Components/side-bar/side-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent, SideBarComponent, NavigationComponent]
})
export class AppComponent {
  title = 'portfolio';
}
