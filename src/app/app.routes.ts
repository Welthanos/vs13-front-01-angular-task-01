import { Routes } from '@angular/router';
import { LolMasteryComponent } from './lol-mastery/lol-mastery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'lol-mastery', component: LolMasteryComponent },
    { path: '**', component: PageNotFoundComponent },
];
