/* ======================================================================================================
* Froggy Clicker is a game inspired by the popular clicker or incremental games genre. 
* The goal is simple: click on elements on the screen to gain points, unlock upgrades, and accumulate 
* as many points as possible to conquer the game. 
* ====================================================================================================== */

/**
 * The clicker class is the main object of the game.
 * The majority of the game logic will be handle by the object
 * 
 * @param {object} clickerElement - refers to the html element that will be click
 * @param {object} scoreElement - refers to the html element that will display the score
 */
const clicker = class{
  constructor(clickerElement, scoreElement) {
    /* Score tracking variables */
    this.score = 0;
    this.incremental = 1;
    this.bonus = 0;
    this.goal = 1000000;s

    /* Objects holding the upgrade values */
    this.clickUpgradeObject = {
      cost: 25,
      level : 0
    }

    /* Variables for score container and clicker element itself */
    this.clickerElement = clickerElement;  
    this.scoreElement = scoreElement
  }
  /**
   * adds score value to scoreElement
   */
  addScore() {
    this.scoreElement.innerHTML = this.score;
  }
  /**
   * Increase score when clicker
   */
  scoreIncreaseClick() {
    this.score += this.incremental + this.bonus;
  }
  /**
  * Method that handles the click functionality on main HTML element.
  * It increase the score and add the score to the scoreElement. 
  */
  clickEvent() {
    this.clickerElement.addEventListener("click", (e) => {
      e.preventDefault();
      this.scoreIncreaseClick();
      this.addScore();
    });
  }
}

/**
 * Starts the game. Make sures the document is ready and content loaded before starting
 */
const init = () => {

  document.addEventListener("DOMContentLoaded", () => {
    /* Variables holding the click elements and score element for the clicker class */
    let clickerElement = document.getElementById("clicker");
    let scoreElement = document.getElementById("score");

    /* Created new clicker object */
    let froggyClicker = new clicker(clickerElement, scoreElement);

    /* Class method calls - hover over method for doctype explanation*/
    froggyClicker.clickEvent();
    

    });
}


init();