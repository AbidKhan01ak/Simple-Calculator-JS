import { calcExpression } from "./calcExpression.js";

export function calculateExpression(screen) {
    let exp = screen.value.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '*0.01');
    try {
        const result = calcExpression(exp);
        if (Number.isInteger(result)) {
            screen.value = result;
        } else {
            screen.value = result.toFixed(2);
        }
    } catch (e) {
        screen.value = 'Error';
    }
}