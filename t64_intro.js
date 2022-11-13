const fs=require("fs");
let text=fs.readFileSync("web_development/js_baskend/del.txt","utf-8");
text=text.replace("ghvbnmgvhbn","Rohan");

console.log("The content of the file is ");
console.log(text);

console.log("creat a new file...")
fs.writeFileSync("web_development/js_baskend/rohan.txt","text");
