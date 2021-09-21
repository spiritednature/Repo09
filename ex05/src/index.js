function compareStrictValues(m) {
    if (m != 55) {
        return "Not equal";
    }
    return "Equal";
}

console.log(compareStrictValues("Doe"));

module.exports = compareStrictValues;