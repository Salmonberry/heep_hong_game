import Phaser from 'phaser'
import config from './config'

import BootScene from './scenes/BootScene'
import PreloaderScene from './scenes/PreloaderScene'
import TutorScene from './scenes/TutorScene'
import GameScene from './scenes/GameScene'
import EndScene from './scenes/EndScene'

const gameConfig = Object.assign(config, {
    scene: [BootScene, PreloaderScene, TutorScene, GameScene, EndScene]
});

/**
 * 
 * @param {*} loader 
 * 
 * An override to fix game audio not playing in mobile device.
 * https://github.com/photonstorm/phaser/issues/5696
 * 
 */
Phaser.Scenes.SceneManager.prototype.loadComplete = function (loader) {
    const scene = loader.scene
    if (this.game.sound && this.game.sound.onBlurPausedSounds) {
        this.game.sound.unlock()
    }
    this.create(scene)

}

class Game22 extends Phaser.Game {

    constructor(config, urlParams, gtag) {
        super(config);

        this.globals = {
            gtag: gtag,
            gameStageIndex:urlParams
        }


    }
}


function launch(urlParams,gtag) {

    let game = new Game22(gameConfig, urlParams,gtag);

    return game
}

export default launch
export { launch }
