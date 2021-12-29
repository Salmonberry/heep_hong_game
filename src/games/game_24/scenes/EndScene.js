import BasicScene from './BasicScene'
import EndBroad from '../objects/EndGameBroad'

export default class EndScene extends BasicScene {

    constructor() {
        super({
            key: 'End'
        });

    }

    create() {

        super.create();

        this.buildBg('end_bg')

        let music = this.sound.add('pass')
        music.setLoop(false)
        music.play()


        this.endBroad = new EndBroad(this, this.getColWidth(6), this.getRowHeight(5.5))

        this.add.existing(this.endBroad)

    }

}