import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show;
  }

  names: string = '';

  toDisplay = false;

  handleClick() {
    this.toDisplay = !this.toDisplay;
    this.names = 'GeeksForGeeks';
  }
}
