
const express = require('express');
const port = 8000;
const app = express();








// app.get('/', function(req,res){
//     res.send('<h1>Cool Go</h1>')
// }, function(err){
//     if(err){
//         console.log('Error');

//     }
// })

//Setting up my server
app.listen(port , function(err){
    if(err){
        console.log('Error in starting the server');
    }
    console.log(`Server is running on port ${port}`);
});