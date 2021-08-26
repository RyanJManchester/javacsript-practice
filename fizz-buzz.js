function fizzBuzz(int) {
let answer = int;
    for (i = 1; i >= answer; i++) {
        if (answer % 3 === 0 && answer % 5 === 0) {
            console.log("FizzBuzz!");
        } else if (answer % 5) {
            console.log("Buzz");
        } else if (answer % 5 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    };}