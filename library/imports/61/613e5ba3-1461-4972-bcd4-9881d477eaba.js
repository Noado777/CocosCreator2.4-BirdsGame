"use strict";
cc._RF.push(module, '613e5ujFGFJcrzUmIHUd+q6', 'BirdManager');
// script/BirdManager.ts

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
var BirdControl_1 = require("./BirdControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdManager = /** @class */ (function (_super) {
    __extends(BirdManager, _super);
    function BirdManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 小鸟预设体
        _this.Bird = null;
        // 多久出来一只小鸟
        _this.time = 1.5;
        // 分数板
        _this.score = 0;
        return _this;
    }
    BirdManager.prototype.start = function () {
        this.createBirds();
    };
    // 另外写创建小鸟的函数
    BirdManager.prototype.createBirds = function () {
        var _this = this;
        // 每隔多久一只小鸟,过delayTime之后执行第二个动作cc.callFunc(), schedule()也可以用
        var seq = cc.sequence(cc.delayTime(this.time), cc.callFunc(function () {
            // 创建小鸟
            var new_bird = cc.instantiate(_this.Bird);
            // 设置父物体
            new_bird.setParent(_this.node);
            // 小鸟初始随机位置
            new_bird.y = 0;
            new_bird.x = Math.random() * 230 - 120;
            // this.node.getComponent(BirdControl).fly();
            // new_bird.getComponent(BirdControl).fly();
            // 加分回调
            new_bird.getComponent(BirdControl_1.default).addScoreCallBack = function () {
                _this.score += 100;
                // console.log('分数'+this.score)
                _this.score_number.string = _this.score + '';
            };
            // 游戏结束回调
            new_bird.getComponent(BirdControl_1.default).dieCallBack = function () {
                _this.node.destroyAllChildren();
                _this.node.stopAllActions();
                // console.log('游戏结束')
                _this.node.parent.getChildByName('backView').active = true;
            };
        }));
        // runAction(cc.repeatForever())来套,一直产生小鸟
        this.node.runAction(cc.repeatForever(seq));
    };
    BirdManager.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], BirdManager.prototype, "Bird", void 0);
    __decorate([
        property(cc.Label)
    ], BirdManager.prototype, "score_number", void 0);
    BirdManager = __decorate([
        ccclass
    ], BirdManager);
    return BirdManager;
}(cc.Component));
exports.default = BirdManager;

cc._RF.pop();