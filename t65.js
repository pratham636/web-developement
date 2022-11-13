const fs= require("fs");
let text=fs.readFile("web_development/js_backend/del.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("This is a message")
