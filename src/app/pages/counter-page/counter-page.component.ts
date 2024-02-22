import { Component } from '@angular/core';
import { CounterComponent } from '../../layouts/counter/counter.component';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss'
})
export class CounterPageComponent {
  kills = 0;
  deaths = 0;
  assistences = 0;
}
