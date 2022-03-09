{
  const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
      console.log("robię get moveName");
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);

    console.log("Wylosowana liczba to: " + randomNumber);

    /* if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
} */

    printMessage("Mój ruch to: " + computerMove);

    /* let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  ); */

    const playerMove = getMoveName(playerInput);

    console.log("Gracz wpisał: " + playerInput);

    /* if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
} */

    printMessage("Twój ruch to: " + playerMove);

    // result

    /* if( (computerMove == 'kamień' && playerMove == 'papier') ||
    (computerMove == 'papier' && playerMove == 'nożyce') ||
    (computerMove == 'nożyce' && playerMove == 'kamień')) {
        printMessage('Ty wygrywasz!');
    }
  else if ( computerMove == playerMove){
      printMessage('Remis!');
    } 
  else if ( playerMove == 'nieznany ruch'){
      printMessage('Musisz wybrać opcję 1,2 lub 3!');
    } 
  else {
      printMessage('Przegrywasz!');
    } */

    console.log("moves:", computerMove, playerMove);

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log("działam, nie działam?");

      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      if (
        (argComputerMove == "kamień" && argPlayerMove == "papier") ||
        (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
        (argComputerMove == "nożyce" && argPlayerMove == "kamień")
      ) {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == argPlayerMove) {
        printMessage("Remis!");
      } else if (argPlayerMove == "nieznany ruch") {
        printMessage("Musisz wybrać opcję 1,2 lub 3!");
      } else {
        printMessage("Przegrywasz!");
      }
    };

    displayResult(computerMove, playerMove);
  };

  const ButtonRock = document.getElementById("play-rock");
  ButtonRock.addEventListener("click", function () {
    playGame(1);
    console.log("Kliknąłeś kamień");
  });

  const ButtonPaper = document.getElementById("play-paper");
  ButtonPaper.addEventListener("click", function () {
    playGame(2);
    console.log("Kliknąłeś papier");
  });

  const ButtonScisors = document.getElementById("play-scisors");
  ButtonScisors.addEventListener("click", function () {
    playGame(3);
    console.log("Kliknąłeś nożyce");
  });
}
