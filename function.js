function add1To10() {
    let result = 0;
    for (let i = 1; i <= 5; i++) {
        result += i;
    }
    console.log(result);
}
// add1To10()


function evenOrOdd() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log('even number!', i)
        }
        else {
            console.log('odd number', i)
        }
    }
}

// evenOrOdd();


function evenOrOdd(num) {
    if (typeof num !== 'number') {
        return 'Error!! input is not a number';
    }
    else {
        if (num % 2 === 0) {
            return `${num} is an even number`;
        }
        else {
            return `${num} is an odd number`;
        }
    }
}

const num = true;
const output = evenOrOdd(num);
console.log(output)