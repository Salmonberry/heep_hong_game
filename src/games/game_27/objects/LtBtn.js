import BasicBtn from './BasicBtn'

export default class LtBtn extends BasicBtn {

    constructor(scene, x, y) {
        super(scene, x, y)
        this.scene = scene;
        this.sprite = scene.add.sprite(0, 0, 'ltBtn').setScale(0.8).setDepth(99);
        this.create(this.sprite, this.onClick.bind(this))

    }

    onClick() {
        let length = 0;
        this.scene.subjectItem.list.forEach(item => {
            length += item.width;
        });
        length = length/3;
        if (Math.abs(this.scene.subjectItem.x) <= length) {
            this.scene.subjectItem.x += 100;
        } else {
            this.scene.subjectItem.x  = length;      
        }
    }
}