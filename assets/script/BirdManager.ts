import BirdControl from "./BirdControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdManager extends cc.Component {
    // 小鸟预设体
    @property(cc.Prefab)
    Bird:cc.Prefab = null ; 
    // 多久出来一只小鸟
    time:number = 1.5 ;
    // 分数板
    score: number = 0 ;
    @property(cc.Label)
    score_number:cc.Label ;

    start () {
        this.createBirds();
        
    }  
    // 另外写创建小鸟的函数
    createBirds(){
        // 每隔多久一只小鸟,过delayTime之后执行第二个动作cc.callFunc(), schedule()也可以用
        let seq = cc.sequence(cc.delayTime(this.time),cc.callFunc(()=>{
            // 创建小鸟
            let new_bird = cc.instantiate(this.Bird);
            // 设置父物体
            new_bird.setParent(this.node);
            // 小鸟初始随机位置
            new_bird.y = 0;
            new_bird.x = Math.random()*230-120;
            // this.node.getComponent(BirdControl).fly();
            
            // new_bird.getComponent(BirdControl).fly();
            // 加分回调
            new_bird.getComponent(BirdControl).addScoreCallBack = ()=>{
                this.score += 100;
                // console.log('分数'+this.score)
                this.score_number.string = this.score + '';
            }
            // 游戏结束回调
            new_bird.getComponent(BirdControl).dieCallBack = () =>{
                this.node.destroyAllChildren();
                this.node.stopAllActions();
                // console.log('游戏结束')
                this.node.parent.getChildByName('backView').active = true;
                
            }
        }))
        // runAction(cc.repeatForever())来套,一直产生小鸟
        this.node.runAction(cc.repeatForever(seq));       
    }
    
    update (dt) {
        
    }
}
