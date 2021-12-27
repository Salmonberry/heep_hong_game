
import BasicScene from "./BasicScene"
import ExitButton from '../components/ExitProgressGameButton'

import {
    createEggTwistingMachineAnimation
} from '../assets/animations/EggTwistingMachineAnimation';
// import {
//     createGameStatusAnimations
// } from '../assets/animations/GameStatusAnimation';
import GameSprite from '../components/GameSprite';
import GameManager from '../components/GameManager';
import AnswerArea from "../components/AnswerArea";
// import Colors from "../styles/Colors";


export default class GameScene extends BasicScene {

    constructor() {
        super('Game');

        this.playLayer = undefined
        this.questionNumberList = []

        this.questionIndex = undefined
        this.backgroundLayer = undefined
        this.gameFailedLayer = undefined

        this.currentQuestionAnswer = undefined
    }

    preload() {

        //User need to press the Start Button to reach here, all audio need to be play after the first user touch event in mobile device.
        // this.preloadFromArr({
        // sound: this.sound.add('drums').setLoop(true).play()
        // });


    }

    create() {

        super.create();



        createEggTwistingMachineAnimation(this.anims);

        this.paintGameScene(this);




    }

    /**
     * generate a question from the local question data
     * 从题库中随机抽取一道题目
     */
    generateQuestion() {

        let question = null;
        let errorQuestionIndex = JSON.parse(localStorage.getItem('errorQuestionIndex'));

        if (errorQuestionIndex == null) {
            this.questionIndex = GameManager.getInstance().generateGameQuestionIndex();
            
        } else {

            if (JSON.parse(localStorage.getItem('gameChance'))) {
                this.questionIndex = errorQuestionIndex;
            }

        }

        question = JSON.parse(localStorage.getItem(this.questionIndex));
        console.log("当前抽取的题目:%o",question);
        // question = JSON.parse(localStorage.getItem(8));
        this.currentQuestionAnswer = question.answer;

        return question;
    }
    /**
     * paint all game ui element in this scene
     * 绘制GameScene的所有Ui元素
     */
    paintGameScene() {
        this.playLayer = this.add.layer().setDepth(1);
        this.backgroundLayer = this.add.layer().setDepth(0);

        let eggTwistingMachineAnimation = new GameSprite(this, 960, 540, 'eggTwistingMachineTexture');
        eggTwistingMachineAnimation.play('eggTwistingMachineAnimation');

        let answerArea = new AnswerArea(this,this.generateQuestion());


        let exitButton = new ExitButton(this, 120, 135);

        this.backgroundLayer.add([this.buildBg('backgroundGamePlay'), eggTwistingMachineAnimation, answerArea]);
        this.playLayer.add([exitButton]);
    }

    paintGameSuccess(doll) {

        GameManager.getInstance().updateGameQuestionNumberList(this.questionIndex);
        GameManager.getInstance().updateGamePlayTotal((value) => {
            this.time.addEvent({
                delay: 2000,
                callback: () => this.scene.start(value ? 'Game' : 'End')
            })
        });

        let targetPosition = JSON.parse(localStorage.getItem('targetPosition'));
        this.playLayer.add(new GameSprite(this, targetPosition.x + doll.x, targetPosition.y + doll.y - 500, "gameSuccessAnimation"));
        this.sound.add('starEffectSound').play();
    }


    paintGameFailed(clipBox) {

        let doll = clipBox.list[1];


        let errorSprite = null;
        let _isFirstError = null;
        let targetPosition = JSON.parse(localStorage.getItem('targetPosition'));


        GameManager.getInstance().setGameQuestionError(this.questionIndex, (isFirstError, value) => {

            _isFirstError = isFirstError;
            console.log({ isLastQuestion: value })
            this.time.addEvent({
                delay: isFirstError ? 2000 : 5000,
                callback: () => value ? this.scene.start('End') : this.scene.restart('Game')
            });
        }
        );

        errorSprite = new GameSprite(this, targetPosition.x + doll.x, targetPosition.y + doll.y - 500, "gameFailAnimation")

        errorSprite.on('animationcomplete', () => {
            if (!_isFirstError) {
                this.time.addEvent({
                    delay: 500,
                    callback: () => {

                    }
                })
            }
        })

        this.sound.add('electricShockEffectSound').play();

        this.playLayer.add(errorSprite);
    }


}