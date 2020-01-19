cc.Class({
    extends: cc.Component,

    properties: {
        ptnode: {
            default: null,
            type: cc.Node
        }
    },
    start() {

    },

    // use this for initialization
    onLoad: function () {
 
   /* 
        let width = this.node.width;
        let height =  this.node.height;

        let node = new cc.Node();

        let body = node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        this._addBound(node, 0, height / 2, width, 20);
        this._addBound(node, 0, -height / 2, width, 20);
        this._addBound(node, -width / 2, 0, 20, height);
        this._addBound(node, width / 2, 0, 20, height);

        node.parent = this.node; */
    },

    _addBound(node, x, y, width, height) {
        let collider = node.addComponent(cc.PhysicsBoxCollider);
        collider.offset.x = x;
        collider.offset.y = y;
        collider.size.width = width;
        collider.size.height = height;
    },

    update: function (dt) {
        var pt = this.ptnode.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        var collider = cc.director.getPhysicsManager().testPoint(pt);
        console.log(collider)        
    },
});
