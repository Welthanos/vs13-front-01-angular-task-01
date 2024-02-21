import { Routes } from '@angular/router';
import { MasteryComponent } from './pages/mastery/mastery.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { AnimesComponent } from './pages/animes/animes.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'mastery', component: MasteryComponent },
    { path: 'counter', component: CounterPageComponent },
    { path: 'animes', component: AnimesComponent },
    { path: '**', component: PageNotFoundComponent },
];
