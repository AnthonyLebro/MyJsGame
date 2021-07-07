class Game  {
  constructor(start,end) {
    this.name= name;
  }

    newGame = () => {
      if (window.confirm("Do you wanna start a new game ?")) {
        const game1 = new Game("first game")
        window.alert("A new game starts")
        console.log("A new game starts")
      }

    }

}