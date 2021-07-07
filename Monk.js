class Monk extends Character {
  constructor(name, hp, dmg, mana) {
          super(name, hp, dmg, mana);
    this.hp = 8;
    this.dmg = 2;
    this.mana = 200;
  }
  heal = () => {
    this.hp = this.hp + 8;
    this.mana = this.mana - 25;
  }

}