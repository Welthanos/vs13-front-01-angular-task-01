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
  counter = 0;
}
