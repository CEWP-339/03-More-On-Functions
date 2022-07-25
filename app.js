const startGameBtn = document.getElementById('start-game-btn');

// let ifVariable = if (true) {

// }

let var1;

console.log(var1);

sayHello(); //it's ok
sayHelloExpression(); //not ok!!!

function sayHello () {  //function statement
    return "Hello!";
}

let sayHelloExpression = function sayHelloExpression () { //function expression
    return "Hello!";
}

