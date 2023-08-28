function button(string) {
    display.textContent += string
}
let periodCounter = 0
function period(string) {
    if (periodCounter < 1) {
        display.textContent += string
        ++periodCounter
    }
}
function clean() {
    display.textContent = ""
    periodCounter = 0
}
function showDisplay(splitValue) {
    if (splitValue[2]) {
        display.textContent = splitValue.join(" ")
        operate()
    } else {
        stringValue = splitValue.join(" ")
        round = +stringValue
        decimal = +round.toFixed(2)
        display.textContent = decimal.toString()

    }
}
function operate() {
    let splitValue = display.textContent.split(" ")
    if (splitValue[1] === "+") {
        finalValue = add(splitValue[0], splitValue[2])
        splitValue.shift()
        splitValue.shift()
        splitValue.shift()
        splitValue.unshift(`${finalValue}`)
        showDisplay(splitValue)
    } else if (splitValue[1] === "-") {
        finalValue = subtract(splitValue[0], splitValue[2])
        splitValue.shift()
        splitValue.shift()
        splitValue.shift()
        splitValue.unshift(`${finalValue}`)
        showDisplay(splitValue)
    } else if (splitValue[1] === "*") {
        finalValue = multiply(splitValue[0], splitValue[2])
        splitValue.shift()
        splitValue.shift()
        splitValue.shift()
        splitValue.unshift(`${finalValue}`)
        showDisplay(splitValue)
    } else if (splitValue[1] === "/") {
        finalValue = divide(splitValue[0], splitValue[2])
        splitValue.shift()
        splitValue.shift()
        splitValue.shift()
        splitValue.unshift(`${finalValue}`)
        showDisplay(splitValue)
    }
}
function add(a,b) {
    return +a + +b
}
function subtract(a,b) {
    return +a - +b
}
function multiply(a,b) {
    return +a * +b
}
function divide(a,b) {
    return +a / +b
}
let constainer = document.querySelector(".container")
let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
let button7 = document.querySelector(".button7")
let button8 = document.querySelector(".button8")
let button9 = document.querySelector(".button9")
let buttonD = document.querySelector(".buttonD")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")
let button6 = document.querySelector(".button6")
let buttonM = document.querySelector(".buttonM")
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let buttonS = document.querySelector(".buttonS")
let button0 = document.querySelector(".button0")
let buttonP = document.querySelector(".buttonP")
let buttonE = document.querySelector(".buttonE")
let buttonA = document.querySelector(".buttonA")
clear.addEventListener("click", () => clean())
button7.addEventListener("click", () => button("7"))
button8.addEventListener("click", () => button("8"))
button9.addEventListener("click", () => button("9"))
buttonD.addEventListener("click", () => button(" / "))
button4.addEventListener("click", () => button("4"))
button5.addEventListener("click", () => button("5"))
button6.addEventListener("click", () => button("6"))
buttonM.addEventListener("click", () => button(" * "))
button1.addEventListener("click", () => button("1"))
button2.addEventListener("click", () => button("2"))
button3.addEventListener("click", () => button("3"))
buttonS.addEventListener("click", () => button(" - "))
button0.addEventListener("click", () => button("0"))
buttonP.addEventListener("click", () => period("."))
buttonE.addEventListener("click", () => operate())
buttonA.addEventListener("click", () => button(" + "))