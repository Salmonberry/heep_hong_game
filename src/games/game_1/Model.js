export default class Model {
  constructor() {
    this._character = {};
    this._level = 1;
    this._stage = 1;
    this._selectLimit = 3;
    this._stageLimit = 3;
    this._bgMusicPlaying = false;
  }

  set character(value){
    this._character = value;
  }

  get character(){
    return this._character;
  }

  set stage(value) {
    this._stage = parseInt(value)
    if(this._stage > this._stageLimit) {
      this._stage = 1
      this.level++
    }
    return this._stage
  }

  get stage() {
    return this._stage
  }

  set level(value){
    this._level =  parseInt(value);
    if(value > 1){
      this._selectLimit = 4
    }else{
      this._selectLimit = 3
    }
  }

  get level(){
    return this._level;
  }

  get selectLimit(){
    return this._selectLimit;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }

}
