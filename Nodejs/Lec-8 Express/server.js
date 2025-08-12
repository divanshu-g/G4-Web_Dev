const express = require("express")
const app = express()
const port = 8080
const path = require('path')


// app.get('/', (req,res) => {
//     res.send("Hello World")
// })

// app.post('/', (req,res) => {
//     res.send("Hello World!!! POST")
// })

// app.put('/', (req,res) => {
//     res.send("Hello World!!! PUT")
// })


// app.delete('/', (req,res) => {
//     res.send("Hello World!!! DELETE")
// })

// rather than making different requests we use app.all
// app.all('/', (req, res) => {
//     res.send("Hello Bye")
// })

// file serving 

app.use('/static', express.static(path.join(__dirname, 'public')));
// -------------------------------------------------
// play with this use and all

app.use('/', (req, res) => {
    console.log("This is middleware");
    next();
})


app.use('/', (req, res) => {
    console.log("This is middleware");
    next();
})

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
})
