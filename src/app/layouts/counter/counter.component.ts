import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() kda!: number;
  @Input() kills!: number;
  @Input() deaths!: number;
  @Input() assistences!: number;
  @Output() kdaChange = new EventEmitter<number>();
  @Output() killsChange = new EventEmitter<number>();
  @Output() deathsChange = new EventEmitter<number>();
  @Output() assistencesChange = new EventEmitter<number>();

  kdaResult() { this.calculateKDA(this.kills, this.deaths, this.assistences) }
  incrementKill() { this.kill(+1) }
  incrementDeath() { this.die(+1) }
  incrementAssistence() { this.assist(+1) }

  kill(delta: number) {
    this.kills = this.kills + delta;
    this.killsChange.emit(this.kills);
    this.calculateKDA(this.kills, this.deaths, this.assistences);
  }
  die(delta: number) {
    this.deaths = this.deaths + delta;
    this.deathsChange.emit(this.deaths);
    this.calculateKDA(this.kills, this.deaths, this.assistences);
  }
  assist(delta: number) {
    this.assistences = this.assistences + delta;
    this.assistencesChange.emit(this.assistences);
    this.calculateKDA(this.kills, this.deaths, this.assistences);
  }
  calculateKDA(kills: number, deaths: number, assistences: number) {
    if (deaths == 0) this.kda = kills + assistences;
    else this.kda = ((kills + assistences) / deaths);
    this.kdaChange.emit(this.kda);
  }
}
