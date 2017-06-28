import { Statistic } from '../shared/statistic.model';
import { Attribute } from '../shared/attribute.model';


export class Character {
  constructor(
    public name: string,
    public level: number,
    public levelUps: number,
    public imageUrl: string,
    public attributes: Attribute[],
    public statistics: Statistic[]
  ){}
}
