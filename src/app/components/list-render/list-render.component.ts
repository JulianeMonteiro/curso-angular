import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    {
      name: 'Docinho',
      type: 'Cat',
    },
    {
      name: 'Pandora',
      type: 'Dog',
    },
    {
      name: 'Alice',
      type: 'Cat',
    },
    {
      name: 'Mel',
      type: 'Dog',
    },
    {
      name: 'Bob',
      type: 'Horse',
    },
  ];
}
