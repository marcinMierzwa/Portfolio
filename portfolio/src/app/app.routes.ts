import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { SkillsComponent } from '../Components/skills/skills.component';
import { WorkComponent } from '../Components/work/work.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills',
  },
  {
    path: 'work',
    component: WorkComponent,
    title: 'Work',
  },
];
