//game values
let min=prompt('enter min'),
    max=prompt('enter max');
let winningNum=getRandomNum(min,max),
    guessesLeft=3;

console.log(min);
console.log(max);

// while(true){
//     let tp = prompt('enter');
//     if(tp === '9'){
//         break
//     }
// }

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter a number between ${min} and ${max}`,'red');    
    }

    if(guess === winningNum){
        //game over
        msg = `${winningNum} is correct , YOU WIN!`;
        gameOver(msg,'green');
    }else{
        guessesLeft -= 1;
        if(guessesLeft === 0){
            //game over
            msg = `Game Over , You lose. ${winningNum} is the number`;
            gameOver(msg,'red');
        }else{
            //game continues
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is wrong , ${guessesLeft} guesses left`,'red');
        }
    }
});

function gameOver(msg,color){
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg,color);

    guessBtn.value = 'PLAY AGAIN';
    guessBtn.className += "play-again";
}

function setMessage(msg , color){
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1));
}

