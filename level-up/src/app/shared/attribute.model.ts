export class Attribute{

  public modifiedValue: number;

  constructor(
    public name: string,
    public value: number
  ){
    this.modifiedValue = value;
  }

  incrementValue() {
    this.modifiedValue += 1;
  }

  decrementValue() {
    this.modifiedValue -= 1;
  }

  getChangeDifference() {
    return this.value - this.modifiedValue;
  }

  applyChanges() {
    this.value = this.modifiedValue;
  }
}
