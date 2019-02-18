const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor() {
        this.init();
    }
    init() {
        let val = numInput.value;
        let modulediv = document.createElement('div');
        modulediv.style.cssText = `margin-left:15px;height:height+(val*10)px;line-height:height+(val*10)px`
        oBox.appendChild(modulediv);

    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(opt) {
        super(opt);

    }
}

// 分别给按钮添加点击事件，实现所要求的的效果

//添加静态数柱的点击事件
staticBtn.onclick = () => {
        new StaticNumBlock({
            width: 20,
            height: 30,
            val: numInput.value,
            background: "red"
        })


    }
    //添加会动的数柱的点击事件
moveBtn.onclick = () => {
    new MoveNumBlock({
        color: 'pink',
        val: numInput.value,
    })
}