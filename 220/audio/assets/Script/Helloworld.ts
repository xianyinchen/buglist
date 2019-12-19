const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;
    }

    click1(){
        this.label.string = "start ------";
        cc.loader.loadResDir("audio", (err, res)=>{
            this.label.string = "=>" + res.length;
        })        
    }
}
