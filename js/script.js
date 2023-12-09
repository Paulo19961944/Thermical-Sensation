let botao = document.getElementById("btn");
let result = document.getElementById("result");

botao.addEventListener("click", Calcular);

function Calcular() {
    let temperatura = parseFloat(document.getElementById("temp-input").value.replace(",", "."));
    let vento = parseFloat(document.getElementById("wind-input").value.replace(",", "."));
    let resultFormula = 33 + (10 * Math.sqrt(vento) + 10.45 - vento) * (temperatura - 33) / 22;
    let resultFormatted = resultFormula.toFixed(2);
    result.textContent = "O Resultado é: " + resultFormatted + "Cº";
}
