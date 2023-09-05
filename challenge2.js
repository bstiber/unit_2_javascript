//code challenge2 - 

//Operators Code Challenge:

// Write a program that declares two variables num1 and num2, 
// assigns them number values, and then calculates and prints the
//  product of num1 and num2.
let num1 = 10;
let num2 = 20;

let total = num1 + num2;
console.log(total);

// Write a program that declares a variable radius and assigns it a 
// number value representing the radius of a circle. Then, use the exponentiation
// operator to calculate the area of the circle (pi times radius squared). 
// Print the resulting area to the console.

let radius = 22;
let pi = 3.14
let piRadiusSquared = radius ** 2
let area = pi * piRadiusSquared;
console.log(area);

//Assignment Operators:

// Write a program that declares a variable count and assigns it an initial value of 5. 
// Then, use the addition assignment operator to add 2 to count. Print the resulting 
// value of count to the console.

let count = 5;
//let countPlusTwo = count += 2;
//console.log(countPlusTwo);
// or
let result = count + 2;
console.log(result);

// Write a program that declares a variable price and assigns it an initial value of 10. 
// Then, use the multiplication assignment operator to multiply price by 2.5. Print the 
// resulting value of price to the console.

let price = 10;
let resultingValue = price * 2.5;
console.log(resultingValue);

//Comparison Operators:

// Write a program that declares two variables age1 and age2, assigns them number values 
// representing the ages of two different people, and then uses the greater than operator 
// to determine if age1 is greater than age2. Print the resulting boolean value to the 
// console.

let age1 = 5;
let age2 = 11;
let greater = age1 > age2;
if(greater){
  true;
};
console.log(greater);

// Write a program that declares a variable name and assigns it a string value representing 
// a person's name. Then, use the not equal to operator to determine if name is not equal to 
// the string "John Doe". Print the resulting boolean value to the console.

firstName = 'Jason';
john = 'John Doe'
nameNotEqualTo = firstName != john;

// if(nameNotEqualTo) {
//   true;
// }
console.log(nameNotEqualTo);

// Logical Operators:

// Write a program that declares two variables isMember and hasCoupon, assigns them boolean values 
// indicating whether or not a customer is a member and whether or not they have a coupon code, and 
// then uses the logical OR operator to determine if the customer is eligible for free shipping. 
// Print the resulting boolean value to the console.

let isMember = true;
let hasCoupon = true;
let newMember = isMember;

if(newMember || hasCoupon) {
  console.log('Customer is eligable for free shipping');
}


// Write a program that declares a variable num and assigns it a number value. Then, use the logical NOT 
// operator to determine if num is not equal to 0. Print the resulting boolean value to the console.

let num = 17;

// if (num != 0) {
//   console.log(num);
// }

let notNotEqual = num != 0 ? num : false;
console.log(notNotEqual);

// Conditional (Ternary) Operator:

// Write a program that declares a variable age and assigns it a number value representing a person's age. 
// Then, use the conditional operator to determine if the person is old enough to vote. If the person is 
// old enough, print the string "You are old enough to vote" to the console. Otherwise, print 
// the string "You are not old enough to vote" to the console.

let age = 12;

let canVote = age >= 18 ? 'You are old enough to vote' : "You are not old enough to vote";

console.log(canVote);

// Write a program that declares a variable price and assigns it a number value representing the price 
// of a product. Then, use the conditional operator to determine if the product is on sale. 
// If the product is on sale, print the string "The product is on sale" to the console. Otherwise, 
// print the string "The product is not on sale" to the console.

let productPrice = 43;
let onSale = false;

let productIsOnSale = productPrice && onSale ? 'The product is on sale' : 'The product is NOT on sale';
console.log(productIsOnSale);

