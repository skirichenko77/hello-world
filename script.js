function getArguments() {
    var n1 = Number(prompt('Введіть перше число:', '0'));
    var n2 = Number(prompt('Введіть друге число:', '0'));
    return { n1: n1, n2: n2 };
}

let numbers = getArguments();

function calcSum(x = 0, y = 0) {
    return x + y;
}

alert('Сума введених Вами чисел: ' + calcSum(numbers.n1, numbers.n2));