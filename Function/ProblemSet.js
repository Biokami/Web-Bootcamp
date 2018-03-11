//isEven() true if number is even, false if number is odd.
//Two awnsers first is more complex therefore try to use the second.
/*function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}*/

function isEven(x) {
    return x % 2 === 0;
}

//factorial() take number and return factorial of that number. 0! is 1. loops stops when the number is multiplied by one.

function factorial(x) {
    //define result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= x; i++) { //should not place i as 1 being that it gives out the same number and doesnt add to the result.
        result *= i; // instead of result * i, its better to use *=
    }
    //return the result variable
    return result;
}

//kebabToSnake() changes strings with - to _
function kebabToSnake(str) {
    //detect the "-"
    //var newStr = str.replace("-", "_"); // this method uses a variable
    //replace "-" with "_"
    var newStr = str.replace(/-/g, "_"); //this method uses a regular expresion "/-/g" instead.
    return newStr;
    //return str;
    //return the completed string
}
