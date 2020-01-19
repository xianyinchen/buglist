const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(sp.Skeleton)
    sheng: sp.Skeleton = null;

    @property
    text: string = 'hello';
    idx: number = 4;
    SpSkin:string[] = [
        '',
        '',
        '',
        'dashen',
        'daili',
    ];

    start () {
        // init logic
        this.label.string = this.text;
    }

    clickBtnAni() {
        if (this.idx == 4) 
            this.idx = 3
        else
            this.idx = 4
        let aniName = 'btn' + this.idx;
        this.sheng.node.active = true;
        this.sheng.setSkin(this.SpSkin[this.idx]);

        // 执行这个可以生效，但是时间会被重置
        // this.sheng.setToSetupPose();
        
        this.sheng.setAnimation(0, aniName, true);
    }
}
