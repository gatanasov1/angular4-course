import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../shared/character.model";
import { Attribute } from "../shared/attribute.model";

@Component({
  selector: 'app-character-screen',
  templateUrl: './character-screen.component.html',
  styleUrls: ['./character-screen.component.css']
})
export class CharacterScreenComponent implements OnInit {

  @Input() character: Character;
  changes = 0;
  constructor() { }

  ngOnInit() {
  }

  canIncrement() {
    var totalChanges = 0;

    for (let attribute of this.character.attributes) {
        totalChanges += attribute.getChangeDifference();
    }

    return totalChanges <= (this.character.level + this.character.levelUps);
  }

  canDecrement() {

  }

  incrementAttribute(attribute) {
    attribute.incrementValue();
  }

  decrementAttribute(attribute) {
    attribute.decrementValue();
  }
}
