
const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {
    // 血量
    Hp:number = 1 ;
    // 速度
    @property
    speed:number = 100 ;
    // 目标点
    targetPos:cc.Vec2 = null;

    // targetX:number 
    // targetY:number

    // 游戏结束回调
    dieCallBack: Function ;

    // 加分回调
    addScoreCallBack: Function ;

    start () {
        this.fly();
    }

    fly(){
        // 设置随机目标点
        this.targetPos = cc.v2(Math.random()*300 -80 , 250);   // 这里和上面cc.Vec2不一样，这里写的是cc.v2 注意
        // 小鸟翻转
        if(this.targetPos.x > this.node.x){
            this.node.scaleX = -1 ;
        }
        // 移动，这里老师用距离除以速度得出时间，而不是在update里调用dt
        let action = cc.moveTo((this.targetPos.y-this.node.y)/this.speed ,this.targetPos);

        let seq = cc.sequence(action,cc.callFunc(()=>{
            // 游戏结束
            this.dieCallBack();        
        }))

        this.node.runAction(seq)  // 括号内填的本来只有action,为了实现diecallBack回调，换成seq序列
        // 动画
        // 点击掉下
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
            this.Hp -= 1 ;
            console.log('血量'+this.Hp);
            this.node.stopAllActions();
            // 要小鸟换成掉下来的动画/图片
            this.node.getComponent(cc.Animation).play('die');
            // 停止飞翔动作
            this.node.stopAllActions();
            // 小鸟掉下来                
            let fall:cc.Vec2 = cc.v2(this.node.x, 0);
            let action_die = cc.moveTo(this.node.y/this.speed/2,fall)
            this.node.runAction(cc.sequence(action_die,cc.callFunc(()=>{     //是cc.callFunc(()=>{})
                // moveTo执行完，小鸟掉到草里，再执行下一个动作即：
                // 销毁自身
                this.destroy();
            })));   
            // runAction()括号内填的本来只有action_die,为了实现addScoreCallBack回调
            // 换成seq序列,虽然看起来复杂，其实和上面那个是一样的
            // 加分，回调到BirdManager
            this.addScoreCallBack();
        })   
        // 飞出屏幕外，游戏结束，在BirdManager里写

        // 看上面seq的回调  

    }
    update (dt) {

        
        

    }
}
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