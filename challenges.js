/* 3 coding challenges 
1, A players losses his entire score when he rolls two 6 in a row. After that, it's the next player's turn
(hint: Alwys save the previos score in a seperate file) 
2.  
*/


'use strict';

var score, roundscore, activeplayer, dice, gamePlaying;
 init();
var lastdice;
document.querySelector('.btn--roll').addEventListener('click', function(){
   if (gamePlaying){
          // 1 Random Number generation 
         var dice1 = Math.floor(Math.random()*6) + 1;
         var dice2 = Math.floor(Math.random()*6) + 1;
          
    // 2 display the result 
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src= 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src= 'dice-' + dice2 + '.png';
     //update the score if rolled number was not one 

     if (dice1 !== 1 && dice2 !== 1 ) {
      roundscore += dice1 + dice2 ;
      document.querySelector('#current--' + activeplayer).textContent= roundscore;
   } else {
      nextplayer();
//        document.querySelector('.dice').style.display= 'none';
   }

    /*
     if ( dice === 6 && lastdice === 6) {
         // player losses score 
         score[activeplayer] = 0;
         document.querySelector('#score--' + activeplayer).textContent= '0';
         nextplayer();
     } else if (dice !== 1) {
        roundscore += dice ;
        document.querySelector('#current--' + activeplayer).textContent= roundscore;
     } else {
        nextplayer();
//        document.querySelector('.dice').style.display= 'none';
     }
    lastdice = dice;
   } */
}});
 document.querySelector('.btn--hold').addEventListener('click', function(){
   if(gamePlaying) {
      // add current score to global score 
   score[activeplayer] += roundscore;
   // Update UI
   document.querySelector('#score--' + activeplayer).textContent= score[activeplayer];
   
   var input = document.querySelector('.final-score').Value;
   var winningScore;
   // undefined null 0 "" are coereced to false
   if (input) {
      winningScore = input;
   } else {
      winningScore = 100;
   }
   // check if player Won the game
   if ( score[activeplayer] >= winningScore){
      document.querySelector('#name--'+ activeplayer).textContent= 'winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
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
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
  }
  document.querySelector('.btn--new').addEventListener('click', init);
function init() {
score= [0,0];
roundscore= 0;
activeplayer= 0;
gamePlaying = true;

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
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
