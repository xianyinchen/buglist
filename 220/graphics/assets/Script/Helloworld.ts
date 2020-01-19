const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Node)
    gridCon: cc.Node = null;
    private gtxArr: cc.Graphics[];
    start () {
        // init logic
        this.gtxArr = [];
        this.addGrphicsToNode();
        this.gridCon.on("touchstart",this.touchStart,this);
        this.gridCon.on("touchmove",this.touchMove,this);
        this.gridCon.on("touchend",this.touchEnd,this);
    }
    private touchStart(e: cc.Event.EventTouch): void {
        this.gtxArr[0].strokeColor = new cc.Color(255,0,0,255);
        this.gtxArr[0].clear();
        let nodeLocation = this.convertNodeSpace(e.getLocation());
        this.gtxArr[0].moveTo(nodeLocation.x,nodeLocation.y);

    }
    private touchMove(e: cc.Event.EventTouch): void {
        let nodeLocation = this.convertNodeSpace(e.getLocation());
        this.gtxArr[0].lineTo(nodeLocation.x,nodeLocation.y);
        this.gtxArr[0].stroke();
    }
    private touchEnd(e: cc.Event): void {
        
    }
    clickEvent(e: cc.Event,data: any) {
        if(data === "back") {
            cc.director.loadScene("start");
        }
    }
    private clearPath(): void {
        if(this.gtxArr[0]) {
            this.gtxArr[0].strokeColor = new cc.Color(255,0,0,255);
            this.gtxArr[0].clear();
        }
    }
    private convertNodeSpace(location: cc.Vec2): cc.Vec2 {
        let nodeLocation = this.gridCon.convertToNodeSpaceAR(location);
        return nodeLocation;
    }
    public onDestroy(): void {
        this.gridCon.off("touchstart",this.touchStart,this);
        this.gridCon.off("touchmove",this.touchMove,this);
        this.gridCon.off("touchend",this.touchEnd,this);
        
    }
    private addGrphicsToNode(): void {
            for(let i = 0; i < 1; i++) {
                let penNode = new cc.Node();
                penNode.name = "pen" + i.toString();
                penNode.addComponent(cc.Graphics);
                this.gridCon.addChild(penNode);
                // 添加到画笔数组中 设置每个画笔的样式信息起点类型，拐点类型
                this.gtxArr.push(penNode.getComponent(cc.Graphics));
                this.gtxArr[i].lineWidth = 40;
                this.gtxArr[i].lineCap = cc.Graphics.LineCap.ROUND;
                this.gtxArr[i].lineJoin = cc.Graphics.LineJoin.ROUND;
                // 根据十六机制颜色进行填充
                // this.gtxArr[i].fillColor.fromHEX("#ffffff");
    
            } 
    }
}
