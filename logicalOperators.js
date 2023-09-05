// //logical operators
// let productPrice = 10;
// let amountInWallet = 30;
// let isProductAvailable = false;
// let useCreditAvailable = true;

// //logical and (&&)
// // if(amountInWallet > productPrice && isProductAvailable === true){
// //   console.log('you can purchase the product')
  
// // }
// //logical OR (||)
// if(amountInWallet >= productPrice || useCreditAvailable) {
//   console.log('you can purchase the product')

// }

let age = 18;
//Ternary operator to assign a value to a variable

// let isAdult = age < 18 ? true : false; - easier way than the below formula of if / then

// console.log(isAdult);

let isAdult;
if(age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}
console.log(isAdult)