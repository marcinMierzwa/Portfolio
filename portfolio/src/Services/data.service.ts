import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Work = {id:number, project:string, src: string};

export type Skill = {id:number, skillName:string, src: string};

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
      src:'/assets/work/portfolio.png'
    },
    {
      id:6,
      project:'online shop',
      src:'/assets/work/LandingPage.png'
    }

  ]

  private skills: Skill[] = [
    {
      id: 1,
      skillName: "html",
      src:'/assets/skills/html.png'
    },
    {
      id: 2,
      skillName: "css",
      src:'/assets/skills/css.png'
    },
    {
      id: 3,
      skillName: "javascript",
      src:'/assets/skills/javascript.png'
    },
    {
      id: 4,
      skillName: "typescript",
      src:'/assets/skills/typescript.png'
    },
    {
      id: 5,
      skillName: "angular",
      src:'/assets/skills/angular.png'
    },
    {
      id: 6,
      skillName: "tailwind",
      src:'/assets/skills/tailwind.png'
    },
    {
      id: 7,
      skillName: "bootstrap",
      src:'/assets/skills/bootstrap.png'
    },
    {
      id: 8,
      skillName: "github",
      src:'/assets/skills/github.png'
    }
  ]

  private work$ = of(this.work) as Observable<Work[]>;

  private skills$ =of(this.skills) as Observable<Skill[]>;

  get getWork() {
    return this.work$
  }

  get getSkills() {
    return this.skills$
  }
  
}
