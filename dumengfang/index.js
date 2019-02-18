const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock{ // 静态数柱的类
    constructor(parent,btn,options){
        this.oBox = parent;
        this.option = options;
        this.btn = btn;
        this.div = null;
        this.render();
    }
    createDiv(){
        let val = Number.parseInt(numInput.value.trim());
        // console.log(val)
        if(val>=1&&val<=9){
            let {width,height,background,borderRadius} = this.option;
            let div = document.createElement("div");
           div.style.width = width+"px";
           div.style.height = (height+val*10)+"px";
           div.style.background = background;
           div.style.borderRadius =borderRadius+"px";
           div.style.marginRight = "10px";
           div.style.lineHeight = (height+val*10)+"px";
           div.style.textAlign = "center";
           div.style.color = "#fff";
           div.innerHTML = val;
           oBox.appendChild(div);
            if(div.style.background === "pink"){
               div.classList.add("active")
            }
           this.div = div;
        //    console.log(this.div)
        }else{
            alert("数字必须在1-9之间")
        }
    }
    render(){
        this.btn.onclick = ()=>{
          this.createDiv();
          if(this.div.style.background==="pink"){
            this.div.onclick = function(){
                // console.log(11)
                this.style.marginTop = "10px";
                // this.classList.toggle("jump");//考试完写的
            }
          }
        }
    }
}
new StaticNumBlock(oBox,staticBtn,{
    width:30,
    height:20,
    background:"red",
    borderRadius:10
});

class MoveNumBlock extends StaticNumBlock{// 动态数柱的类
    constructor(parent,btn,options){
        super(parent,btn,options);
        // console.log(this.div)
    }

}
new MoveNumBlock(oBox,moveBtn,{
    width:30,
    height:20,
    background:"pink",
    borderRadius:10
})

// 分别给按钮添加点击事件，实现所要求的的效果
//点击按钮三，运动
// allBtn.onclick = ()=>{
//     let activeDivs = [...document.querySelectorAll(".active")];
//     console.log(activeDivs)
//     // console.log(activeDiv)
//     activeDivs.map(item =>{
//         item.onclick = () =>{
//             // console.log(11)
//         }
//     })
// }