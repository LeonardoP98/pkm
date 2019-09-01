export default class InputHandler {
  constructor(map, game) {
    document.addEventListener("keydown", event => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 38:
        case 87:
          map.moveUp();
          break;
        case 40:
        case 83:
          map.movDown();
          break;
        case 37:
        case 65:
          map.moveLeft();
          break;
        case 39:
        case 68:
          map.moveRight();
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 38:
        case 87:
          if (map.speed.y < 0) map.stop();
          break;
        case 40:
        case 83:
          if (map.speed.y < 0) map.stop();
          break;
        case 37:
        case 65:
          if (map.speed.x < 0) map.stop();
          break;
        case 39:
        case 68:
          if (map.speed.x > 0) map.stop();
          break;
        default:
      }
    });
  }
}
