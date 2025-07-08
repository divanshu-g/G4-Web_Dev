const { resolve,reject } = require("async");
//promises -> promise are always the object which is used to make or asunc task.
// status: 1. fulfiled, 2. pending, 3. Reject 


// const { reject } = require("async");


// const placement = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I GOT PLACEMENT");
//     }, 2000);
// })

// placement
// .then((res)=>{
//     console.log("salary agyii 40laks")
//     console.log(res)
// })
// .catch((err) => {
//     console.log("ERROR1: ", err);
// })
// .then(()=>{
//     console.log("Party TIme");
// })
// .catch((err) => {
//     console.log("ERROR2: ", err);
// })
// .then(() => {
//     console.log("Working Hard");
// })
// .then(() => {
//     console.log("LAYOFF");
// })
// .catch((err)=>{
//     console.log("ERROR FOUND4: ", err);
// })
// console.log(placement);


// -----------------------PROMISE API----------------------
/*4 Types of Promise APIs
1. Promise.all
2. Promise.allSettled
3. Promise.race
4. Promise.any
 */

// const f1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Assignmnet completed by f1") 
//         reject("NOT WORKING")   
//     }, 2000);
// })

// const f2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Assignmnet completed by f2")    
//     }, 4000);
// })

// const f3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Assignmnet completed by f3")  
//     }, 3000);
// })
// const f4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Assignmnet completed by f4")  
//     }, 2000);
// })


// Promise
// .any([f1, f2, f3, f4])
// .then((res) => {
//     console.log("ANY: ", res)
// })
// .catch((err) => {
//     console.log("ERROR: ", err);
// })
// // APIS in line having least set timeout

// Promise
// .all([f1, f2, f3, f4])
// .then((res) => {
//     console.log("ALL: ", res)
// })
// .catch((err) => {
//     console.log("ERROR: ", err);
// })
// // Even if any 1 APIs is reject all APIs will shutdown

// Promise
// .allSettled([f1, f2, f3, f4])
// .then((res) => {
//     console.log("ALL SETTLED: ", res)
// })
// .catch((err) => {
//     console.log("ERROR: ", err);
// })
// // Will give status if fulfilled or rejected and also give reason

// Promise
// .race([f1, f2, f3, f4])
// .then((res) => {
//     console.log("RACE: ", res)
// })
// .catch((err) => {
//     console.log("ERROR: ", err);
// })
// First one to give response and if 2 APIs have same timeout first one in line will send response


// ----------------------------- ASYNC-AWAIT ----------------------------------------

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Assingment is completed")
//     }, 2000);
// })

// async function checkAssignment(){
//     const checked = await p1;
//     console.log("CHECKING THE ASSIGNMENT: ", checked);
// }

// checkAssignment()

// -------------------------------------------------

async function fetching(){
    
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log("ERROR NOT FOUND: ", err.message)
    }

}
fetching()