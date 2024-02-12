import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Work = {id:number, project:string, src: string};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private work: Work[] = [
    {
      id:1,
      project:'spreading windows',
      src:'/assets/work/SpreadingWindows.png'
    },
    {
      id:2,
      project:'landing page',
      src:'/assets/work/LandingPage.png'
    },
    {
      id:3,
      project:'change varibles',
      src:'/assets/work/changeVariables.png'
    },
    {
      id:4,
      project:'virtual drummer',
      src:'/assets/work/virtualDrummer.png'
    },
    {
      id:5,
      project:'portfolio',
      src:'/assets/work/SpreadingWindows.png'
    },
    {
      id:6,
      project:'online shop',
      src:'/assets/work/LandingPage.png'
    }

  ]
  private work$ = of(this.work) as Observable<Work[]>

  get getWork(){
    return this.work$
  }
}
