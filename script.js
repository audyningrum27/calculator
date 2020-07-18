const calculatorScreen = document.querySelector('.calculator-screen')
let resetCount = 0;
let conditionalSecondNumber = 0;
let afterEqual = 0
let afterEqNewNum = ''

let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''


const updateScreen = (number) => {

    console.log(`ini value rs = ${resetCount}`)
    if (resetCount < 2) {
        calculatorScreen.value = number
        console.log(calculatorScreen.value)
    } else if (resetCount === 2) {
        if (conditionalSecondNumber === 1) {
            tmp = calculatorScreen.value
            conditionalSecondNumber = 0
        } else {
            tmp
        }
        console.log(`this is number in 2 ${number}`)
        //tmp = calculatorScreen.value
        console.log(`this is reset2 ${tmp}`)
        console.log(`this is calc ${calculatorScreen.value}`)

        calculatorScreen.value = tmp + number
    }


}

const updateScreenEqual = (EqNum) => {
    calculatorScreen.value = EqNum
    afterEqual = 1
    console.log(`this is after eq ${afterEqual}`)
}
//resetCount = 0 1

const updateOperator = (operator) => {
    console.log(`ini value = ${resetCount}`)
    if (resetCount < 2) {
        console.log("this is reset" + resetCount)
        if (calculatorScreen.value) {
            console.log("im here 1")
            tmp = calculatorScreen.value
            calculatorScreen.value = tmp + operator
            conditionalSecondNumber = 1
        } else {
            console.log("im here 2")
            calculatorScreen.value = operator
        }
        resetCount = 2

    } else {
        console.log("im here 3")
        console.log("this is reset" + resetCount)
        calculatorScreen.value = operator
        resetCount = 0
    }

}

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
    if (currentNumber === '00') {
        currentNumber = ''
    }
    if (currentNumber === '0') {
        currentNumber = number
    } else if (afterEqual == 1) {
        currentNumber = number
        afterEqual = 0
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    resetCount = 1
    //updateScreen(currentNumber)
    updateScreenEqual(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const percen = document.querySelector('.percentage')

percen.addEventListener('click', () => {
    updateScreen(currentNumber + '%')
    if (currentNumber === '0') {
        return
    } else {
        currentNumber = currentNumber / 100
    }
})

const back = document.querySelector('.back')

const del = () => {
    result = ''

}

back.addEventListener('click', () => {
    afterEqual = 0
    currentNumber = currentNumber.toString()
    updateScreen(
        currentNumber = currentNumber.substr(0, currentNumber.length - 1)
    )
    console.log(`ini current number after ${currentNumber}`)
    del()
})
