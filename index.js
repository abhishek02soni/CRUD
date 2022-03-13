// Read dummy.json 
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require('fs');  // file System
app.use(express.json());
//Reading a file is asynchronous

// fs.readFile(pathOfFile,encoding,function that you want to execute after file is read)

// fs.readFile("dummy.json","utf-8",function(err,fileData){
//     if(err){
//         console.log("Could not read file",err);

//     }
//     else{
//         console.log(fileData);
//     }
// })

// const data = "{The data that you want to write should always be a string";
// fs.writeFile("dummy2.txt",data,"utf-8",function(err){
// if(err){
//     console.log("Could Not Write Data")
// }
// else{
//     console.log("File Written Successfully")
// }

// })

// fs.rm("dummy2.json",function(err){
//     if(err){
//         console.log("Could not delete file",err);
//     }
//     else{
//         console.log("File deleted Successfully")
//     }
// })

// app.post("/todo", function (req, res) {
//     console.log("Request body is", req.body)
//     const id = new Date().valueOf();
//     fs.writeFile(`${id}.json`, JSON.stringify(req.body), "utf-8", function (err) {
//         if (err) {
//             res.status(500).send("Could not write file");
//         }
//         else {
//             res.status(200).send("File written Successfully");
//         }

//     })
// })

app.get("/todo/:todoId",function(req,res){
    // console.log(req.path)
    // res.send(req.params)
  fs.readFile(`${req.params.todoId}.json`,'utf-8',function(err,data){
      if(err){
          res.status(400).send("Could not read the file");

      }
      else{
          res.status(200).send(data)
      }
  })
})

// Read the file mentioned
// If file is present then update the data
// If file is not present throw error
app.put("/todo/:todoId",function(req,res){
 fs.writeFile(`${req.params.todoId}.json`,JSON.stringify(req.body),"utf-8",function(err){
     if(err){
         res.status(400).send("Could not write file");
     }
     else{
         res.status(200).send("File written Successfully")
     }
 })
})
app.delete("/todo/:todoId",function(req,res){
    fs.rm(`${req.params.todoId}.json`,function(err){
        if(err){
            res.status(400).send("Could not delete file");
        }
        else{
            res.status(200).send("File Deleted Successfully");
        }
    })
})
app.listen(8081)


//: ----> it means it will gone a dynamic now





