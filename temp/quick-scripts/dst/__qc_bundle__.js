
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/BirdControl');
require('./assets/script/BirdManager');
require('./assets/script/gameOverControl');
require('./assets/script/startControl');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/startControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25801RdCGZPgICzP8lAGgBM', 'startControl');
// script/startControl.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.startGame = function () {
        cc.director.loadScene('main_scene');
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzdGFydENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBVUEsQ0FBQztJQVBHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFUZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVU1QjtJQUFELGVBQUM7Q0FWRCxBQVVDLENBVnFDLEVBQUUsQ0FBQyxTQUFTLEdBVWpEO2tCQVZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbl9zY2VuZScpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameOverControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ec53wVGnpJZaSBZIMF4qJR', 'gameOverControl');
// script/gameOverControl.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.backView = function () {
        cc.director.loadScene('start');
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lT3ZlckNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBU0EsQ0FBQztJQVBHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFQZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVM1QjtJQUFELGVBQUM7Q0FURCxBQVNDLENBVHFDLEVBQUUsQ0FBQyxTQUFTLEdBU2pEO2tCQVRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBiYWNrVmlldygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RhcnQnKVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
