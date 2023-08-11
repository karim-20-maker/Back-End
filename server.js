const express = require('express');
const app = express();
app.get('/api/welcome',(req,res)=>{
    res.json({ message: 'Welcome to the API'});
});

app.listen(3000, ()=>{
    console.log('server is listening on port 3000');

});