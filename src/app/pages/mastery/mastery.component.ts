import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mastery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mastery.component.html',
  styleUrl: './mastery.component.scss'
})
export class MasteryComponent {
  title = 'Top 3 Maestrias de Welthanos';
  champions = [
    {
      image: '../../assets/akali.png',
    },
    {
      image: '../../assets/diana.png',
    },
    {
      image: '../../assets/khazix.png',
    }
  ]
}
