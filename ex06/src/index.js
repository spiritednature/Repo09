function comparisonToEqual(a) {
    if (a < 10) {
        if (a >= 5) {
        return "Less than 10";
        } else {
            return "Less than 5";
        }
    } else if (a > 20) {
        return "More than 20";
    } else {
        return "10 or over";
    }
}

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

module.exports = comparisonToEqual;