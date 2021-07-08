class Game{
  constructor(){
    console.clear();
    this.welcome()
    this.characters = []
    this.createCharacter()
    this.turnLeft = 10
    this.playerSelection()
  }

  newTurn(){
    this.turnLeft -= 1
    this.viewTurn(); 
  }

  createCharacter(){
    this.characters.push(
      new Fighter("Daryl"),
      new Paladin("Saruman"),
      new Monk("Inspecteur Monk"),
      new Berzerker("Derick"),
      new Assassin("Numéro 47")
    );
  }

  playerSelection(){
    console.log("%c Choose Your Player :",'color:blue')
    this.characters.map((el,index) =>{
      console.log(`${index}- ${el.constructor.name} : ${el.name} -- ${el.description}`)
    })
    let answerCorrect = false;
    while (answerCorrect != true){
      let playerAnswer = prompt(`Choose your player  ( 0 / ${this.characters.length-1})`)
      if (playerAnswer >= 0 && playerAnswer < this.characters.length){
        this.characters[playerAnswer].player = true
        answerCorrect = true
      }else
        console.log('Invalid Key Number...')
    }
  }

  alivePlayers(){
    return this.characters.filter(el=>el.status == 'playing')
  }

  watchStats(){
    console.log('\n')
    console.log("%c Stats of players still alive : ","color:green")
    this.alivePlayers().map(el=>{
      console.log('%c'+el.stats(),'color:cyan')
    })
  }

  gameContinue(){
    if (this.alivePlayers().length > 1 && this.turnLeft > 0 ){
      return true
    }else{
      return false
    }
  }

  winners(){
    let playerIsWinner = false
    this.alivePlayers().map(el=>{
      if (el.player == true){
        playerIsWinner = true;
      }
    })
    if(playerIsWinner == true){
      this.endGameWin()
    }else{
      this.endGameLose()
    }
    console.log('%cThe winners :','color:green')
    this.alivePlayers().map(el=>{console.log(el.stats())})
  }

  viewTurn(){
    console.log('\n')
    console.log('_______________________________________________')
    console.log(`        Turn n° ${10-this.turnLeft}`)
    console.log('          O==|======>')
    console.log('_______________________________________________')
    console.log('\n')
  }

  endGameWin(){
    console.log(`%c 
             "YEEAAAAH YOU WON!"
    `,'color:green')
  }

  endGameLose(){
    console.log(`%c
           "Bouuuuhhhouuuuu   LOOOOOOOSER"
    `,'color:red')
  }

  welcome(){
	
    console.log("                _______________________________________")
    console.log("                    WELCOME TO MY FIGHTING GAME")
    console.log("                _______________________________________")
    console.log("                            Death Match                ")
    console.log('\n')
  }
}