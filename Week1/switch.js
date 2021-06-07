// let topping1 = "mushrooms", topping2 = "pepperoni", topping3 = "chicken";

// switch (true) {
//     case topping1 == "mushrooms" || topping2 == "mushrooms"|| topping3 == "mushrooms":
//         console.log(`These toppings are important ingredients for me pizza`);
//         break;
//     case topping1 == "mushrooms" || topping2 == "mushrooms"|| topping3 == "mushrooms":
//     default:
//         break;
// }

// let password ="abc123";

// if (password.length < 8) {
//     console.log("Your password is too short");   
// }
// else{
//     console.log(`Your password ${password} has been accepted`);
// }

// let num = 10;

// switch (true) {
//     case (num % 3 ==0) && (num % 5 ==0):
//         console.log("fizz buzz");
//         break;
//         case (num % 3 ==0):
//             console.log("fizz");
//             break;
//             case num % 5 ==0:
//                 console.log("buzz");
//                 break;
//     default:
//         console.log("This number is not divisable by 3 or 5");
//         break;
// }

// let weird = 10;
// console.log(weird & 1);
// if (weird & 1) {
// console.log("It's odd");
// } else {
// console.log("It's even");
// }

// let number = ['1','2','3','2','5'];
// let check = ['1','2','3','2','5'];


// for (let index = 0; index < 4; index++) {
//     let temp = number [index];
//    // console.log("first", number[index]);
//     for (let x = 0, y = 1; x < 4; x++, y++) {
//         number [x] = number [y];
//         console.log(number[x]);
//     }
//     number [4]= temp;
    
// }
// console.log(number, check);
// if (number == check){
//     console.log("It's a palendrone");
// }
// else{
//     console.log("Boo")
// }

let number = ['1','2','3','2','5']
let check = ['1','2','3','2','5'];

for (let x = 0, y = 4; x<=1; x++ ,y--){
    let temp = number [x];
    number [x] = number[y] ;
    number [y] = temp;
}
console.log(number, check);
if (number == check){
    console.log("Yay, It's a palindrome");
}
else{
    console.log("Boo, it's not a palindrome")
}