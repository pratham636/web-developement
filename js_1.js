const express= require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello World!11");
});

app.listen(3000,()=>{
    console.log('Listen on port 30000');
});