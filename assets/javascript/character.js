//character object
var char = {
  luke: {
    name: "luke",
    health: 100,
    attackPower: 8,
    counterAttackPower: 12
  },
  yoda: {
    name: "yoda",
    health: 130,
    attackPower: 8,
    counterAttackPower: 17
  },
  chewy: {
    name: "chewy",
    health: 160,
    attackPower: 9,
    counterAttackPower: 20
  },
  boba: {
    name: "boba",
    health: 185,
    attackPower: 7,
    counterAttackPower: 21
  },
};

//global variables for game
var yourselection = false; //set selection of fighter to false at outset
var defenderselection = false; //set selection of defender to false at outset
var character = {}; //store char object data for character
var defender = {}; //store char object data for defender
var enemiesDefeated = 0;
var gameOver = false; //determination if game is over or not

//Functions for game
//assigning properties of object to characters when chosen
function attackervalues(chosenAttacker) {
  character.name = chosenAttacker.name;
  character.health = chosenAttacker.health;
  character.counterAttackPower = chosenAttacker.counterAttackPower;
  character.attackPower = chosenAttacker.attackPower;
}
//assigning properties of object to enemeies when chosen
function pickdefendervalues(chosenEnemy) {
  defender.name = chosenEnemy.name;
  defender.health = chosenEnemy.health;
  defender.counterAttackPower = chosenEnemy.counterAttackPower;
  defender.attackPower = chosenEnemy.attackPower;
}
//this function moves all unchosen characters to the enemy div
function newEnemies() {
  $(".available").removeClass("available").addClass("enemy");
  $(".enemy-character").append($(".enemy "));
}
