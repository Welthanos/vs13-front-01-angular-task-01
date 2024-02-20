import { Routes } from '@angular/router';
import { LolMasteryComponent } from './lol-mastery/lol-mastery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { AnimesComponent } from './animes/animes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/lol-mastery', pathMatch: 'full' },
    { path: 'lol-mastery', component: LolMasteryComponent },
    { path: 'counter', component: CounterPageComponent },
    { path: 'animes', component: AnimesComponent },
    { path: '**', component: PageNotFoundComponent },
];
