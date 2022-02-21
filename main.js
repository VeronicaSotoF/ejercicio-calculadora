let firstInput = document.querySelector('#firstNumber')

let secondInput = document.querySelector('#secondNumber')

let firstNumber = firstInput.addEventListener('input', function (e) {
    firstNumber = parseFloat(e.target.value)
})

let secondNumber = secondInput.addEventListener('input', function (e) {
    secondNumber = parseFloat(e.target.value)
})

const resultDiv = document.querySelector('#result')

function handleOperation (firstNumber, secondNumber, operationType) {
    switch(operationType) {
        case 'sum':
            return firstNumber + secondNumber;
            break;
        case 'rest':
            return firstNumber - secondNumber;
            break;
        case 'multiplication':
            return firstNumber * secondNumber;
            break;
        case 'division':
            return firstNumber / secondNumber;
            break;
        case 'clear':
            return 0;
    }
}

document.querySelector('#sum-btn').addEventListener('click', function (e) {
    const result = handleOperation (firstNumber, secondNumber, 'sum')
    resultDiv.textContent = result;
})

document.querySelector('#substraction-btn').addEventListener('click', function (e) {
    const result = handleOperation (firstNumber, secondNumber, 'rest')
    resultDiv.textContent = result;
})

document.querySelector('#multiplication-btn').addEventListener('click', function (e) {
    const result = handleOperation (firstNumber, secondNumber, 'multiplication')
    resultDiv.textContent = result;
})

document.querySelector('#division-btn').addEventListener('click', function (e) {
    const result = handleOperation (firstNumber, secondNumber, 'division')
    resultDiv.textContent = result;
})

document.querySelector('#clear-btn').addEventListener('click', function (e) {
    const result = handleOperation (firstNumber, secondNumber, 'clear')
    resultDiv.textContent = result;
    firstNumber = result;
    secondNumber = result;
    document.querySelector('#firstNumber').value = firstNumber;
    document.querySelector('#secondNumber').value = secondNumber;
})


function fillInputValue (value) {
    if (firstInput.value === '') {
        firstInput.value = value;
        firstNumber = value;
    }
    else {
        secondInput.value = value;
        secondNumber = value;
    }
}

document.querySelector('#zero-btn').addEventListener('click', function (e) {
    fillInputValue(0);
})

document.querySelector('#one-btn').addEventListener('click', function (e) {
    fillInputValue(1);
})

document.querySelector('#two-btn').addEventListener('click', function (e) {
    fillInputValue(2);
})

document.querySelector('#three-btn').addEventListener('click', function (e) {
    fillInputValue(3);
})

document.querySelector('#four-btn').addEventListener('click', function (e) {
    fillInputValue(4);
})

document.querySelector('#five-btn').addEventListener('click', function (e) {
    fillInputValue(5);
})

document.querySelector('#six-btn').addEventListener('click', function (e) {
    fillInputValue(6);
})

document.querySelector('#seven-btn').addEventListener('click', function (e) {
    fillInputValue(7);
})

document.querySelector('#eight-btn').addEventListener('click', function (e) {
    fillInputValue(8);
})

document.querySelector('#nine-btn').addEventListener('click', function (e) {
    fillInputValue(9);
})