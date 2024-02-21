import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-child',
  standalone: true,
  imports: [],
  templateUrl: './main-child.component.html',
  styleUrl: './main-child.component.scss'
})
export class MainChildComponent {
  @Input() backgroundFromMain: string = '';
}
