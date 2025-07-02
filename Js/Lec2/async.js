// // Ways to make a function async 
// // 1. Callbacks
// // 2. Promises
// // 3. Async / Await

// console.log("SCRIPT START");

// // setTimeout(() => {
// //     console.log("I am going to restaturent");
// // }, 4000);

// // setTimeout(() => {
// //     console.log("I am checking the menu");
// // }, 3000);

// function walksIn(cb){
//     console.log("I am walking inside the restaurant")
//     setTimeout(cb, 3000);
// }

// function menuCheck(cb){
//     console.log("Checking the menu");
//     setTimeout(cb, 2000);
// }

// function foodOrder(cb){
//     console.log("I am ordering the food");
//     setTimeout(cb, 6000);
// }

// function havingLunch(cb){
//     console.log("I am having the food");
//     setTimeout(cb, 8000);
// }

// function payingBill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb, 3000);
// }

// function walksOut(cb){
//     console.log("Bye")
// }


// // PYRAMID OF DOOM
// walksIn(()=>{
//     menuCheck(()=>{
//         foodOrder(()=> {
//             havingLunch(()=>{
//                 payingBill(()=>{
//                     walksOut(()=>{
//                     })
//                 })
//             })
//         })
//     })
// })
// // DISADVANTAGE OF CALLBACK IS
// //Inversion of control
// // Can't debug easily
// console.log("SCRIPT END");  


let arr = [2, 3, 4, 5, 6, 7, 8, 9]

// function doubleArr(arr){
//     let arr2 = []
//     for(var i = 0; i < arr.length; i++){
//         arr2.push(arr[i] * 2); 
//     }
//     console.log(arr2);

// }

// doubleArr(arr);


Array.prototype.calculate = function(logic){
     let output = []

    for(var i = 0; i < this.length; i++){
        output.push(logic(this[i])); 
    }
    return output;
}
function triple(x){
    return x * x * x;
}
const output = arr.calculate(triple);
console.log(output);