import BasicScene from './BasicScene'
import GameEndDialog from '../components/DialogTipBox'
import { createEndAnimation } from '../assets/animations/EddAnimation';



export default class EndScene extends BasicScene {

    constructor() {
        super('End');

    }

    create() {

        super.create();
        this.sound.stopAll();

        createEndAnimation(this.anims);
        this.buildBg('backgroundTutorEnd')
        this.sound.play('gameEndSceneBGM');

        this.endBroad = new GameEndDialog(this, this.getColWidth(6), this.getRowHeight(6));
        localStorage.clear()

    }

}