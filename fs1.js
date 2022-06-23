const fs = require('fs');

fs.readFile('./test/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});