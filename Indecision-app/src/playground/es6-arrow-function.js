/*function square (x){
    return x * x;
};

console.log(square(8));

const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));*/

// Challenge - Use arrow fucntions.
// getFirstName('Mike Smith') -> "Mike".
// Create regual arrow function.
// Create arrow function using shorthand syntax.

const userName = 'Mike Smith';

const firstNameShort = (userName) => userName.split(' ')[0];
const firstNameLong = (userName) => {
    return userName.split(' ')[0];
}

console.log(firstNameShort(userName));
console.log(firstNameLong(userName))