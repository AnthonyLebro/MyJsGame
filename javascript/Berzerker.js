class Berzerker extends Characters {
  constructor(name, hp, dmg, mana) {
    super(name);
    this.hp = 8;
    this.dmg = 4;
    this.mana = 0;
  }
  Rage = () => {
    this.hp = this.hp - 1;
    this.dmg = this.dmg + 1;
  }

}