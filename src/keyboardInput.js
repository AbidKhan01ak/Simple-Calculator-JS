import { screen } from './dom.js';
import { calculateExpression } from './calculator/calculateExpression.js';
import { clearScreen } from './utils/clearScreen.js';
import { clearLastElement } from './utils/clearLastElement.js'

document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key)) {
        screen.value += e.key;
    } else if (['+', '-', '*', '/', '%', 'x', '÷'].includes(e.key)) {
        screen.value += e.key === '*' ? 'x' : e.key === '/' ? '÷' : e.key;
    } else if (e.key === 'Enter') {
        e.preventDefault();
        calculateExpression();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        clearLastElement();
    } else if (e.key.toUpperCase() === 'C') {
        e.preventDefault();
        clearScreen();
    }
});