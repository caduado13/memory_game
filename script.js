const cards = document.querySelectorAll(".card")
let comparisonCards = [];
let score = 0

let seconds = 0, minutes = 0

function timerFunc(){
    seconds++
    if(seconds == 60){
        minutes ++
        seconds = 0
    }
    timer.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function flipMethod(cardEl){
    cardEl.classList.add("flip")
    cardEl.style.pointerEvents = "none"
    comparisonCards.push(cardEl.classList[1]) //Provisory array to compare the flipped cards
}

cards.forEach(card => {
    card.onclick = () =>{   
        flipMethod(card)
        if(seconds == 0 && minutes == 0){
            timerFunc()
            setInterval(timerFunc, 1000)
        } 

        if(comparisonCards.length == 2){
            processCards(card => {
                card.style.pointerEvents = 'none'; // Bloqueia interações
            });
            setTimeout(()=>{
                checkHit() //Compares two flipped cards, if not equal, clear data and unflipped then
                if(score == 10){
                    showWinner()
                    winnerMsg.innerText += ` in ${minutes > 0 ? `0${minutes}:${seconds} minutes!!`: `${seconds} seconds!!`}`
                }
            }, 500)
        }      
    }   
})

function processCards(callback) {
    for (let i = 0; i < cards.length; i++) {
        callback(cards[i]); 
    }
}

function checkHit(){
    if(comparisonCards[0] == comparisonCards[1]){
        score++
        document.querySelectorAll(`.${comparisonCards[0]}`)[0].classList.add("right")
        document.querySelectorAll(`.${comparisonCards[0]}`)[1].classList.add("right")
        processCards(card=> {
            if(!card.classList.contains("right")){            
                card.classList.remove("flip")
                card.style.pointerEvents = 'auto'
            }
        })
    } else {
        processCards(card=> {
            if(!card.classList.contains("right")){            
                card.classList.remove("flip")
                card.style.pointerEvents = 'auto'
            }
        })
    } 
    comparisonCards = []
}


