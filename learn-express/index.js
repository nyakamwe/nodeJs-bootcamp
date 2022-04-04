const express = require('express');

//creating express app
const app =express();

//listening to the request on server
app.listen(3000, ()=>{
    console.log('Server started listening')
});


