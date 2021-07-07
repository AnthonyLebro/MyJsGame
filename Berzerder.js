class Berzerder extends Character {
  constructor(name, hp, dmg, mana) {
    super(name, hp, dmg, mana);
    this.hp = 8;
    this.dmg = 4;
    this.mana = 0;
  }
  Rage = () => {
    this.dmg = +1;
    this.hp = -1;
  }

}