import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'about',component: AboutComponent},
    {path:'servicios', component: ServiciosComponent}
];

