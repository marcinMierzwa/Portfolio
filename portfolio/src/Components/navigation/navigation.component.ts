import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ActiveLink, DataService } from '../../Services/data.service';

const ul = document.querySelector('.navigation-list');

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavigationComponent implements OnInit{

  isMobileView: boolean = false;

  dataService:DataService = inject(DataService);

  activeLinks!:ActiveLink[];

  ngOnInit(): void {
    this.dataService.getActiveLinks.subscribe((values:ActiveLink[]) => this.activeLinks = values);
  }

  toggleMobileView() {
    this.isMobileView = !this.isMobileView;
  }

  onRouterLinkActive(isAvtive: boolean): void{
  }

  getLinkName(event: Event): void{
    let linkName = ((event.target as HTMLLinkElement).textContent)?.toLocaleLowerCase();
    console.log(linkName);
    
  }



}
