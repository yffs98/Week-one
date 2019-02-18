const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor() {
        this.clickStatic();
        this.clickMove();
    }
    clickStatic() {
        staticBtn.onclick = () => {
            let val = numInput.value;
            let odiv = document.createElement("div");
            odiv.style.cssText = `width:20px;height:${20*val}px;background:red;color:#fff;text-align:center;margin:0 5px`;
            odiv.innerHTML = val;
            oBox.append(odiv);
        }
    }
    clickMove() {
        moveBtn.onclick = () => {
            let num = numInput.value;
            let odiv = document.createElement("div");
            odiv.style.cssText = `width:20px;height:${20*num}px;background:pink;color:#fff;text-align:center;margin:0 5px`;
            odiv.classList.add("move");
            odiv.innerHTML = num;
            oBox.append(odiv);
            this.move();
        }
    }
}
new StaticNumBlock();
class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor() {
        super();
    }
    move() {
        let divs = oBox.querySelectorAll(".move");
        divs.forEach((item, index) => {
            console.log(item)
            item.onclick = function() {
                this.classList.toggle("jump");
            }
        })
    }
    allMove() {
        allBtn.onclick = () => {

        }
    }
}

new MoveNumBlock();
// 分别给按钮添加点击事件，实现所要求的的效果