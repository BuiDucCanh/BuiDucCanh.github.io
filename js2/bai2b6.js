function calculate(operator, button) {
    var form = button.closest(".calculatorForm");
    var operand1 = parseFloat(form.querySelector(".operand").value);
    var operand2 = parseFloat(
        form.querySelectorAll(".operand")[1].value
    );

    var result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                return;
            }
            break;
        default:
            result = "Không hỗ trợ phép toán";
    }

    if (operator === "+") {
        form.querySelector(".result").innerHTML = result;
        var calculationText =
            operand1 +
            " " +
            operator +
            " " +
            operand2 +
            " = " +
            result;
        document.getElementById("calculationContainer1").innerHTML =
            calculationText;
        document.getElementById(
            "calculationContainer1"
        ).style.color = "red";
        document.querySelector(".text1").style.color = "red";
    } else if (operator === "-") {
        form.querySelector(".result").innerHTML = result;
        var calculationText =
            operand1 +
            " " +
            operator +
            " " +
            operand2 +
            " = " +
            result;
        document.getElementById("calculationContainer2").innerHTML =
            calculationText;
        document.getElementById(
            "calculationContainer2"
        ).style.color = "red";
        document.getElementById(
            "calculationContainer1"
        ).style.color = "black";
        document.querySelector(".text2").style.color = "red";
        document.querySelector(".text1").style.color = "black";
    } else if (operator === "*") {
        form.querySelector(".result").innerHTML = result;
        var calculationText =
            operand1 +
            " " +
            operator +
            " " +
            operand2 +
            " = " +
            result;
        document.getElementById("calculationContainer3").innerHTML =
            calculationText;
        document.getElementById(
            "calculationContainer3"
        ).style.color = "red";
        document.getElementById(
            "calculationContainer2"
        ).style.color = "black";
        document.querySelector(".text3").style.color = "red";
        document.querySelector(".text2").style.color = "black";
    } else if (operator === "/") {
        form.querySelector(".result").innerHTML = result;
        var calculationText =
            operand1 +
            " " +
            operator +
            " " +
            operand2 +
            " = " +
            result;
        document.getElementById("calculationContainer4").innerHTML =
            calculationText;
        document.getElementById(
            "calculationContainer4"
        ).style.color = "red";
        document.getElementById(
            "calculationContainer3"
        ).style.color = "black";
        document.querySelector(".text4").style.color = "red";
        document.querySelector(".text3").style.color = "black";
    }
}