class Fighter extends Characters {
  constructor(name, hp, dmg, mana) {
    super(name, hp, dmg, mana)
    this.hp = 12;
    this.dmg = 4;
    this.mana = 40;
  }

  darkVision = () => {
    this.dmg = 5;
    this.mana = this.mana - 20;
  }

}