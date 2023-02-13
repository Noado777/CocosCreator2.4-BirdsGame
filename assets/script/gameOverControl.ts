
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {

    }
    backView(){
        cc.director.loadScene('start')
    }
    // update (dt) {}
}
