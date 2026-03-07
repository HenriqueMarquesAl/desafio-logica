function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcular(operacao, a, b) {
    if (operacao === "soma") {
        return somar(a, b);
    } else if (operacao === "subtracao") {
        return subtrair(a, b);
    } else if (operacao === "multiplicacao") {
        return multiplicar(a, b);
    } else if (operacao === "divisao") {
        return dividir(a, b);
    } else {
        return "Operação inválida";
    }
}

let resultado = calcular("soma", 10, 5);

console.log(resultado);