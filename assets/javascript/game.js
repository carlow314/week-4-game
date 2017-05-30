//steps of actual game
$(document).ready(function() {
  //initiate theme song on page load
  $("#starwarstheme").get(0).play();
  //display original message at start of game;
  $(".gameinfo").html("Choose one of the characters above as your character.");
  //hide restart button at page load
  $("#revengebtn").hide();
  // User is choosing the character
  // Determine which character the user has clicked
  $("#luke").on("click", function() {
    // User is choosing the character
    if (yourselection === false) {
      $(".gameinfo").html("Luke will fight to the death!");
      // Set the user's character
      attackervalues(char.luke);
      yourselection = true;
      $("#starwarstheme").get(0).pause();
      lukesound.play();
      // Display the chosen character
      $("#luke").removeClass("available").addClass("chosen-character");
      $("#chosen-character").append(this);
      // Move the remaining characters to the enemies section
      newEnemies();
    } else if ((yourselection === true) && (defenderselection === false)) {
      // User is choosing the defender
      if ($("#luke").hasClass("enemy")) {
        $(".gameinfo").empty();
        // Set the user's enemy
        pickdefendervalues(char.luke);
        defenderselection = true;

        // Add the character to the defender section
        $("#luke").removeClass("enemy").addClass("defender-character");
        $("#defender-character").append(this);
      }
    }
  });

  $("#yoda").on("click", function() {
    // User is choosing the character
    if (yourselection === false) {
      $(".gameinfo").html("Yoda will fight to the death!");
      // Set the user's character
      attackervalues(char.yoda);
      yourselection = true;
      $("#starwarstheme").get(0).pause();
      yodasound.play();
      // Display the chosen character
      $("#yoda").removeClass("available").addClass("chosen-character");
      $("#chosen-character").append(this);
      // Move the remaining characters to the enemies section
      newEnemies();
    } else if ((yourselection === true) && (defenderselection === false)) {
      // User is choosing the defender
      if ($("#yoda").hasClass("enemy")) {
        $(".gameinfo").empty();
        // Set the user's enemy
        pickdefendervalues(char.yoda);
        defenderselection = true;
        // Add the character to the defender section
        $("#yoda").removeClass("enemy").addClass("defender-character");
        $("#defender-character").append(this);
      }
    }
  });
  $("#boba").on("click", function() {
    // User is choosing the character
    if (yourselection === false) {
      $(".gameinfo").html("Boba Fett will fight to the death!");
      // Set the user's character
      attackervalues(char.boba);
      yourselection = true;
      $("#starwarstheme").get(0).pause();
      fettsound.play();
      // Display the chosen character
      $("#boba").removeClass("available").addClass("chosen-character");
      $("#chosen-character").append(this);
      // Move the remaining characters to the enemies section
      newEnemies();
    } else if ((yourselection === true) && (defenderselection === false)) {
      // User is choosing the defender
      if ($("#boba").hasClass("enemy")) {
        $(".gameinfo").empty();
        // Set the user's enemy
        pickdefendervalues(char.boba);
        defenderselection = true;
        // Add the character to the defender section
        $("#boba").removeClass("enemy").addClass("defender-character");
        $("#defender-character").append(this);
      }
    }
  });

  $("#chewy").on("click", function() {
    // User is choosing the character
    if (yourselection == false) {
      $(".gameinfo").html("Chewbacca will fight to the death!");
      // Set the user's character
      attackervalues(char.chewy);
      yourselection = true;
      $("#starwarstheme").get(0).pause();
      chewysound.play();
      // Display the chosen character
      $("#chewy").removeClass("available").addClass("chosen-character");
      $("#chosen-character").append(this);
      // Move the remaining characters to the enemies section
      newEnemies();
    } else if ((yourselection === true) && (defenderselection == false)) {
      // User is choosing the defender
      if ($("#chewy").hasClass("enemy")) {
        $(".gameinfo").empty();
        // Set the user's enemy
        pickdefendervalues(char.chewy);
        defenderselection = true;
        // Add the character to the defender section
        $("#chewy").removeClass("enemy").addClass("defender-character");
        $("#defender-character").append(this);
      }
    }
  });
  //Attack button is clicked
  $("#attackbtn").on("click", function() {
    // User is ready to attack the defender
    if (yourselection && defenderselection && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attackPower;
      $(".defender-character").children(".health").html(defender.health);
      $(".gameinfo").html("<p>You attacked " + defender.name + " for " + character.attackPower + " damage.<p>");

      // User's attack power increases
      character.attackPower = character.attackPower + character.attackPower;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.counterAttackPower;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $(".gameinfo").append("<p>" + defender.name + " attacked you back for " + defender.counterAttackPower + " damage.</p>");
        } else {
          gameOver = true;
          $(".gameinfo").html("<p>You were defeated...</p><p>Play again?</p>");
          $("#revengebtn").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderselection = false;
        $(".gameinfo").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $(".gameinfo").html("<p>You have won the game!!!</p><p>Would you like to battle again?</p>");
          $("#revengebtn").show();
        }
      }
      //game alert if a fighter has not been selected yet
    } else if (!characterSelected && !gameOver) {
      $(".gameinfo").html("<p>You must first select your fighter!</p>");
      //game alert if an enemy has not been selected yet
    } else if (!defenderSelected && !gameOver) {
      $(".gameinfo").html("<p>You must choose an enemy to fight!</p>");
    }

  });
  //function to reload game when the replay button is clicked
  $("#revengebtn").on("click", function() {
    location.reload();
  });
}); // closing brack for game process
