import { Component } from '@angular/core';
import { Character } from './shared/character.model';
import { Statistic } from './shared/statistic.model';
import { Attribute } from './shared/attribute.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character = new Character(
    "Test Character",
    5,
    1, // the characcter has one more level up to do
    '',
    [
      new Attribute('Strength', 3),
      new Attribute('Vitality', 1),
      new Attribute('Resistence', 1)
    ],
    []
  );
}
