import { Component } from '@angular/core';
import { MainChildComponent } from '../../layouts/main-child/main-child.component';
import { MainOtherChildComponent } from '../../layouts/main-other-child/main-other-child.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainChildComponent, MainOtherChildComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  backgroundForChild = '';
  descriptionFromChild: string = '';

  ngOnInit() {
    this.backgroundForChild = '../../assets/background.png';
  }

  receiveDescription(description: string) {
    this.descriptionFromChild = description;
  }
}
