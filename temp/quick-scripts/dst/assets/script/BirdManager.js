
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BirdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCaXJkTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtREM7UUFsREcsUUFBUTtRQUVSLFVBQUksR0FBYSxJQUFJLENBQUU7UUFDdkIsV0FBVztRQUNYLFVBQUksR0FBVSxHQUFHLENBQUU7UUFDbkIsTUFBTTtRQUNOLFdBQUssR0FBVyxDQUFDLENBQUU7O0lBNEN2QixDQUFDO0lBeENHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQUNELGFBQWE7SUFDYixpQ0FBVyxHQUFYO1FBQUEsaUJBOEJDO1FBN0JHLDREQUE0RDtRQUM1RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEQsT0FBTztZQUNQLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLFFBQVE7WUFDUixRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixXQUFXO1lBQ1gsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1lBQ25DLDZDQUE2QztZQUU3Qyw0Q0FBNEM7WUFDNUMsT0FBTztZQUNQLFFBQVEsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLGdCQUFnQixHQUFHO2dCQUNsRCxLQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztnQkFDbEIsK0JBQStCO2dCQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUE7WUFDRCxTQUFTO1lBQ1QsUUFBUSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUMsV0FBVyxHQUFHO2dCQUM3QyxLQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFOUQsQ0FBQyxDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNILHlDQUF5QztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNHO0lBTXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0k7SUFUTixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUQvQjtJQUFELGtCQUFDO0NBbkRELEFBbURDLENBbkR3QyxFQUFFLENBQUMsU0FBUyxHQW1EcEQ7a0JBbkRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpcmRDb250cm9sIGZyb20gXCIuL0JpcmRDb250cm9sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpcmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIOWwj+m4n+mihOiuvuS9k1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEJpcmQ6Y2MuUHJlZmFiID0gbnVsbCA7IFxyXG4gICAgLy8g5aSa5LmF5Ye65p2l5LiA5Y+q5bCP6bifXHJcbiAgICB0aW1lOm51bWJlciA9IDEuNSA7XHJcbiAgICAvLyDliIbmlbDmnb9cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwIDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlX251bWJlcjpjYy5MYWJlbCA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmlyZHMoKTtcclxuICAgICAgICBcclxuICAgIH0gIFxyXG4gICAgLy8g5Y+m5aSW5YaZ5Yib5bu65bCP6bif55qE5Ye95pWwXHJcbiAgICBjcmVhdGVCaXJkcygpe1xyXG4gICAgICAgIC8vIOavj+malOWkmuS5heS4gOWPquWwj+m4nyzov4dkZWxheVRpbWXkuYvlkI7miafooYznrKzkuozkuKrliqjkvZxjYy5jYWxsRnVuYygpLCBzY2hlZHVsZSgp5Lmf5Y+v5Lul55SoXHJcbiAgICAgICAgbGV0IHNlcSA9IGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSh0aGlzLnRpbWUpLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIC8vIOWIm+W7uuWwj+m4n1xyXG4gICAgICAgICAgICBsZXQgbmV3X2JpcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJpcmQpO1xyXG4gICAgICAgICAgICAvLyDorr7nva7niLbniankvZNcclxuICAgICAgICAgICAgbmV3X2JpcmQuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vIOWwj+m4n+WIneWni+maj+acuuS9jee9rlxyXG4gICAgICAgICAgICBuZXdfYmlyZC55ID0gMDtcclxuICAgICAgICAgICAgbmV3X2JpcmQueCA9IE1hdGgucmFuZG9tKCkqMjMwLTEyMDtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChCaXJkQ29udHJvbCkuZmx5KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBuZXdfYmlyZC5nZXRDb21wb25lbnQoQmlyZENvbnRyb2wpLmZseSgpO1xyXG4gICAgICAgICAgICAvLyDliqDliIblm57osINcclxuICAgICAgICAgICAgbmV3X2JpcmQuZ2V0Q29tcG9uZW50KEJpcmRDb250cm9sKS5hZGRTY29yZUNhbGxCYWNrID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WIhuaVsCcrdGhpcy5zY29yZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVfbnVtYmVyLnN0cmluZyA9IHRoaXMuc2NvcmUgKyAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmuLjmiI/nu5PmnZ/lm57osINcclxuICAgICAgICAgICAgbmV3X2JpcmQuZ2V0Q29tcG9uZW50KEJpcmRDb250cm9sKS5kaWVDYWxsQmFjayA9ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5ri45oiP57uT5p2fJylcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoJ2JhY2tWaWV3JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLy8gcnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoKSnmnaXlpZcs5LiA55u05Lqn55Sf5bCP6bifXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKHNlcSkpOyAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==