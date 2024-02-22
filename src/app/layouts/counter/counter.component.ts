import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() kills!: number;
  @Input() deaths!: number;
  @Input() assistences!: number;
  @Output() killsChange = new EventEmitter<number>();
  @Output() deathsChange = new EventEmitter<number>();
  @Output() assistencesChange = new EventEmitter<number>();

  incrementKill() { this.kill(+1) }
  incrementDeath() { this.die(+1) }
  incrementAssistence() { this.assist(+1) }

  kill(delta: number) {
    this.kills = this.kills + delta;
    this.killsChange.emit(this.kills);
  }
  die(delta: number) {
    this.deaths = this.deaths + delta;
    this.deathsChange.emit(this.deaths);
  }
  assist(delta: number) {
    this.assistences = this.assistences + delta;
    this.assistencesChange.emit(this.assistences);
  }
}
