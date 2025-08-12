const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/badreq', (req, res) => {
    res.sendStatus(400)
})

app.get('/notfound', (req, res) => {
    res.sendStatus(404)
})

app.get('/servererror', (req, res) => {
    res.sendStatus(501)
})

// HBS
app.set('view engine', 'html')
app.engine('html', require('hbs').__express);

app.get('/home', (req, res) => {
    res.render("home.hbs", {
        company: "XYZ",
        founder: "Jba"
    })
})

// OVERRIDING SENDSTATUS
app.response.sendStatus = function(statusCode, type, message){
    return this.contentType(type)
    .status(statusCode)
    .send(message)
}

// res.sendStatus(404, 'text/plain', )
app.listen(8080, () => {
    console.log(`Listening to PORT 8080`);   
})