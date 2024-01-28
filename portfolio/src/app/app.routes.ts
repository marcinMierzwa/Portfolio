import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',  
    title: 'Home'
},
{
    path: 'home',
    component: HomeComponent,
}
];
