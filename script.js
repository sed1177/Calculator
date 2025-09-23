// eval js function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

let clear = document.querySelector(".clear")
let display = document.querySelector("#display")

// appending the number value display to the ui
function appendToDisplay(value) {
    // if nothing is inside of the input display
    if (display.value === '') {
        // update display with the value that the user put in
        display.value = value
    }
//    if the user endters or the value is just 0
    else if (display.value === '0') {
        // update the value to the number the input put
        display.value = value
    } else {
        display.value += value
    }
}

function calculateTheValue() {
    // eval is taking the code from the uiser input and executing it as javascript code. so "2 + 2" is "4"
    // so i will turn it into a number instead of outputing a string with the Number js function
        let result = Number(eval(display.value))
        display.value = result
        console.log(typeof result)
}

clear.addEventListener("click", () => {
    // i set the display value back to zero when the clear button is clicked
    display.value = 0
})