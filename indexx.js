const fs = require("fs");
const { text } = require("stream/consumers");

/*

using synchronous function


// create a new folder using this method
fs.mkdirSync("parkhi");

fs.writeFileSync("parkhi/text.txt","hi i am a new file")
const data =fs.readFileSync("parkhi/text.txt");
console.log(data)

// create a new folder 
fs.mkdirSync("sharad");

// create a new file and add data on file / file alreddy avilabe in directory then this method update the data
fs.writeFileSync("sharad/text.txt", "hi i am sharad parkhi :) ");

// this method add data on file without removing old data
fs.appendFileSync("sharad/text.txt","and i am a web devloper")

// you can read the data from file using this method with buffer data 
const buf_data = fs.readFileSync("readme.txt");
orgdata = buf_data.toString();
console.log(orgdata)

// you can read the data on file without buffer data
const dataa = fs.readFileSync("sharad/text.txt","utf8");
console.log(dataa)

//rename the file
fs.renameSync("sharad/text.txt","sharad/mytext.txt");

// delete the file
fs.unlinkSync("sharad/mytext.txt");

// delete the folder
fs.rmdirSync("sharad"); 









using asynchronous function


// fs.mkdir("sharad",(err)=>{
//     console.log("folder created")
// })

// fs.writeFile("sharad/new.txt","hello !!  this is a asynchronous", (err)=>{
//     console.log("file created")
// })

// fs.appendFile("sharad/new.txt","hello !  this is a asynchronous / hello !! this is a asynchronous2", (err)=>{
//     console.log("data added")
// })

// fs.readFile("sharad/new.txt",("utf8"), (err,data)=>{
//     console.log(data)
// })

// fs.rename("sharad/new.txt","sharad/news.txt", (err)=>{
//     console.log("renamed")
// })

// fs.unlink("sharad/news.txt",(err)=>{
//     console.log("file deleted")
// })

// fs.rmdir("sharad",(err)=>{
//     console.log("folder deleted")
//     })

*/


// terminel run command

// 1] use [cd..] you can back one directory

// 2] use [dir] go on all directory

// 3] use [cls] clear the terminel


