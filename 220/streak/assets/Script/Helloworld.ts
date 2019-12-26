const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.MotionStreak)
    stream: cc.MotionStreak = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;
    }

    click() {
        this.anim.play();
        this.stream.reset();
        this.anim.on('stop', ()=>{
            this.anim.setCurrentTime(0);
        });
    }
}
