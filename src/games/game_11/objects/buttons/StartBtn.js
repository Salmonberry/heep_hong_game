import BasicBtn  from './BasicBtn';

export default class StartBtn extends BasicBtn {
  constructor(scene,x,y,children){
    super(scene, x, y,children)


    let sprite =  scene.add.sprite(0, 0, 'strBtn')
    this.create(sprite,this.onClick.bind(this))
    

  }

  onClick(){

    if(typeof this.scene.game.canvas.requestFullscreen === 'function') {
      this.scene.game.canvas.requestFullscreen()
    }else if(typeof this.scene.game.canvas.webkitRequestFullscreen === 'function') {
      this.scene.game.canvas.webkitRequestFullscreen()
    }else if(typeof this.scene.game.canvas.msRequestFullscreen === 'function') {
      this.scene.game.canvas.msRequestFullscreen()
    }else if(typeof this.scene.game.canvas.mozRequestFullscreen === 'function') {
      this.scene.game.canvas.mozRequestFullscreen()
    }


    this.scene.scene.start('Game')

  }
}