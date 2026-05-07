let display = document.getElementById('display');
let text = '';
let longitudTexto = 0;
let ultimoval = '';

function clearDisplay() {
    
    display.innerText = '';
    text = '';
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    text += display.innerText;
    text += operator; //Acumular toda la cadena
    console.log(text);
    display.innerText = '';
    let lastChar = text[text.length - 1];
    console.log(lastChar);
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    ultimoval = display.innerText + 1; //Guardar el ult. valor y el operador con el + 1
    text += display.innerText;
    console.log(text);

    try {
        display.innerText = eval(text);
        justCalculate = true;
    } catch {
        display.innerText = 'Error';
    }

    
}

function deleteLastOp() {
    longitudTexto = ultimoval.length
    text = text.substring(0, text.length - longitudTexto);
    display.innerText = eval(text)
}