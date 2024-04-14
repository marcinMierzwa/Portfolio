import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  template: `
    <app-parent></app-parent>
    <router-outlet />
  `,
  styles:[],
})
export class AppComponent {
  title = 'InputAndOutput';
}
