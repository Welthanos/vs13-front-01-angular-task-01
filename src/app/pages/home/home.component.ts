import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }

  title = 'Bem-vindos à página do jogador Welthanos!';
  profile = { images: [] };

  ngOnInit() {
    this.http.get<any>('../../../assets/data.json').subscribe((data) => {
      this.profile = data.profile;
      console.log(this.profile.images);
    });
  }
}
