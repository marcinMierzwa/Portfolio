import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { SkillsComponent } from '../Components/skills/skills.component';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',  
    title: 'Home'
},
{
    path: 'home',
    // component: HomeComponent,
    component: SkillsComponent,

},
{
path: 'about',
component: AboutComponent,
}

];
