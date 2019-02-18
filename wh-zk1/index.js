const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
const Box = document.querySelector('#box');
const span = Box.querySelector('span')

class StaticNumBlock { // 静态数柱的类
    constructor(option) {
        let { staticBtn, numInput, cd } = option;
        this.staticBtn = staticBtn;
        this.numInput = numInput;
        this.cd = cd;
        this.init()
    };
    init() {
        let str = '';
        staticBtn.onclick = () => {
            const Ipn = numInput.value;
            str +=
                `
                  <span>${Ipn}</span>
                  
                  `
            Box.innerHTML = str;
            if (Ipn === '1') {
                span.css.style = {
                    height: "80px",
                    background: 'red'
                }
            } else {

            }
        };
        moveBtn.onclick = () => {
            const Ipn = numInput.value;
            str +=
                `
                  <li>${Ipn}</li>
                  
                  `
            Box.innerHTML = str;
            console.log(Ipn)


        }

    }
}
new StaticNumBlock({

})
class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    // constructor(option) {
    //     let { moveBtn, numInput, cd } = option;
    //     this.moveBtn = moveBtn;
    //     this.numInput = numInput;
    //     this.cd = cd;
    //     this.ini()
    // };
    // ini() {
    //     // moveBtn.onclick = function() {
    //     //     let str1 = '';
    //     //     str1 +=
    //     //         `
    //     //           <p>${numInput.value}</p>

    //     //           `
    //     //     Box.innerHTML = str1
    //     // }
    // }

}


// 分别给按钮添加点击事件，实现所要求的的效果