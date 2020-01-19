const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    spr: cc.Sprite = null;

    @property
    text: string = 'hello';

    last: number = 0;
    start() {
        // init logic
        //this.label.string = this.text;
        this.last = Date.now();
    }

    update(dt) {
        var now = Date.now();
        var delta = now - this.last;
        this.last = now;

        this.spr.node.y = this.spr.node.y - 600*delta/1000;
        if (this.spr.node.y < -800) {
            this.spr.node.y = 1000;
        }
    }
}
