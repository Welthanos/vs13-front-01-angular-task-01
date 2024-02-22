import { Component } from '@angular/core';
import { KDACalculatorComponent } from '../../layouts/kda-calculator/kda-calculator.component';

@Component({
  selector: 'app-kda-page',
  standalone: true,
  imports: [KDACalculatorComponent],
  templateUrl: './kda.component.html',
  styleUrl: './kda.component.scss'
})
export class KDAComponent {
  kda = 0;
  kills = 0;
  deaths = 0;
  assistences = 0;
}
