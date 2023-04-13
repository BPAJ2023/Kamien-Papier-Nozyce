const gameResult = {
    Liczba_gier: 0,
    Liczba_zwycięstw: 0,
    Liczba_przegranych: 0,
    Liczba_remisów: 0
}
const game = {
    unserHand: '',
    aiHand: ''
}
const youHand = document.querySelector('.youHand span');
const aiHand = document.querySelector('.aiHand span');
const result = document.querySelector('.result');

let numGames = document.querySelector('.numGames span');
let win = document.querySelector('.win span');
let loss = document.querySelector('.losses span');
let draw = document.querySelector('.draw span');

const hands = [...document.querySelectorAll('img')];
    hands.forEach(hand => {
        hand.addEventListener('click', e=>{
            hands.forEach(h => {h.style.boxShadow = ''})            
            e.target.style.boxShadow = `0 0 0 4px yellow`
            game.unserHand = e.target.dataset.option;
            youHand.textContent = game.unserHand;
            aiHand.textContent = game.aiHand;
        })
        // this.style.boxShadow = `0 0 0 4px yellow`;        
    });


const playGame = ()=>{
    if (game.unserHand){
        let index = Math.floor(Math.random()*3)
        game.aiHand = hands[index].dataset.option;
        aiHand.textContent = game.aiHand;
        gameResult.Liczba_gier++;
        numGames.textContent = gameResult.Liczba_gier;
        
        if (game.unserHand === game.aiHand){
            result.textContent = `REMIS :/`;
            result.style.color = 'blue';
            gameResult.Liczba_remisów++;
            draw.textContent = gameResult.Liczba_remisów;
        } else if (game.aiHand === "papier" && game.unserHand === 'nożyce' || game.aiHand === "nożyce" && game.unserHand === 'kamień' || game.aiHand === "kamień" && game.unserHand === 'papier') {
            result.textContent = 'WYGRAŁEŚ ! ;)';
            result.style.color = 'green';
            gameResult.Liczba_zwycięstw++;
            win.textContent = gameResult.Liczba_zwycięstw;
        } else {
            result.textContent = 'PORAŻKA ! :(';
            result.style.color = 'red';
            gameResult.Liczba_przegranych++;
            loss.textContent = gameResult.Liczba_przegranych;
        }
        // youHand.textContent = '';
        game.unserHand = '';
        hands.forEach(h => {h.style.boxShadow = ''})
    } else 
    alert(`WYBIERZ DŁOŃ !!!`);
    return;
}
document.querySelector('button').addEventListener('click', playGame);