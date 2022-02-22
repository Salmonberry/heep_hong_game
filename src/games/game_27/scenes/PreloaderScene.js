import BasicScene from './BasicScene'
import config from '../config/index'

export default class PreloaderScene extends BasicScene {

    constructor() {
        super({
            key: "Preloader"
        })
    }

    preload() {

        this.buildBg('bg_title');
        const imageFiles = {
            'bg_L1': require('../assets/img/Bg.png'),
            'bg_tutor': require('../assets/img/tut_bg.png'),
            'end_box': require('../assets/img/end_box.png'),
            '4w_car1': require('../assets/img/4w_car1.png'),
            '4w_car2': require('../assets/img/4w_car2.png'),
            '4w_car3': require('../assets/img/4w_car3.png'),
            '4w_car4': require('../assets/img/4w_car4.png'),
            '4w_car5': require('../assets/img/4w_car5.png'),
            '4w_car6': require('../assets/img/4w_car6.png'),
            '6w_car1': require('../assets/img/6w_car1.png'),
            '6w_car2': require('../assets/img/6w_car2.png'),
            '6w_car3': require('../assets/img/6w_car3.png'),
            '13w_car1': require('../assets/img/13w_car1.png'),
            '13w_car2': require('../assets/img/13w_car2.png'),
            'car_box': require('../assets/img/car_box.png'),
        };

        const atlasFiles = {
            'tut1': { img: require('../assets/img/tut_1.png'), data: require('../assets/img/tut_1.json') },
            'tut2': { img: require('../assets/img/tut_2.png'), data: require('../assets/img/tut_2.json') },
            'tut3': { img: require('../assets/img/tut_3.png'), data: require('../assets/img/tut_3.json') },
            'wow_car': {img: require('../assets/img/Wow_car.png'), data: require('../assets/img/Wow_car.json')}, 
            'answer': { img: require('../assets/img/answer.png'), data: require('../assets/img/answer.json')},
            'end_pic':{ img: require('../assets/img/end_pic.png'), data: require('../assets/img/end_pic.json')},
        }

        const soundFiles = {
            'bgm': require('../assets/audio/Circus Theme(loop).mp3'),
            'buttonOnClcik': require('../assets/audio/comedy_pop_finger_in_mouth_002.mp3'),
            'drop': require('../assets/audio/HAMMER, WAR 81.mp3'),
            'goButtonOnClcik': require('../assets/audio/School Bell (short).mp3'),
            'winnerSound': require('../assets/audio/css1_lift1.mp3'),
            'errorSound': require('../assets/audio/css1_launch2.mp3'),
            'winnerSound2': require('../assets/audio/Roller Coaster Ride 1 (short).mp3'),
            'endpic': require('../assets/audio/Waltzing Circus (short).mp3')
        }


        this.load.spritesheet('extSmBtn', require('../assets/img/btn_ext_1.png'), { frameWidth: 186, frameHeight: 209 });
        this.load.spritesheet('strBtn', require('../assets/img/btn_str.png'), { frameWidth: 776, frameHeight: 227 });
        this.load.spritesheet('rplBtn', require('../assets/img/btn_rpl.png'), { frameWidth: 410, frameHeight: 163.5 });
        this.load.spritesheet('extBtn', require('../assets/img/btn_ext.png'), { frameWidth: 410, frameHeight: 163.5 });
        this.load.spritesheet('rtBtn', require('../assets/img/btn_rt.png'), { frameWidth: 168, frameHeight: 185 });
        this.load.spritesheet('ltBtn', require('../assets/img/btn_lt.png'), { frameWidth: 168, frameHeight: 185 });
        this.load.spritesheet('goBtn', require('../assets/img/go.png'), { frameWidth: 375, frameHeight: 250 });
        this.load.spritesheet('speakerBtn', require('../assets/img/btn_speaker.png'),{ frameWidth: 186, frameHeight: 209  });
        this.load.spritesheet('offSpeakerBtn', require('../assets/img/btn_speaker_off.png'), { frameWidth: 186, frameHeight: 209  })
        this.preloadFromArr({ img: imageFiles, atlas: atlasFiles, sound: soundFiles });
        let self = this;
        self.progressBar = self.add.graphics();
        self.loadingText = self.make.text({
            x: config.width / 2,
            y: config.height * 0.89,
            text: '連接中',
            style: {
                font: '25px monospace',
                fill: '#fff'
            }
        });
        self.loadingText.setOrigin(0.5, 0.5);
    
        self.load.on('progress', function (value) {
          self.progressBar.clear();
          self.progressBar.fillStyle(0xFC8EFA, 1);
          self.progressBar.fillRect(config.width * 0.118, config.height * 0.92, (config.width * 0.778) * value, 10);
        });
    
        self.load.on('complete', function () {
          self.loadingText.setText('連接完成');
          self.ready();
        }.bind(self));
    
      }
    
      ready () {
        let self = this
        self.scene.start('Tutor');
      }
    

}
