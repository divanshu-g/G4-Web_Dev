// let userData = [
//     {
//         name: "Divanshu",
//         age: "21"
//     },
//     {
//         name: "Pratu",
//         age: "21"
//     },
//     {
//         name: "sustik",
//         age: "19"
//     }
// ]

const { reject } = require("async");

// let result = userData.map((user) => {
//     if(user.age > 20){
//         return user.name;
//     }
// })

// console.log(result);


// const promise2 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve("Prmoise resolved");
//     }, 3000)
// })

// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve("Prmoise resolved");
//     }, 5000)
// }) 

// const promise4 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve("Prmoise resolved");
//     }, 5000)
// }) 

// promise2
// .then(()=>{
//     console.log("P2")
// })
// .then(()=> {
//     promise3.then(() => {
//         console.log("p3")
//     })
//     .then(()=>{
//         promise4.then(() => {
//             console.log("p4");
//         })
//     })
// })

// promise
// .then((res) => console.log(res))
// .then(() => setTimeout(()=>{
//     console.log("P2")
// },2000))
// // .then(() => setTimeout(()=>{
// //     console.log("P3")
// // },5000))
// // .then(() => setTimeout(()=>{
// //     console.log("P4")
// // },1000))
// .catch((err) => console.log(err))



// ---------------------------------------------------------

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolve p11")
    })
})

function somethingSomething(message, delay)
{
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log(message);
            resolve(message);
        }, delay);
    })
}