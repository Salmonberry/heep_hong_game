import Phaser from "phaser";

export default class GameSprite extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture) {

        super(scene, x, y,texture);


        scene.add.existing(this);
    
        
    }




}