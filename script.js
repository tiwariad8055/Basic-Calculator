let display = document.querySelector("#display")

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function format(value) {
    return Math.abs(value) < 1e-10 ? 0 : value.toFixed(5);
}

function sinf() {
    display.value = format(Math.sin(toRadians(display.value)))
}
function cosf() {
    display.value = format(Math.cos(toRadians(display.value)))
}
function tanf() {
    let deg = parseFloat(display.value);

    if (deg % 180 === 90) {
        display.value = "Undefined";
    }
    else {

        display.value = format(Math.tan(toRadians(display.value)))
    }
}
function sqrf() {
    display.value = Math.sqrt(display.value)
}
