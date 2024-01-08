let password = "Four";

(password.length < 8) ? console.log (`Password is too short`) : console.log (`${password}`)

let num = 6;

(num % 3 == 0 || num % 5 == 0) ? console.log (`This number is divisible by 3 or 5`) : console.log
(`This number is not divisible by 3 or 5`)

let fizzNum = (num % 3 == 0);
let buzzNum = (num % 5 == 0);

// if fizznum true
Boolean(fizzNum); console.log (`fizz`)