function compareDifferentValues(m, n) {
    if (m === n) {
        return "Equal";
    }
    return "Not equal";
    
}

console.log(compareDifferentValues("3","3"));

module.exports = compareDifferentValues;