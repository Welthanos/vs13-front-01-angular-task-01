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
  title = 'Top 3 Maestrias de Welthanos - League Of Legends';
  champions = [
    {
      name: 'Akali',
      image: '../../assets/akali.png',
    },
    {
      name: 'Diana',
      image: '../../assets/diana.png',
    },
    {
      name: "Kha'Zix",
      image: '../../assets/khazix.png',
    }
  ]
}
