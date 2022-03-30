import Phaser from 'phaser'

export default class ExitProgressGameButton extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {

        super(scene, x, y);
        scene.add.existing(this);

        this.texture = scene.add.sprite(0, 0, 'gameProgressExitButton').setScale(0.8);

        this.setSize(this.texture.displayWidth, this.texture.displayHeight);

        this.add(this.texture);

        this.setInteractive({
                useHandCursor: true
            }).on(
                Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    this.texture.setFrame(1);
                    this.onDownClicked();
                }
            )
            .on(
                Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                    this.texture.setFrame(0);
                    this.onUpClicked();
                }
            )
    }

    onDownClicked() {
        this.scene.sound.play('buttonEffectSound');

    }

    onUpClicked() {
        window.history.back();
    }
}