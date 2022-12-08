const express = require('express');
const mongoose = require('mongoose');
const app = express();



////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////

//========Route=======
app.get('/', (req,res)=>{
  res.send('Hello World')
})


//========Listening=======
app.listen(3000, ()=>{
  console.log('listening...');
})
 

////////////////////////////////////////////////////////////////

mongoose.connect('mongodb://localhost:27017/carapp')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

