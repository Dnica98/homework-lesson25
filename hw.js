
// const func =() =>{
//     console.log('pass')
// }

// func()

const closure =() =>{
    let x = 0;

    function show() {
        return x;
    }
    
    function change(y){
        x = y
    }

    function plus(){
        x = x + 1
    }

    function multi(){
        x = x * 2
    }

    function init() {
        x = x
    }

    return[show, change, plus, multi, init]
}

const [showX,changeX, plusX, multiX,initX] = closure()

console.log(showX())
changeX(2)
console.log(changeX())
plusX(6)
console.log(plusX())
multiX(5)
console.log(multiX())

// changeX(4)
// console.log(showX())