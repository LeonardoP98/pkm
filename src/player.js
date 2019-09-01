export default class Player {
  constructor(game, position) {
    this.image = document.getElementById("img_player");
    this.image.setAttribute("src", "/assets/images/characters");

    this.game = game;

    this.position = position;

    this.width = 80;

    this.height = 24;

    this.markedForDeletion = false;
  }

  update(deltaTime) {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
