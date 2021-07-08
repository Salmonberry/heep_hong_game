import Phaser from 'phaser'

export default class VocieBtn extends Phaser.GameObjects.Container {

  constructor(scene, x, y) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.state = 'pause';

    this.background = scene.add.image(0, 0, 'sndBg')
    this.sprite =  scene.add.sprite(130, 0, 'plyBtn')

    this.scene.anims.create({
      key: 'wave',
      frames: this.scene.anims.generateFrameNames('wave', { prefix: 'frame', start: 0, end: 56 }),
      repeat: -1
    });

    this.wave = scene.add.sprite(-95, 0, 'Wave')
    this.wave.play('wave')

    this.vo1 = scene.sound.add('vo_egg');
    this.vo2 = scene.sound.add('vo_egg');
    this.vo3 = scene.sound.add('vo_egg');

    this.add(this.background);
    this.add(this.sprite);
    this.add(this.wave);
    this.scene.add.existing(this);

    this.sprite.setInteractive({
        useHandCursor: true
    })
    .on('pointerout', this.out.bind(this))
    .on('pointerdown', this.down.bind(this));

  }


  out(){
    this.sprite.setFrame(0)
  }

  down(){
    this.sprite.setFrame(1);
    this.sprite.setTexture('pusBtn');
    this.top1.play();

  }

}