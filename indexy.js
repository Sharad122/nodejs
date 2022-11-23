const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`myApi/userApi.json`,"utf-8");
const jsondata = JSON.parse(data);

const server = http.createServer((req,res)=>{
if (req.url == "/"){
    res.end(jsondata[0].city)
}
else if (req.url == "/about"){

    res.end("<h2>Welcome to about<h2/>")
}
else{
    res.end("404 error")
}
})

server.listen(8000,"127.0.0.1",()=>{
   console.log("live server is run")
})