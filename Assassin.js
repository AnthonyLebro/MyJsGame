class Assassin extends Character {
  constructor(name, hp, dmg, mana) {
    super(name, hp, dmg, mana);
    this.hp = 6;
    this.dmg = 6;
    this.mana = 20;
  }
  shadowHit = () => {
    this.dmg = 5;
    this.mana = this.mana - 20;
  }

}