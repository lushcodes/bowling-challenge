class Game {

  constructor() {
    this.frameArray = [];
    this.currentFrameNumber = 1;
    this.frameInstance = null;
  }


  gameStart() {
    this.frameInstance = new Frame(this.currentFrameNumber);
  }

}