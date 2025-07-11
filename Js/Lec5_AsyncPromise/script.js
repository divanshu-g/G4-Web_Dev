// function welcomestudents(welcome, goodbye) {
//     return `${welcome} ${this.studentname} is a student of class ${this.studentclass} ${goodbye}`;
// }

// const student1= {
//     studentname:"yoyo",
//     studentclass:"ukg"
// }

// const student2={
//     studentname:"woow",
//     studentclass:"nursery"
// }

// console.log(welcomestudents.call(student1,"goodmorning","bye"));
// console.log(welcomestudents.call(student2,"goodevening","bye bye"));

// console.log(welcomestudents.apply(student1,["goodmorning","bye"]));
// console.log(welcomestudents.apply(student2,["goodevening","bye bye"]));

// console.log(welcomestudents.bind(student1, "goodmorning", "bye")());
// console.log(welcomestudents.bind(student2, "goodevening", "bye bye")());

// ------------------------------ CURRYING ----------------------------------------------------

// currying - to use the outer scope variables

// function sumofthree(a){
//     return function(b){
//         return function(c){
//             return(a+b+c);
//         }
//     }
// }

// console.log(sumofthree(20)(30)(40));

// function choose(bread){
//     return function(patty){
//         return function(cheese){
//             return(bread+patty+cheese);
//         }
//     }
// }

// console.log(choose("whole ")("aloo patty ")("yes cheese"));

// event bubbling and capturing
// bubbling- bottom to top

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// grandparent.addEventListener("click",()=>{
//     console.log("dadaji ka click kyu chheda")
// })

// parent.addEventListener("click",()=>{
//     console.log("mera ka click kyu chheda")
// })

// child.addEventListener("click",()=>{
//     console.log("apne aap ka click kyu chheda")
// })

//---------------capturing-----------------------------


grandparent.addEventListener("click", () => {
    console.log("dadaji ka click kyu chheda")
}, true);

parent.addEventListener("click", () => {
    console.log("mera ka click kyu chheda")
}, true);

child.addEventListener("click", () => {
    console.log("apne aap ka click kyu chheda")
}, true);



