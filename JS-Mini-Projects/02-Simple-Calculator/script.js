let inputBox = document.getElementById("userInput");
let buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if (value == "C") {
            expression = "";
        } else if (value == "←") {
            expression = expression.slice(0, -1);
        } else if (value == "=") {
            try {
                expression = eval(expression);
            } catch {
                expression = "Error";
            }
        } else if (value == "x") {
            expression += "*";
        } else if (value == "^") {
            expression += "**";
        } else {
            expression += value;
        }
        inputBox.value = expression
    });
});

document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        expression += key;
    } 
    else if (key === "Enter" || key === "=") {
        try {
            expression = eval(expression);
        } catch {
            expression = "Error";
        }
    } 
    else if (key === "Backspace") {
        expression = expression.slice(0, -1);
    } 
    else if (key === "^") {
        expression += "**";
    } 
    else if (key.toLowerCase() === "c") {
        expression = "";
    }

    inputBox.value = expression;
});