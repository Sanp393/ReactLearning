var nameVar = 'Guille';
var nameVar = 'Sanp';
console.log('nameVar', nameVar);

let nameLet = 'Guillermo';
nameLet = 'Willy';
console.log('nameLet', nameLet);

const nameConst = 'William';
console.log('nameConst', nameConst);

// Block scoping.

const fullname = 'Andrew Mead';
let firstName;

if(fullname){
    firstName = fullname.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);