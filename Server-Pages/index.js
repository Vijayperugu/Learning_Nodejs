import http from "http";
import fs from "fs";
import { error } from "console";
const server = http.createServer((req ,res)=>{
    if(req.url==="/"){
        fs.readFile("./public/index.html",(error, data)=>{
            if(error) throw error;
            res.end(data);
        })
    }else if (req.url ==="/about"){
        fs.readFile("./public/about.html",(error, data)=>{
            if(error) throw error;
            res.end(data);
        })

    }
    
})
server.listen(8000,()=> console.log("Serever is running"));