let player = ''
let computer = ''
let result = ''
let playerWonCur = false
let playerScore = document.querySelector('#player-score').textContent
let computerScore = document.querySelector('#computer-score').textContent
let computerScoreCard = document.querySelector('#computer-score')
let playerScoreCard = document.querySelector('#player-score')
let isTie = false
let winner = -1
let winnerDeclaration = ''
let winnerDiv = document.querySelector('.winner')
let optionsDiv = document.querySelector('.option-list')
let resultDiv = document.querySelector('.result')
let playAgainDiv = document.querySelector('.play-again')


console.log(optionsDiv)
const updateResult = () => {
    
    if(!isTie && playerWonCur){

        playerScore++
playerScoreCard.textContent = playerScore

    }
    else if(!isTie && !playerWonCur){

        computerScore++
computerScoreCard.textContent = computerScore


    }
    console.log(result)
resultDiv.textContent = result
resultDiv.style.background= playerWonCur ? '#7fd97f':'#d12c2080'

    if(playerScore==5 || computerScore==5)
    { 
      winner = playerScore==5 ? 0 : 1 // 0 - player -- 1-comp
      resultDiv.style.display = 'none'
      winnerDeclaration = winner ? 'YOU LOST!' : 'YOU WON!'
      winnerDiv.textContent = winnerDeclaration
      winnerDiv.style.display = 'flex'
      winnerDiv.style.background = winner ? '#d12c2080':'#7fd97f'
      optionsDiv.style.display ='none'
      playAgainDiv.style.display='flex'
     

      
    }
    else{
        player = computer = result = ''
    }

}

const getResult = () =>{
     if(player==computer)
     result = 'Tie'
    else{
        if(player=='rock'){
            if(computer=='paper')
           { result='Paper beats rock. You Lost!'
        playerWonCur=false}
            else{
                result='Rock beats scissor. You Won!'
               playerWonCur=true} 
            }
            
        
        else if(player=='paper'){
            if(computer=='rock'){
            result='Paper beats rock. You Won!'
            playerWonCur=true
            }
            else{
              
                result='Scissor beats Paper. You Lost!'
                playerWonCur=false
            }
        }
        else if(player=='scissor'){
            if(computer=='paper'){

                result='Scissor beats Paper. You Won!'
                playerWonCur=true
            }
            else{

                result='Rock beats scissor. You Lost!'
                playerWonCur=false
            }
        }
    }
    updateResult()

}
const computerChoice = () => {
 let choice = Math.floor(Math.random() * 2);
 console.log(choice)
 switch(choice){
    case 0:
        computer = 'rock'
        break
    case 1:
        computer = 'paper'
        break
    case 2:
        computer = 'scissor'
        break
 
 }
 return getResult()
}
const optionHandler = () =>{
    const optionItems = document.getElementsByClassName('option-item');
   
  Array.from(optionItems).forEach((option)=>{
      option.addEventListener('click', (e) => {
        player = e.target.id
        computerChoice()
  })
  playAgainDiv.addEventListener('click',()=>{
        // alert('again')
winnerDiv.style.display = 'none'
      optionsDiv.style.display ='flex'
      playAgainDiv.style.display='none'
       playerScoreCard.textContent =0
      computerScoreCard.textContent=0
      playerScore=0
      computerScore=0
      console.log(playerScoreCard.textContent 
,computerScoreCard.textContent,"playerScore,computerScore")
    })
});

   
}

optionHandler();


