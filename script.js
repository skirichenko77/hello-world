function getArguments() {
    var n1 = Number(prompt('Введіть перше число:', '0'));
    var n2 = Number(prompt('Введіть друге число:', '0'));
    return { n1: n1, n2: n2 };
}

function welcome() {
    var args = getArguments();
    var sum = args.n1 + args.n2;
    alert('Привітання! Сума введених Вами чисел: ' + sum);
}

// Виклик функції welcome()
welcome();