const express = require('express');
const app = express();

//========Route=======
app.get('/', (req,res)=>{
  res.send('Hello World')
})


//========Listening=======
app.listen(3000, ()=>{
  console.log('listening...');
})
