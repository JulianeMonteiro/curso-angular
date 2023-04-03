import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: 'Docinho',
      type: 'Cat',
      age: 3,
    },
    {
      name: 'Pandora',
      type: 'Dog',
      age: 4,
    },
    {
      name: 'Alice',
      type: 'Cat',
      age: 9,
    },
    {
      name: 'Mel',
      type: 'Dog',
      age: 6,
    },
    {
      name: 'Bob',
      type: 'Horse',
      age: 4,
    },
    {
      name: 'Catie',
      type: 'Fish',
      age: 2,
    },
  ];

  animal: Animal = {
    name: 'Alguma coisa',
    type: 'Outra coisa',
    age: 13,
  };

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s).`;
  }
}
