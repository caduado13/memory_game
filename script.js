const game = document.querySelector(".game");
const array = ["./images/bootstrap.png","./images/css.png","./images/electron.png","./images/firebase.png","./images/html.png","./images/javascript.png","./images/jquery.png","./images/mongo.png","./images/node.png","./images/react.png"];
const images =[...array, ...array];
let flipOne = "";
let flipTwo = "";
let win = "";
const winPage = document.querySelector(".refresh-page");
const winBtn = winPage.querySelector(".popup button");

initGame();
setInterval(isWin, 1000);

function createCard(cardImg){
    return`        
    <div class="card">
        <div class="front-card">
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
        game.innerHTML += createCard(images[i]);
    }
};
const card = document.querySelectorAll(".card");
card.forEach(element =>{
    element.addEventListener("click", e =>{
        if(flipOne == "" && flipTwo == ""){
            e.target.classList.add("flip");
            flipOne = e.target.children[0].children[0].src;
        }else if(!flipOne == "" && flipTwo == ""){
            e.target.classList.add("flip");
            flipTwo = e.target.children[0].children[0].src;
        }
    });
    element.addEventListener("click", removeFlip)
});
function removeFlip(){
    if(!flipOne == "" && !flipTwo == ""){
        if(flipOne !== flipTwo){
            setTimeout(()=>{
                wrong()
                flipOne = "";
                flipTwo = "";
            }, 500);
        }else if(flipOne === flipTwo){
            setTimeout(()=>{
                right()
                flipOne = "";
                flipTwo = "";
                win++
            }, 500);
        };       
    };
};
function wrong(){
    for(let i = 0; i < card.length; i++){
        if(!card[i].classList.contains("right")){
            card[i].classList.remove("flip"); 
        };
    };
};
function right(){
    for(let i = 0; i < card.length; i++){
        card[i].classList.replace("flip","right");
    };
};
function isWin(){
    if(win == card.length/2){
        winPage.classList.add("show"); 
    };
};
winBtn.addEventListener("click", ()=>{;
    window.location.reload();
    win == "";
});