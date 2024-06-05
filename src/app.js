import { screen, btnParent } from "./dom.js";
import { clearScreen } from "./utils/clearScreen.js";
import { clearLastElement } from './utils/clearLastElement.js'
import { calculateExpression } from "./calculator/calculateExpression.js";


let calculate = 0;

btnParent.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        let key = e.target.textContent || e.target.innerText;

        if (key === 'AC') {
            clearScreen(screen);
        } else if (key === 'CE') {
            clearLastElement(screen);
        } else if (key === '=') {
            calculateExpression(screen);
        } else {
            screen.value += key;
        }
    }
});



