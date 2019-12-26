

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    clickEvent(e: cc.Event,data: any) {
        if(data === "start") {
            cc.director.loadScene("helloworld");
        }
    }

    // update (dt) {}
}
