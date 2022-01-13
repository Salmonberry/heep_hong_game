import Egg from "./Egg";
import VoiceButton from "./VoiceButton";

export default class EggQuestion extends Egg {
    constructor(scene, point, texture, objectItem, isEnableDraggable) {

        super(scene, point, texture, "textureObject" + objectItem.index);

        this.objectName = objectItem.objectName;

        this.setName("EggQuestion");

        this.create(isEnableDraggable);

        const voiceButton = new VoiceButton(this.scene, 30, 90);
        voiceButton.setScale(0.2);

        this.add(voiceButton);
    }
}