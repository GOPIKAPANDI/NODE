const http = require("http");
const port= 5500;
http
.createServer((req,res)=>{
      res.writeHead(200, {"Content-Type":"text/html"});
      res.write("<h2>Hey Server started :-) </h2>");
      res.end();

})
.listen(port,()=>{   
    
    console.log(`NodeJs server started running on port : ${port}`); 
});

