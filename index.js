const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signsButtons = document.querySelectorAll('.sign'); // renamed to avoid conflict
const equals = document.querySelector('.equals');
const clearButton = document.querySelector('.clear'); // changed to single element
const percent = document.querySelector('.percent');
const negativeButton = document.querySelector('.negative');

let firstValue = "";
let secondValue = "";
let isFirstValue = false;
let isSecondValue = false;
let sign = "";
let resultValue = 0;

// Add event listeners for numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (!isFirstValue) {
            getFirstValue(atr);
        } else {
            getSecondValue(atr);
        }
    });
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
}

function getSecondValue(el) {
    result.innerHTML = "";
    secondValue += el;
    result.innerHTML = secondValue;
}

// Handle sign clicks
function getSign() {
    for (let i = 0; i < signsButtons.length; i++) {
        signsButtons[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        });
    }
}

getSign();

// Handle equal sign click
equals.addEventListener('click', () => {
    if (firstValue !== "" && secondValue !== "") {
        result.innerHTML = "";
        switch (sign) {
            case "+":
                resultValue = +firstValue + +secondValue;
                break;
            case "-":
                resultValue = +firstValue - +secondValue;
                break;
            case "*":
                resultValue = +firstValue * +secondValue;
                break;
            case "/":
                resultValue = +firstValue / +secondValue;
                break;
        }
        result.innerHTML = resultValue;
        firstValue = resultValue;
        secondValue = "";
        checkResultLength();
    }
});

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

// Handle percent button
percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    } else if (firstValue !== "" && secondValue !== "") {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
});

// Handle clear button
clearButton.addEventListener("click", () => {
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
    result.innerHTML = 0;
});

// Handle negative toggle button
negativeButton.addEventListener('click', () => {
    if (isFirstValue && secondValue !== "") {
        secondValue = -secondValue;
        result.innerHTML = secondValue;
    } else if (firstValue !== "") {
        firstValue = -firstValue;
        result.innerHTML = firstValue;
    }
});
