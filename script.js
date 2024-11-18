const cards = document.querySelectorAll(".card")
let comparisonCards = [];
let score = 0

function flipMethod(cardEl){
    cardEl.classList.add("flip")
    cardEl.style.pointerEvents = "none"
    comparisonCards.push(cardEl.classList[1]) //Provisory array to compare the flipped cards
}

cards.forEach(card => {
    card.onclick = () =>{   
        flipMethod(card)
        if(comparisonCards.length == 2){
            for(let i = 0; i < cards.length; i++){
                cards[i].style.pointerEvents = 'none'
            }
            setTimeout(()=>{
                checkHit() //Compares two flipped cards, if not equal, clear data and unflipped then
                if(score == 10){
                    showWinner()
                }
            }, 500)
        }      
    }   
})

function checkHit(){
    if(comparisonCards[0] == comparisonCards[1]){
        score++
        document.querySelectorAll(`.${comparisonCards[0]}`)[0].classList.add("right")
        document.querySelectorAll(`.${comparisonCards[0]}`)[1].classList.add("right")
        comparisonCards = []
        for(let i = 0; i < cards.length; i++){
            if(!cards[i].classList.contains("right")){
                cards[i].style.pointerEvents = 'auto'
                cards[i].classList.remove("flip")
            }
        }
    } else {
        for(let i = 0; i < cards.length; i++){
            if(!cards[i].classList.contains("right")){            
                cards[i].classList.remove("flip")
                cards[i].style.pointerEvents = 'auto'
            }
        }
        comparisonCards = []
    } 
}


