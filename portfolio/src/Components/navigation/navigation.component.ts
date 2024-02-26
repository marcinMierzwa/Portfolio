import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css',
    imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class NavigationComponent {

isMobileView: boolean = false;

toggleMobileView() {
    this.isMobileView = !this.isMobileView;
    }
    

}
