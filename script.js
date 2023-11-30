function getArguments() {
    var n1 = Number(prompt('Введіть перше число:', '0'));
    var n2 = Number(prompt('Введіть друге число:', '0'));
    return { n1: n1, n2: n2 };
}

let numbers = getArguments();

function calcMult(x, y) {
    return x * y;
}

alert('Добуток введених Вами чисел: ' + calcMult(numbers.n1, numbers.n2));
