function myForLoop1() {
    for (var evenNumbers = 0; evenNumbers < 9; evenNumbers + 2) {
        console.log(evenNumbers);
    }
}

function myForLoop2() {
    for (var evenInverseNumbers = 10; evenInverseNumbers >= 0; evenInverseNumbers--) {
        console.log(evenInverseNumbers);
    }
}

myForLoop1();
myForLoop2();

module.exports = {
    myForLoop1,
    myForLoop2
};