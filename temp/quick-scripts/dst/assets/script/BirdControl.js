
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BirdControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCaXJkQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdFQztRQXZFRyxLQUFLO1FBQ0wsUUFBRSxHQUFVLENBQUMsQ0FBRTtRQUNmLEtBQUs7UUFFTCxXQUFLLEdBQVUsR0FBRyxDQUFFO1FBQ3BCLE1BQU07UUFDTixlQUFTLEdBQVcsSUFBSSxDQUFDOztJQWlFN0IsQ0FBQztJQXRERywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHlCQUFHLEdBQUg7UUFBQSxpQkEyQ0M7UUExQ0csVUFBVTtRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxHQUFFLEVBQUUsRUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFHLGdDQUFnQztRQUN2RixPQUFPO1FBQ1AsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBRTtTQUMxQjtRQUNELHFDQUFxQztRQUNyQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU87WUFDUCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUUsNENBQTRDO1FBQ3RFLEtBQUs7UUFDTCxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLFVBQUMsS0FBSztZQUM1QyxLQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLGlCQUFpQjtZQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELFNBQVM7WUFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLHdCQUF3QjtZQUN4QixJQUFJLElBQUksR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsS0FBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7WUFDekQsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDbkQsOEJBQThCO2dCQUM5QixPQUFPO2dCQUNQLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTCx3REFBd0Q7WUFDeEQsOEJBQThCO1lBQzlCLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNGLDRCQUE0QjtRQUU1QixjQUFjO0lBRWxCLENBQUM7SUFDRCw0QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUtWLENBQUM7SUFsRUQ7UUFEQyxRQUFROzhDQUNXO0lBTEgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdFL0I7SUFBRCxrQkFBQztDQXhFRCxBQXdFQyxDQXhFd0MsRUFBRSxDQUFDLFNBQVMsR0F3RXBEO2tCQXhFb0IsV0FBVztBQXlFaEM7Ozs7Ozs7OztFQVNFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlyZENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8g6KGA6YePXHJcbiAgICBIcDpudW1iZXIgPSAxIDtcclxuICAgIC8vIOmAn+W6plxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDpudW1iZXIgPSAxMDAgO1xyXG4gICAgLy8g55uu5qCH54K5XHJcbiAgICB0YXJnZXRQb3M6Y2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgLy8gdGFyZ2V0WDpudW1iZXIgXHJcbiAgICAvLyB0YXJnZXRZOm51bWJlclxyXG5cclxuICAgIC8vIOa4uOaIj+e7k+adn+Wbnuiwg1xyXG4gICAgZGllQ2FsbEJhY2s6IEZ1bmN0aW9uIDtcclxuXHJcbiAgICAvLyDliqDliIblm57osINcclxuICAgIGFkZFNjb3JlQ2FsbEJhY2s6IEZ1bmN0aW9uIDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5mbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmbHkoKXtcclxuICAgICAgICAvLyDorr7nva7pmo/mnLrnm67moIfngrlcclxuICAgICAgICB0aGlzLnRhcmdldFBvcyA9IGNjLnYyKE1hdGgucmFuZG9tKCkqMzAwIC04MCAsIDI1MCk7ICAgLy8g6L+Z6YeM5ZKM5LiK6Z2iY2MuVmVjMuS4jeS4gOagt++8jOi/memHjOWGmeeahOaYr2NjLnYyIOazqOaEj1xyXG4gICAgICAgIC8vIOWwj+m4n+e/u+i9rFxyXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0UG9zLnggPiB0aGlzLm5vZGUueCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOenu+WKqO+8jOi/memHjOiAgeW4iOeUqOi3neemu+mZpOS7pemAn+W6puW+l+WHuuaXtumXtO+8jOiAjOS4jeaYr+WcqHVwZGF0ZemHjOiwg+eUqGR0XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLm1vdmVUbygodGhpcy50YXJnZXRQb3MueS10aGlzLm5vZGUueSkvdGhpcy5zcGVlZCAsdGhpcy50YXJnZXRQb3MpO1xyXG5cclxuICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2UoYWN0aW9uLGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIC8vIOa4uOaIj+e7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmRpZUNhbGxCYWNrKCk7ICAgICAgICBcclxuICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpICAvLyDmi6zlj7flhoXloavnmoTmnKzmnaXlj6rmnIlhY3Rpb24s5Li65LqG5a6e546wZGllY2FsbEJhY2vlm57osIPvvIzmjaLmiJBzZXHluo/liJdcclxuICAgICAgICAvLyDliqjnlLtcclxuICAgICAgICAvLyDngrnlh7vmjonkuItcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuSHAgLT0gMSA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfooYDph48nK3RoaXMuSHApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgLy8g6KaB5bCP6bif5o2i5oiQ5o6J5LiL5p2l55qE5Yqo55S7L+WbvueJh1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgnZGllJyk7XHJcbiAgICAgICAgICAgIC8vIOWBnOatoumjnue/lOWKqOS9nFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgLy8g5bCP6bif5o6J5LiL5p2lICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZmFsbDpjYy5WZWMyID0gY2MudjIodGhpcy5ub2RlLngsIDApO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uX2RpZSA9IGNjLm1vdmVUbyh0aGlzLm5vZGUueS90aGlzLnNwZWVkLzIsZmFsbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25fZGllLGNjLmNhbGxGdW5jKCgpPT57ICAgICAvL+aYr2NjLmNhbGxGdW5jKCgpPT57fSlcclxuICAgICAgICAgICAgICAgIC8vIG1vdmVUb+aJp+ihjOWujO+8jOWwj+m4n+aOieWIsOiNiemHjO+8jOWGjeaJp+ihjOS4i+S4gOS4quWKqOS9nOWNs++8mlxyXG4gICAgICAgICAgICAgICAgLy8g6ZSA5q+B6Ieq6LqrXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSkpKTsgICBcclxuICAgICAgICAgICAgLy8gcnVuQWN0aW9uKCnmi6zlj7flhoXloavnmoTmnKzmnaXlj6rmnIlhY3Rpb25fZGllLOS4uuS6huWunueOsGFkZFNjb3JlQ2FsbEJhY2vlm57osINcclxuICAgICAgICAgICAgLy8g5o2i5oiQc2Vx5bqP5YiXLOiZveeEtueci+i1t+adpeWkjeadgu+8jOWFtuWunuWSjOS4iumdoumCo+S4quaYr+S4gOagt+eahFxyXG4gICAgICAgICAgICAvLyDliqDliIbvvIzlm57osIPliLBCaXJkTWFuYWdlclxyXG4gICAgICAgICAgICB0aGlzLmFkZFNjb3JlQ2FsbEJhY2soKTtcclxuICAgICAgICB9KSAgIFxyXG4gICAgICAgIC8vIOmjnuWHuuWxj+W5leWklu+8jOa4uOaIj+e7k+adn++8jOWcqEJpcmRNYW5hZ2Vy6YeM5YaZXHJcblxyXG4gICAgICAgIC8vIOeci+S4iumdonNlceeahOWbnuiwgyAgXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuLypcclxu5LiN6L+Z5qC35YaZ77yM55So5Yqo55S75YiH5o2i77yMMuS4quWKqOeUu++8jOaSreaUvm1vdmXmjaLmiJDmkq3mlL5kaWUsZGll5bCx5piv5LiA5bin55qE5Yqo55S7XHJcbi8vIOWKoOi9veWbvumbhlxyXG5jYy5sb2FkZXIubG9hZFJlcygnYmlyZGRpZScsY2MuU3ByaXRlRnJhbWUsKGVycixwaWMpPT57XHJcbiAgICAvLyDmjaLlm75cclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHBpYyA7XHJcbn0pIFxyXG4vLyDopoHlsI/puJ/mjaLmiJDmjonkuIvmnaXnmoTliqjnlLsv5Zu+54mHXHJcbnRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCdkaWUnKTtcclxuKi8iXX0=