import InputHandler from "/src/input";
import Player from "/src/player";
import Map from "/src/map";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    this.gameHeight = gameHeight;

    this.gamestate = GAMESTATE.MENU;

    new InputHandler(this.paddle, this);
  }

  start() {}

  update(deltaTime) {}

  draw(ctx) {}

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
