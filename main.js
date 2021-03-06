const buttons = document.querySelectorAll('.number')
const multi = document.querySelector('.mult')
const sub = document.querySelector('.sub')
const sum = document.querySelector('.sum')
const div = document.querySelector('.div')
const deleteNumber = document.querySelector('.del')
const reload = document.querySelector('.reset')
const result = document.querySelector('.equality')
const answer = document.querySelector('.number__output')

let operation = undefined;
let operandOne = null;
let operandTwo = null;

for (let button of buttons) {
    button.addEventListener('click', function () {
        if (!operandOne) {
            answer.textContent === '0' ? answer.textContent = button.textContent : answer.textContent += button.textContent
        } else {
            operandTwo ? operandTwo = answer.textContent += button.textContent : operandTwo = answer.textContent = button.textContent
        }
        if (answer.textContent.length > 7) {
            answer.textContent = answer.textContent.slice(0, 7)
        }
    })
}

div.addEventListener('click', function () {
    operation = 'div'
    isOperationCalc(operation)
})

multi.addEventListener('click', function () {
    operation = 'multi'
    isOperationCalc(operation)
})

sub.addEventListener('click', function () {
    operation = 'sub'
    isOperationCalc(operation)
})

sum.addEventListener('click', function () {
    operation = 'sum'
    isOperationCalc(operation)
})

function isOperationCalc(operation) {
    const isValidOperand = operandOne && operandTwo && operation
    if (isValidOperand) {
        answer.textContent = calc(operation, operandOne, operandTwo)
    }
    if (!operandOne) {
        operandOne = answer.textContent
    }
}

function calc(operation, one, two) {

    const operators = {
        'sum': +one + +two,
        'multi': one * two,
        'sub': one - two,
        'div': one / two,
    }

    const result = operators[operation]
    return isFinite(result) ? result : 'Error'
}

result.addEventListener('click', resultCalc)

function resultCalc() {
    const isValidOperand = operandOne && operandTwo && operation
    if (isValidOperand) {
        answer.textContent = calc(operation, operandOne, operandTwo)
        operandOne = answer.textContent
        operandOne = null
        operandTwo = null
        operation = undefined
    }
    if (answer.textContent.length > 7) {
        answer.style.fontSize = '28px'
    }
}

deleteNumber.addEventListener('click', deleteNum)

function deleteNum() {
    if (answer.textContent.length === 1) {
        answer.textContent = '0'
        operandOne = null
        operandTwo = null
        operation = null
        answer.style.fontSize = '80px'
    } else if (!operation) {
        answer.textContent = answer.textContent.slice(0, -1)
    } else if (operation) {
        operandTwo = operandTwo.slice(0, -1)
        answer.textContent = operandTwo
    }
}

reload.addEventListener('click', resetCalc)

function resetCalc() {
    answer.textContent = '0'
    operation = null
    operandOne = null
    operandTwo = null
    answer.style.fontSize = '80px'
}