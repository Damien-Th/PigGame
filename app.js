var scores, roundScore, activePlayer, gamePlaying;
  
init(); 

function displayIIII() {
var elmt = document.getElementById('wrapper');
var elmt0 = document.getElementById('p0');
var elmt1 = document.getElementById('p1');
document.getElementById('p2').style.display = 'block';
document.getElementById('p3').style.display = 'block';
    
elmt.style.width = '1250px';
    
elmt0.style.width = '20%';
elmt0.style.float = 'left';
elmt0.style.height = '600px';
elmt0.style.padding = '0px';
elmt0.style.margin = '0px';

elmt1.style.width = '20%';
elmt1.style.float = 'left';
elmt1.style.height = '600px';
elmt1.style.padding = '0px';
elmt1.style.margin = '0px';   
}

function displayII() {
document.getElementById('p2').style.display = 'none';
document.getElementById('p3').style.display = 'none'; 
var elmt = document.getElementById('wrapper');
var elmt0 = document.getElementById('p0');
var elmt1 = document.getElementById('p1');
    
elmt.style.width = '1150px';
    
elmt0.style.width = '30%';
elmt0.style.float = 'left';
elmt0.style.height = '600px';
elmt0.style.padding = '0px';
elmt0.style.margin = '10px 50px';

elmt1.style.width = '30%';
elmt1.style.float = 'right';
elmt1.style.height = '600px';
elmt1.style.padding = '0px'; 
elmt1.style.margin = '10px 50px';
}

function displayIII() {
displayIIII();
document.getElementById('p3').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        
    var inputScore = document.querySelector('.final-score').value;

        if(inputScore == "") { condition(); }
        else if(inputScore < 20) {
            alert('Come on don\'t you want to play ?? Minimun : 20');}
        else if(inputScore > 999) {
            alert('This is way too much buddy ;) Maximun : 999');}
        else if(inputScore >= 20) { condition(); }

    function condition() {
    
    document.getElementById('nJoueur').style.display = 'none'; 
    document.getElementById('finalScore').style.display = 'none';
    document.querySelector('.nJ').style.display = 'none';
    document.querySelector('.fS').style.display = 'none';
         
    var inputJoueur = document.querySelector('.n-Joueur').value;
    
        if(inputJoueur == 2 ) {displayII();} 
        else if(inputJoueur == 3) {displayIII();}
        else if(inputJoueur == 4) {displayIIII();}
        
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;   
            } 
        else { nextPlayer(); }
        } 
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        
        if(roundScore !== 0) {
           
       // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        
       // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     
        var inputScore = document.querySelector('.final-score').value;
        var winningScore;
                 
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(inputScore) {
            winningScore = inputScore;
        } else {
            winningScore = 100;
        }
        
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            
           document.getElementById('dice-1').style.display = 'none';
           document.getElementById('dice-2').style.display = 'none';
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
            } 
            else { nextPlayer();}
        }
        
    else{ nextplayer() = false; }
    }
});


function nextPlayer() {
var inputJoueur = document.querySelector('.n-Joueur').value;
        
if(inputJoueur == 2 ) { JII(); }
else if (inputJoueur == 3) { JIII(); }
else { JIIII(); }
       
function JII() {
if(activePlayer === 0)  {activePlayer = 1;}
else {activePlayer = 0;} }
    
function JIII() {
if(activePlayer === 0)  {activePlayer = 1;}
else if (activePlayer === 1) {activePlayer = 2;}   
else {activePlayer = 0;}  } 
    
function JIIII() {
if(activePlayer === 0)  {activePlayer = 1;}
else if (activePlayer === 1) {activePlayer = 2;}
else if (activePlayer === 2) {activePlayer = 3;}
else {activePlayer = 0;}  }
  
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('current-3').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-3-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    }

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0, 0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('score-3').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('current-3').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('name-2').textContent = 'Player 3';
    document.getElementById('name-3').textContent = 'Player 4';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-3-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-3-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.nJ').style.display = 'block';
    document.querySelector('.fS').style.display = 'block';
    document.getElementById('finalScore').style.display = 'block';
    document.getElementById('nJoueur').style.display = 'block';
    displayIIII();
}
