import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Juliane';
  age: number = 30;
  job: string = 'Programadora';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = { name: 'Tiggo 5x', year: 2020 };
}
