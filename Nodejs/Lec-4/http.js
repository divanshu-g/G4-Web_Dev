// HTTP SERVER
const http = require("node:http");
const { json } = require("node:stream/consumers");

const blogPost = [
    {
        "BlogId": 1,
        "blogTitle" : "THIS IS TILE OF BLOG",
        "blogDescription":"THIS IS DESCRIPTION OF BLOG",
        "authorBlog": "Pransh",
        "date":"22 July"

    }

]

const server = http.createServer((req,res)=>{
    if (req.method == "GET" && req.url == '/'){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("DATA FETCHED RESPONSE SEND")
    }
    else if (req.method == "GET" && req.url == '/blog'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(blogPost))
    }
    else if(req.method == "POST" && req.url == '/blog'){
        let body = ''
        req.on('data', chunk => {
            body += chunk;
        })
        req.on('end', ()=>{
            try{
                const newBlog = JSON.parse(body)
                blogPost.push(newBlog)
                res.writeHead(201, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({message: "Blog added sexfully", data: newBlog}))
            }
            catch{
                res.writeHead(400,{'Content-Type': 'application/json'});
                res.end(JSON.stringify({message: "ERROR"}));
            }
        })
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end("NOT FOUND")
    }
})

server.listen(8000,()=>{
    console.log("YOUR SERVER RUNNING ON PORT 8000")
})