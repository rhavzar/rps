let wl = -1;

function getComputerChoice() {
    let a = random(3), ret = '';
    switch (a) {
        case 1:
          ret = 'Rock';
          break;
        case 2:
          ret = 'Paper';
          break;
        case 3:
          ret = 'Scissors';
          break;
        default:
          break;
      }
    return ret;
}

// play round function, checks for user guess and then narrows down, sets wl number equal to who won
function playRound(playerSelection, computerSelection)
{
    let ret;
    if (playerSelection == "rock")
    {
        
        if (computerSelection == "Paper")
        {
            ret = "You lose! Paper beats rock.";
            wl = 0;
        }
        else if (computerSelection == "Scissors")
        {
            ret = "You win! Rock beats scissors.";
            wl = 1;
        }
        else
        {
            wl = -1;
            ret = "It's a tie.";
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "Rock")
        {
            ret = "You win! Paper beats rock.";
            wl = 1;
        }
        else if (computerSelection == "Scissors")
        {
            ret = "You lose! Scissors beats paper.";
            wl = 0;
        }
        else
        {
            wl = -1;
            ret = "It's a tie.";
        }
    }
    else if (playerSelection == "scissors")
    {
        if (computerSelection == "Rock")
        {
            ret = "You lose! Rock beats scissors.";
            wl = 0;
        }
        else if (computerSelection == "Paper")
        {
            ret = "You win! Scissors beats paper.";
            wl = 1;
        }
        else
        {
            wl = -1;
            ret = "It's a tie.";
        }   
    }
    return ret;
}

function game() {
    let score_us = 0, score_c = 0;

    for (let i = 0; i < 5; i++)
    {
        try {
            playerSelection = (prompt("Enter your guess: ")).toLowerCase();
        }
        catch (e) {
            console.log("Exiting...\n")
            System.exit();
        }
        let rs = playRound(playerSelection, getComputerChoice());
        //function runs until valid input happens
        while (rs == null)
        {
            playerSelection = (prompt("That's not a valid guess, silly: ")).toLowerCase();
            rs = playRound(playerSelection, getComputerChoice());
        }
        if (wl == 1) 
            score_us++;
        else if (wl == 0)
            score_c++;
        else
            i--;
        console.log(rs + "\nScore: You, " + score_us + " | Computer, " + score_c + "\n");
    }
    
    if (score_c > score_us)
        console.log("\nThe robot overlord has defeated you! MUAHAHAHAH\n");
    else
        console.log("\nThe hero prevails! You win!\n");
}

function random(number) {
    return Math.floor(Math.random() * number + 1);
  }