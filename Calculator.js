let display = document.querySelector("#result")

function appendDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = "";
}

function equalsTo() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}