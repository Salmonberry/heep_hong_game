import BasicScene from './BasicScene'
import LoadProgress from '../components/LoadProgress';


export default class PreloaderScene extends BasicScene {

    constructor() {
        super("Preloader"
        )

        this.progressLoader = null;
    }

    preload() {
        this.buildBackground('backgroundPreloadingScene');

        this.progressLoader = new LoadProgress(this, () => this.scene.start('Tutor'));

        const imageFiles = {
            'backgroundTutorEnd': require('../assets/images/background_tutor_end.png'),
            'backgroundGamePlay': require('../assets/images/background_game_play_scene.png'),
            'backgroundPlayer': require('../assets/images/background_player.png'),
            'gameEndDialogBox': require('../assets/images/background_game_end_dialog.png'),
            'gameEndDialogBoxTexture': require('../assets/images/texture_game_end_scene_dialog_box.png'),
            'uiEgg': require('../assets/images/ui_egg.png'),
            'uiRecorder': require('../assets/images/ui_recorder.png'),
            'clawTexture': require('../assets/images/texture_claw.png'),
            'errorTexture': require('../assets/images/texture_error.png'),
            'correctTexture':require('../assets/images/texture_correct.png'),
            
            'textureObject0': require('../assets/images/objects/0.png'),
            'textureObject1': require('../assets/images/objects/1.png'),
            'textureObject2': require('../assets/images/objects/2.png'),
            'textureObject3': require('../assets/images/objects/3.png'),
            'textureObject4': require('../assets/images/objects/4.png'),
            'textureObject5': require('../assets/images/objects/5.png'),
            'textureObject6': require('../assets/images/objects/6.png'),
            'textureObject7': require('../assets/images/objects/7.png'),
            'textureObject8': require('../assets/images/objects/8.png'),
            'textureObject9': require('../assets/images/objects/9.png'),
            'textureObject10': require('../assets/images/objects/10.png'),
            'textureObject11': require('../assets/images/objects/11.png'),
            'textureObject12': require('../assets/images/objects/12.png'),
            'textureObject13': require('../assets/images/objects/13.png'),
            'textureObject14': require('../assets/images/objects/14.png'),
            'textureObject15': require('../assets/images/objects/15.png'),
            'textureObject16': require('../assets/images/objects/16.png'),
            'textureObject17': require('../assets/images/objects/17.png'),
            'textureObject18': require('../assets/images/objects/18.png'),
            'textureObject19': require('../assets/images/objects/19.png'),
            'textureObject20': require('../assets/images/objects/20.png'),
            'textureObject21': require('../assets/images/objects/21.png'),
            'textureObject23': require('../assets/images/objects/23.png'),
            'textureObject24': require('../assets/images/objects/24.png'),
            'textureObject25': require('../assets/images/objects/25.png'),
            'textureObject26': require('../assets/images/objects/26.png'),
            'textureObject27': require('../assets/images/objects/27.png'),
            'textureObject28': require('../assets/images/objects/28.png'),
            'textureObject29': require('../assets/images/objects/29.png'),
        };

        const atlasFiles = {
            'tutorTexture': {
                img: require('../assets/atlas/atlas_tutor.png'), data: require('../assets/atlas/atlas_tutor.json')
            },
             'tutorTexture01': {
                 img: require('../assets/atlas/atlas_tutor01.png'),
                 data: require('../assets/atlas/atlas_tutor01.json')
             },
             'tutorTexture02': {
                 img: require('../assets/atlas/atlas_tutor02.png'),
                 data: require('../assets/atlas/atlas_tutor02.json')
             },
             'tutorTexture03': {
                 img: require('../assets/atlas/atlas_tutor03.png'),
                 data: require('../assets/atlas/atlas_tutor03.json')
             },
            'penguinTexture': {
                img: require('../assets/atlas/atlas_penguin.png'), data: require('../assets/atlas/atlas_penguin.json')
            },
            'endTexture': {
                img: require('../assets/atlas/atlas_end.png'), data: require('../assets/atlas/atlas_end.json')
            },
            'lionLeftRecorderTexture': {
                img: require('../assets/atlas/atlas_lion_left_recorder.png'), data: require('../assets/atlas/atlas_lion_left_recorder.json')
            },
            'playerOnPlayingTexture': {
                img: require('../assets/atlas/atlas_player_on_playing.png'), data: require('../assets/atlas/atlas_player_on_playing.json')
            }
        }

        const soundFiles = {
            'buttonEffectSound': require('../assets/audio/sound_effect/sound_effect_button_on_clicked.mp3'),
            'gamePlaySceneBackgroundMusic': require('../assets/audio/bgm_game_play_scene.mp3'),
            'gameEndSceneBackgroundMusic': require('../assets/audio/bgm_game_end_scene.mp3'),

            'robotArmAppearSoundEffect': require('../assets/audio/sound_effect/sound_effect_robot_arm_appear_on_the_scene.mp3'),
            'errorSoundEffect': require('../assets/audio/sound_effect/sound_effect_error.mp3'),
            'correctSoundEffect': require('../assets/audio/sound_effect/sound_effect_correct.mp3'),
            'loseSoundEffect': require('../assets/audio/sound_effect/sound_effect_lose.mp3'),
            'winSoundEffect': require('../assets/audio/sound_effect/sound_effect_win.mp3'),

        }

        this.load.spritesheet('startButton', require('../assets/images/button_start_game.png'), { frameWidth: 776, frameHeight: 227 });
        this.load.spritesheet('retryButton', require('../assets/images/button_retry.png'), { frameWidth: 410, frameHeight: 163.5 });
        this.load.spritesheet('gameProgressExitButton', require('../assets/images/button_exit_progress_game.png'), { frameWidth: 186, frameHeight: 209 });
        this.load.spritesheet('gameEndExitButton', require('../assets/images/button_game_end_exit.png'), { frameWidth: 410, frameHeight: 163.5 });
        this.load.spritesheet('resetButton', require('../assets/images/button_reset.png'), { frameWidth: 228, frameHeight: 241 });
        this.load.spritesheet('voiceButton', require('../assets/images/button_voice.png'), { frameWidth: 186, frameHeight: 210 });
        this.load.spritesheet('playerButton', require('../assets/images/button_player_on_playing.png'), { frameWidth: 186, frameHeight: 219 });
        this.load.spritesheet('backgroundMusicButtonOnPlay', require('../assets/images/button_background_music_on_play.png'), { frameWidth: 186, frameHeight: 209 });
        this.load.spritesheet('backgroundMusicButtonOnPause', require('../assets/images/button_background_music_on_pause.png'), { frameWidth: 186, frameHeight: 209 });

        this.preloadFromArr({ img: imageFiles, atlas: atlasFiles, sound: soundFiles });
    }

}
