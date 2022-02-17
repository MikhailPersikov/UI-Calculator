const numbersArray = [];
const operators = [];

const display = document.querySelector('.display__span');
const equality = document.querySelector('.equality');
const numbers = document.querySelectorAll('.numbers');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');
const show = document.querySelector('.show');
const sum = document.querySelector('.sum');
const sub = document.querySelector('.sub');
const dev = document.querySelector('.dev');
const mult = document.querySelector('.mult');

sub.addEventListener('click',subF);
sum.addEventListener('click',sumF);
dev.addEventListener('click',devF);
mult.addEventListener('click',multF);

equality.addEventListener('click',calc);
reset.addEventListener('click',resetF);
del.addEventListener('click',delF);
show.addEventListener('click',showAll);

numbers.forEach(numbers => {
    numbers.onclick = getValue;
})

function delF(){
    // console.log(numbersArray,'start')
    numbersArray.pop()
    display.textContent = numbersArray.join('')
    // console.log(numbersArray,'end')
    if(numbersArray.length === 0) display.textContent =''
}

function showAll(){
    // display.textContent = 'hello =)'
    // if (numbersArray[numbersArray.length-1] == '+') console.log('work')
    console.log(numbersArray,'number')
    console.log(operators,'number')
}

function resetF(){
    display.innerText = 0;
    numbersArray.splice(0,numbersArray.length)
    // console.log(numbersArray)
}

function getValue(){
    const startValue = display.innerText;
    let value = this.innerText;
    if(startValue === '0') display.innerText = ''
    let test = numbersArray.push(value)
    let displayValue = display.innerHTML = numbersArray.join('');
    console.log(numbersArray)
}

function multF(){
    operators.splice(0,numbersArray.length)
    operators.push('*')
}

function devF(){
    operators.splice(0,numbersArray.length)
    operators.push('/')
}

function sumF(){
    operators.splice(0,numbersArray.length)
    operators.push('+')
}

function subF(){
    operators.splice(0,numbersArray.length)
    operators.push('-')
}

function calc(){
    let findOperatorIndex = numbersArray.indexOf(operators[0]);
    let num1q = numbersArray.splice(0,findOperatorIndex).join('');
    let deleteOp = numbersArray.shift();
    let num2q = numbersArray.join('')
    let result;

    if (operators[0] === '+') result = +num1q + +num2q;
    if (operators[0] === '-') result = +num1q - +num2q;
    if (operators[0] === '*') result = +num1q * +num2q;
    if (operators[0] === '') result = +num1q / +num2q;

    console.log(result);
    numbersArray.splice(0,numbersArray.length)
    display.innerText = result;
    numbersArray.push(result);
    console.log(numbersArray);
}

// × ÷











