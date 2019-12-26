
cc.Class({
    extends: cc.Component,

    properties: {

    },
    onBeginContact: function (contact, selfCollider, otherCollider) {
        console.log('碰到了');
    },
    onLoad() {

        this.node.on('touchmove', function (event) {
            let arPosition = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            let subPos = arPosition.sub(this.node.getPosition()).divSelf(0.1);
            this.node.getComponent(cc.RigidBody).linearVelocity = subPos;
            // this.node.setPosition(arPosition);
        }, this);
    },

    start() {

    },

    // update (dt) {},
});
