import { Component, input} from '@angular/core';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {


  isToasterVisible = input<boolean>();
  

}