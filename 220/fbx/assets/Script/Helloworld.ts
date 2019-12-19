const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.SkeletonAnimationClip)
    clip: cc.SkeletonAnimationClip = null;


    @property(cc.SkeletonAnimation)
    play: cc.SkeletonAnimation = null;    

    start() {
        this.clip.wrapMode = cc.WrapMode.Normal;
        // init logic
        this.play.on('stop', ()=>{
            console.log("????")    
        })
    }
}
