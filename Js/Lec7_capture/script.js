// Script async
// HTML Parse -> stop parsing and loads script an

// const grandparent = document.getElementById("grandparent")
// const parent = document.getElementById("parent")
// const child = document.getElementById("child")

// grandparent.addEventListener("click", ()=>{
//     console.log("RED")
// })

// parent.addEventListener("click", () => {
//     console.log("Green")
// })
// parent.addEventListener("click", () => {
//     console.log("Blue")
// })

// ------------------EVENT DELEGATION-----------------------------

// const productList = document.getElementById("productList")

// productList.addEventListener("click", (e) => {
//     if(e.target.tagName === "LI"){
//         console.log("CLICKED ON: ", e.target.text)
//     }
// })

// ------------------ Search Bar --------------------

// This is called Debouncing means this function will get called only when there is a delay

const textBox = document.getElementById("textBox");

function TimedShow() {
  let TimeId;
  textBox.addEventListener("input", (e) => {
    clearTimeout(TimeId);

    TimeId = setTimeout(() => {
      console.log("TYPED:", e.target.value);
    }, 2000);
  });
}

TimedShow()
