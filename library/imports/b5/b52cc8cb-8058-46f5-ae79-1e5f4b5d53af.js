"use strict";
cc._RF.push(module, 'b52ccjLgFhG9a55Hl9LXVOv', 'BirdControl');
// script/BirdControl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdControl = /** @class */ (function (_super) {
    __extends(BirdControl, _super);
    function BirdControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 血量
        _this.Hp = 1;
        // 速度
        _this.speed = 100;
        // 目标点
        _this.targetPos = null;
        return _this;
    }
    BirdControl.prototype.start = function () {
        this.fly();
    };
    BirdControl.prototype.fly = function () {
        var _this = this;
        // 设置随机目标点
        this.targetPos = cc.v2(Math.random() * 300 - 80, 250); // 这里和上面cc.Vec2不一样，这里写的是cc.v2 注意
        // 小鸟翻转
        if (this.targetPos.x > this.node.x) {
            this.node.scaleX = -1;
        }
        // 移动，这里老师用距离除以速度得出时间，而不是在update里调用dt
        var action = cc.moveTo((this.targetPos.y - this.node.y) / this.speed, this.targetPos);
        var seq = cc.sequence(action, cc.callFunc(function () {
            // 游戏结束
            _this.dieCallBack();
        }));
        this.node.runAction(seq); // 括号内填的本来只有action,为了实现diecallBack回调，换成seq序列
        // 动画
        // 点击掉下
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            _this.Hp -= 1;
            console.log('血量' + _this.Hp);
            _this.node.stopAllActions();
            // 要小鸟换成掉下来的动画/图片
            _this.node.getComponent(cc.Animation).play('die');
            // 停止飞翔动作
            _this.node.stopAllActions();
            // 小鸟掉下来                
            var fall = cc.v2(_this.node.x, 0);
            var action_die = cc.moveTo(_this.node.y / _this.speed / 2, fall);
            _this.node.runAction(cc.sequence(action_die, cc.callFunc(function () {
                // moveTo执行完，小鸟掉到草里，再执行下一个动作即：
                // 销毁自身
                _this.destroy();
            })));
            // runAction()括号内填的本来只有action_die,为了实现addScoreCallBack回调
            // 换成seq序列,虽然看起来复杂，其实和上面那个是一样的
            // 加分，回调到BirdManager
            _this.addScoreCallBack();
        });
        // 飞出屏幕外，游戏结束，在BirdManager里写
        // 看上面seq的回调  
    };
    BirdControl.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], BirdControl.prototype, "speed", void 0);
    BirdControl = __decorate([
        ccclass
    ], BirdControl);
    return BirdControl;
}(cc.Component));
exports.default = BirdControl;
/*
不这样写，用动画切换，2个动画，播放move换成播放die,die就是一帧的动画
// 加载图集
cc.loader.loadRes('birddie',cc.SpriteFrame,(err,pic)=>{
    // 换图
    this.node.getComponent(cc.Sprite).spriteFrame = pic ;
})
// 要小鸟换成掉下来的动画/图片
this.node.getComponent(cc.Animation).play('die');
*/ 

cc._RF.pop();