class Turn  {
  constructor(number) {
    this.number = 0
  }

  status = () => {
      this.winnerFight();

      window.alert(`
        ${character1.name} has ${character1.hp} hp
        ${character2.name} has ${character2.hp} hp
        ${character3.name} has ${character3.hp} hp`);

      console.log(`
          ${character1.name} has ${character1.hp} hp
          ${character2.name} has ${character2.hp} hp
          ${character3.name} has ${character3.hp} hp`);

        if (character1.hp <= 0){
          window.alert(`${character1.name} is dead`)
        }
        else if (character2.hp <= 0){
          window.alert(`${character2.name} is dead`)
        }
        else if (character3.hp <= 0){
          window.alert(`${character3.name} is dead`)
        };
    }

      winnerFight = () => {
        if (character2.hp <= 0 && character3.hp <= 0) {
          window.alert(`${character1.name} has won the fight`);
          this.winner = character1;
        }
        else if (character1.hp <= 0 && character3.hp <= 0) {
          window.alert(`${character2.name} has won the fight`);
          this.winner = character2;
        }
        if (character1.hp <= 0 && character2.hp <= 0) {
          window.alert(`${character3.name} has won the fight`);
          this.winner = character3;
        }
      }

    round = () => {
      while (this.number < 10 & this.winner== null ) {
        this.number = this.number + 1;
        window.alert(`Round ${this.number} : FIGHT ! `)

        if (character1.hp > 0) {
          var target = prompt(`${character1.name} who's your target`);
          if (target == character2.name) {
            window.alert(`${character1.name} attacks ${character2.name} `);
            character2.hp = character2.hp - character1.dmg;
          }
          else {
            window.alert(`${character1.name} attacks ${character3.name} `);
            character3.hp = character3.hp - character1.dmg;
          }
          this.status();
        }

        if (character2.hp > 0) {
          var target = prompt(`${character2.name} who's your target`);
          if (target == character1.name) {
            window.alert(`${character2.name} attacks ${character1.name} `);
            character1.hp = character1.hp - character2.dmg;
          }
          else {
            window.alert(`${character2.name} attacks ${character3.name} `);
            character3.hp = character3.hp - character2.dmg;
          }
          this.status();
        }

        if (character3.hp > 0) {

          var target = prompt(`${character3.name} who's your target`);
          if (target == character1.name) {
            window.alert(`${character3.name} attacks ${character1.name} `);
            character1.hp = character1.hp - character3.dmg;
          }
          else {
            window.alert(`${character3.name} attacks ${character2.name} `);
            character2.hp = character2.hp - character3.dmg;
          }
          this.status();
        }
      }
    }

    attack = () => {
      var attack = prompt(`${character1.name} Press "1" for your normal attack or "2" for your special attack`, '1');
      console.log(attack)



    }
  }