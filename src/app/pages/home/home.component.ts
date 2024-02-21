import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Bem-vindos à página do jogador Welthanos!';
  profile = {
    images: [
      '../../assets/profile-1.png',
      '../../assets/profile-2.png',
      '../../assets/elo.png'
    ]
  }
}
