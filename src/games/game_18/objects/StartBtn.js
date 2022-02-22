import BasicBtn from './BasicBtn';

export default class StartBtn extends BasicBtn {
  constructor(scene, x, y, children) {
    super(scene, x, y, children)

    let sprite = scene.add.sprite(0, 0, 'strBtn')

    this.create(sprite, this.onClick.bind(this))
    // this.goFullscreenOnClick();
  }

  onClick() {
    this.scene.sound.stopAll();
    this.scene.scene.start('PreloaderGame')
    //this.scene.scene.start('Game', { number: 0, currentQuestionGroup: [], stopAll: false })

  }
}