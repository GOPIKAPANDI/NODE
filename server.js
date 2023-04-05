const http = require("http");
const port= 5500;

//HTTP METHODS
/* 
>> GET : Inorder to get the data from server
>> POST : Sending or transfering data to the server
>> DELETE : To delete data from database
>> PATCH : Updating certain (OR) minimum fields(To update small things)
>> PUT : Full update(To update large things)
*/

const toDoList =["learn","apply things","succeed"];

http
.createServer((req,res)=>{
    const {method, url}= req;
    //console.log(method, url);
    if(url==="/todos"){
      if(method==="GET"){
         res.writeHead(200, {"Content-Type":"text/html"}); 
         res.write(toDoList.toString());
        }
        else if(method=== "POST"){
         let body="";
         req
        .on('error',(err)=>{
         console.log(err);        
        })
        .on('data',(chunk)=>{
          body+=chunk;      // added to body in string format
          console.log(chunk);
        })
        .on('end',()=>{
          body=JSON.parse(body);
          let newToDo= toDoList;
          newToDo.push(body.item);
          //console.log("data :",body);
        })
      }

        else{
          res.writeHead(501);
        }
    }
    else{
      res.writeHead(404);
    }
    res.end();
    
})
.listen(port,()=>{   
    
    console.log(`NodeJs server started running on port : ${port}`); 
});

