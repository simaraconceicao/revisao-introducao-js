
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return this.num1 + this.num2;
    }

    sub() {
        return this.num1 - this.num2;
    }

    mult() {
        return this.num1 * this.num2;
    }

    div() {
        return this.num1 / this.num2;
    }
}

calculadora();

const calculator = new Calculator(5, 6);

console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mult());
console.log(calculator.div());


function calculadora(num1, num2) {
    return num1 + num2
}

console.log(calculadora(1,2))


