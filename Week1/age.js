

// const coffee = (size, drink) =>{
// return (size, drink)
// }

// console.log(`You have orderd a ${coffee("Large", "Iced Latte")}`);

// let orderCount = 0
// let topping = ["pineapple", "Ham", "mushroom", "pepperoni", "chicken" ]
// const takeOrder = (topping1, topping2) => {
//     console.log (`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }

// while (orderCount <5){
//     x = Math.floor((Math.random()*5)+1);
// y = Math.floor((Math.random()*4)+1);
// takeOrder(topping[x], topping[y]); 
// console.log(orderCount);
// }

// const actualPin = 1234;
// let balance = 100;

// const withdraw = (pin, request) => {
//     if (pin === actualPin && request <= balance){
//     console.log(`Here is £${request}`);
// }else if ( pin != actualPin){
//     for (x = 2; x !=0; x--)
//     console.log(`Wrong pin, you have ${x} attempts left, please try again!`);
//     break;
// }
// else{
//     console.log("You're broke bi@tch")
// }
// }
// withdraw(1224,100);

let grid = [
    ['o', 'o', 'x'],
    ['x', 'x', 'x'],
    ['o', ' ', ' ']
]
let t = ['x','o'];

for (x=0 ,y=0, z=0; x<8;x++){
       if (grid[x],[y] == t[z] && grid[x],[1] == t[z] && grid[x],[2] == t[z]) {
           console.log("x's won")
    } else {
y++
    }   
}