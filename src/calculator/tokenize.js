export function tokenize(exp) {
    const regex = /(\d+\.?\d*|\+|\-|\*|\/|%|\(|\))/g;
    return exp.match(regex).map(token => (/\d/.test(token) ? parseFloat(token) : token));
}