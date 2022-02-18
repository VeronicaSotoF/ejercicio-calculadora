let firstNumber = document.querySelector('#firstNumber').addEventListener('input', function (e) {
    firstNumber = parseFloat(e.target.value)
})

let secondNumber = document.querySelector('#secondNumber').addEventListener('input', function (e) {
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

