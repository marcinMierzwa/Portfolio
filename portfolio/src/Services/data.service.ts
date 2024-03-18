import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Work = { id: number; project: string; src: string; };

export type Skill = { id: number; skillName: string; src: string; };

export type Project = { id: number; projectName: string; src: string; code: string; demo: string };


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private work: Work[] = [
    {
      id: 1,
      project: 'spreading windows',
      src: '/assets/work/SpreadingWindows.png',
    },
    {
      id: 2,
      project: 'landing page',
      src: '/assets/work/LandingPage.png',
    },
    {
      id: 3,
      project: 'change varibles',
      src: '/assets/work/changeVariables.png',
    },
    {
      id: 4,
      project: 'virtual drummer',
      src: '/assets/work/virtualDrummer.png',
    },
    {
      id: 5,
      project: 'portfolio',
      src: '/assets/work/portfolio.png',
    },
    {
      id: 6,
      project: 'online shop',
      src: '/assets/work/LandingPage.png',
    },
  ];

  private skills: Skill[] = [
    {
      id: 1,
      skillName: 'html',
      src: '/assets/skills/html.png',
    },
    {
      id: 2,
      skillName: 'css',
      src: '/assets/skills/css.png',
    },
    {
      id: 3,
      skillName: 'javascript',
      src: '/assets/skills/javascript.png',
    },
    {
      id: 4,
      skillName: 'typescript',
      src: '/assets/skills/typescript.png',
    },
    {
      id: 5,
      skillName: 'angular',
      src: '/assets/skills/angular.png',
    },
    {
      id: 6,
      skillName: 'tailwind',
      src: '/assets/skills/tailwind.png',
    },
  ];

  private projects: Project[] = [
    {
      id: 1,
      projectName: 'Panel Wider',
      src: '/assets/projects/panel-wider 1300.jpg',
      code: 'https://github.com/marcinMierzwa/Spreading-Window',
      demo: 'marcinmierzwa.github.io/Spreading-Window/',
    },
    {
      id: 2,
      projectName: 'Landing Page',
      src: '/assets/projects/landingPage 1300.jpg',
      code: 'https://github.com/marcinMierzwa/Landing-Page',
      demo: 'marcinmierzwa.github.io/Landing-Page/',
    },
    {
      id: 3,
      projectName: 'Change Variables',
      src: '/assets/projects/change-variables 1300.jpg',
      code: 'https://github.com/marcinMierzwa/Change-Variables-CSS-with-JS',
      demo: 'https://marcinmierzwa.github.io/Change-Variables-CSS-with-JS/',
    },
    {
      id: 4,
      projectName: 'Portfolio',
      src: '/assets/projects/portfolio 1300.jpg',
      code: 'https://github.com/marcinMierzwa/Change-Variables-CSS-with-JS',
      demo: 'https://marcinmierzwa.github.io/Change-Variables-CSS-with-JS/',
    },
    {
      id: 5,
      projectName: 'Virtal Drummer',
      src: '/assets/projects/virtual-drummer 1300.jpg',
      code: 'https://github.com/marcinMierzwa/Virtual-Drummer',
      demo: 'marcinmierzwa.github.io/Virtual-Drummer/',
    },
  ];


  private work$ = of(this.work) as Observable<Work[]>;

  private skills$ = of(this.skills) as Observable<Skill[]>;

  private projects$ = of(this.projects) as Observable<Project[]>;

  get getWork() {
    return this.work$;
  }

  get getSkills() {
    return this.skills$;
  }

  get getProjects() {
    return this.projects$;
  }
}
