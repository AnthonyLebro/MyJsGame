class Paladin extends Character {
  constructor(name, hp, dmg, mana) {
      super(name, hp, dmg, mana);
    this.hp = 16;
    this.dmg = 3;
    this.mana = 160;
  }
  healingLighting = () => {
    this.dmg = 4
    this.hp = this.hp + 5;
    this.mana = this.mana - 40;
  }

}