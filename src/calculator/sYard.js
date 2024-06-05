export function sYard(tokens) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };
    const result = [];
    const operators = [];

    tokens.forEach(token => {
        if (typeof token === 'number') {
            result.push(token);
        } else if ('+-*/'.includes(token)) {
            while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                result.push(operators.pop());
            }
            operators.push(token);
        }
    });

    while (operators.length) {
        result.push(operators.pop());
    }

    return result;
}