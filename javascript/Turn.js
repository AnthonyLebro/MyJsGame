class Turn{
  constructor(game){
    this.game = game
    this.startTurn()
    this.shuffleAlivePlayers()
    this.playersAttacks()
  }

  alivePlayers(){
    return this.game.alivePlayers()
  }

  startTurn(){
    this.game.newTurn()
    let assassin = this.alivePlayers().filter(el=> el instanceof Assassin)[0]
    if (assassin != undefined && assassin.victim != undefined){
      assassin.shadowHit();
      assassin.protection == false;
    }
  }

  shuffleAlivePlayers(){
    return this.alivePlayers().sort((a, b) => 0.5 - Math.random());
  }
  
  playersAttacks(){
    let allPlayers = this.shuffleAlivePlayers()
    allPlayers.map((player,index)=>{
      if (player.hp > 0){
        let ennemies = allPlayers.filter(el=>el != allPlayers[index] && el.hp > 0 )
        if (player.player == true){
          let playerAttacked = false
          while (playerAttacked != true){
            let choise = this.playerChoice(allPlayers[index])
            if (choise == 3 ){
              this.game.watchStats()
              console.log('\n')
            }else if (choise == 1){
              let victim = ennemies[this.ennemieChoise(ennemies)];
              allPlayers[index].dealsDamages(victim, allPlayers[index].dmg)
              playerAttacked = true
            }else if(choise == 2){
              let victim = ennemies[this.ennemieChoise(ennemies)];
              allPlayers[index].specialAttack(victim)
              playerAttacked = true
            }
          }
        }else{
          this.botAttack(allPlayers[index],ennemies)
        }
      }
    })
    console.log('________________________________________________')
    console.log('------------------------------------------------')
  }

  botAttack(bot,ennemies){
    if (ennemies.length==1){
      let victim = ennemies[0]
      bot.dealsDamages(victim, bot.dmg)
    }else{
      let victim = this.randomVictim(ennemies);
      bot.dealsDamages(victim, bot.dmg)
    }
    
  }

  randomVictim(ennemies){
    return ennemies[Math.floor(Math.random()*ennemies.length)]
  }

  ennemieChoise(ennemies){
    console.log(`%c Wich players do you want to strike ? (0 to ${ennemies.length-1})`,'color:blue')
    ennemies.map((enn,index) => {
      console.log(`${index}- ${enn.stats()}`)
    })
    let  answerCorrect = false;
    while (answerCorrect != true){
      let victim = prompt(`Choose a player to attack : (0 to ${ennemies.length-1})`)
      if (victim >= 0 && victim < ennemies.length){
        answerCorrect = true
        return victim
      }else{
        console.log('Invalid Key...')
      }
    }
  }

  playerChoice(player){
    console.log('\n')
    console.log("%cThats your turn:",'color:blue')
    console.log("%c"+player.stats(),"color:cyan")
    console.log('%cChoose your action: ','color:blue')
    console.log('1- Fast attack')
    console.log('2- Special attack')
    console.log('3- Stats of players still alive')
    console.log('\n')
    let answerCorrect = false;
    while (answerCorrect != true){
      let playerAnswer = prompt('Choose an action (1 to 3)')
      if (playerAnswer >=1 && playerAnswer <=3){
        answerCorrect = true
        return playerAnswer
      }else{
        console.log('Invalid Key...')
      }
    }
  }
}
