'use strict';

var score, roundscore, activeplayer, dice, gamePlaying;
 init();
 
document.querySelector('.btn--roll').addEventListener('click', function(){
   if (gamePlaying){
          // 1 Random Number generation 
    var dice = Math.floor(Math.random()*6) + 1;
   
    // 2 display the result 
    var diceDom = document.querySelector('.dice');
    diceDom.style.display= ' block';
    diceDom.src= 'dice-' + dice + '.png'; 
     //update the score if rolled number was not one 
     if (dice !== 1) {
        roundscore += dice ;
        document.querySelector('#current--' + activeplayer).textContent= roundscore;
     } else {
        nextplayer();
//        document.querySelector('.dice').style.display= 'none';
     }
   }
});
 document.querySelector('.btn--hold').addEventListener('click', function(){
   if(gamePlaying) {
      // add current score to global score 
   score[activeplayer] += roundscore;
   // Update UI
   document.querySelector('#score--' + activeplayer).textContent= score[activeplayer];
   // check if player Won the game
   if ( score[activeplayer] >= 100){
      document.querySelector('#name--'+ activeplayer).textContent= 'winner!';
      document.querySelector('.dice').style.display='none';
      document.querySelector('.player'+ activeplayer + 'player--').classList.remove('active');
      document.querySelector('.player'+ activeplayer + 'player--').classList.add('winner');
      document.querySelector('.player'+ activeplayer + 'player--').classList.add('winner');
      gamePlaying = false;
   } else{
      //next player 
        nextplayer();
   }
}
});
  function nextplayer(){
   // Next player 
   activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;
        document.getElementById('current--0').textContent= '0';
        document.getElementById('current--1').textContent= '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        document.querySelector('.dice').style.display='none';
  }
  document.querySelector('.btn--new').addEventListener('click', init);
function init() {
score= [0,0];
roundscore= 0;
activeplayer= 0;
gamePlaying = true;

document.querySelector('.dice').style.display= 'none';
document.getElementById('score--0').textContent= '0';
document.getElementById('score--1').textContent= '0';
document.getElementById('current--0').textContent= '0';
document.getElementById('current--1').textContent= '0';
document.getElementById('name--0').textContent= 'player 1';
document.getElementById('name--1').textContent= 'player 2';
document.querySelector('.player--0').classList.remove('winner');
document.querySelector('.player--1').classList.remove('winner');
document.querySelector('.player--0').classList.remove('active');
document.querySelector('.player--1').classList.remove('active');
document.querySelector('.player--0').classList.add('active');

}
/*
dice = Math.floor(Math.random()*6) + 1;
document.querySelector('#current--' + activeplayer).textContent=dice;
//document.querySelector('#current--' + activeplayer).innerHTML= '<em>' + dice +'</em>'; */