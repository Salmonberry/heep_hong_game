import Egg from "./Egg";

export default class EggAnswerItem extends Egg {

    constructor(scene, x, y, texture, isEnableDraggable) {

        super(scene, x, y, texture);

        this.create(isEnableDraggable);
    }

}