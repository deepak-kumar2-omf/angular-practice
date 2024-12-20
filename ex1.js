
firstName = 'Deepak';
//let lastName = 'Kumar';
console.log(firstName);
interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
let age = 30;
let IsApproved = true;
let currentAddress = undefined;
let selectedColor = null;
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof selectedColor);
console.log(typeof currentAddress);
let person = { name: 'Deepak',
               address: 'Evansville'   
};
person.name = 'John';
person['name'] = 'Mary';
let selection = 'name';
person[selection] = 'Kendra';
console.log(person.name);
let seletedColors = ['red', 'blue'];
seletedColors[2] = 'green'
seletedColors[2] = 1
console.log(seletedColors);
console.log(seletedColors[0]);
console.log(seletedColors.length);
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Mary', 'Smith');
greet('John', 'Tina');
function square(number) { 
    return number*number
};
 //let number = square(2);
 console.log(square(2));

