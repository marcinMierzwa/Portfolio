import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  data:DataService = inject(DataService)

  projects$ = this.data.getWork

}
