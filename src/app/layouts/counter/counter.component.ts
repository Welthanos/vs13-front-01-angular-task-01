import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();
  increment() {
    this.count(+1);
  }
  decrement() {
    if (this.counter > 0) this.count(-1);
  }
  count(delta: number) {
    this.counter = this.counter + delta;
    this.counterChange.emit(this.counter);
  }
}
