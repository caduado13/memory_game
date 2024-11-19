const game = document.querySelector(".game");
const array = ["./images/bootstrap.png","./images/css.png","./images/electron.png","./images/firebase.png","./images/html.png","./images/javascript.png","./images/jquery.png","./images/mongo.png","./images/node.png","./images/react.png"];
const images =[...array, ...array];
const winPage = document.querySelector(".refresh-page");
const winBtn = winPage.querySelector(".popup button");
const winnerMsg = winPage.querySelector(".popup h1");
const timer = document.querySelector("#timer-p")


function createCard(cardImg){
    let cardClass = cardImg.slice(9).slice(0, -4)
    return`        
    <div class="card ${cardClass}" >
        <div class="front-card" >
            <img src=${cardImg} alt="" class="card-image">
        </div>
        <div class="back-card">
            &quest;
        </div>
    </div>` 
};   
function initGame(){  
    images.sort(() => Math.random() -0.5)
    for(let i = 0; i < images.length; i++){
        const cardsHTML = images.map(createCard).join("")
        game.innerHTML = cardsHTML
    }
};

function showWinner(){
    winPage.classList.add("show")
    winBtn.onclick = () => {
        location.reload()
    }
}



initGame()

