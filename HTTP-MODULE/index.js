import http from "http";
const server = http.createServer((req ,res)=>{
    res.write("<h1>Hello W</h1>");
    
})
server.listen(8000,()=> console.log("Serever is running"));