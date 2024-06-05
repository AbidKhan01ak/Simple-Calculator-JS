import { tokenize } from "./tokenize.js";
import { sYard } from "./sYard.js";
import { calculateResult } from "./calculateResult.js";

export function calcExpression(exp) {
    let tokens = tokenize(exp);
    let result = sYard(tokens);
    return calculateResult(result);
}