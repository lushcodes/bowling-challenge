describe('Game', () => {

  beforeEach(() => {
    game = new Game();
  });

  it('should have an array ready to receive frames', () => {
    expect(game.frameArray).toEqual([]);
  });
  it('should start with the current frame number as 1', () => {
    expect(game.currentFrameNumber).toEqual(1);
  });

  it('shouldn\'t initialise with a frame', () => {
    expect(game.frameInstance).toEqual(null);
  });

  describe('gameStart', () => {
    it('should create a frame instance when the game starts', () => {
      game.gameStart();
      expect(game.frameInstance).toBeInstanceOf(Frame);
    }) 
  })

});