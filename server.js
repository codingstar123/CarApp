const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const Cars = require('./models/cars.js');

////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(cors());

////////////////////////////////////////////////////////////////

//========Route=======

app.get('/', (req,res)=>{
  res.send('Hello World')
})


/////CREATE/POST ROUTE/////Add Car 
app.post('/cars', (req, res) => {
  Cars.create(req.body, (err, createdCar) =>{
      res.json(createdCar);
  });
});

///////INDEX ROUTE/GET ROUTE/READ////Get Car

app.get('/cars', (req, res) => {
  Cars.find({}, (err, foundCar) => {
      res.json(foundCar);
  });
});


///////DELETE ROUTE///Delete Cars

app.delete('/cars/:id', (req, res)=>{
  Cars.findByIdAndRemove(req.params.id, (err, deletedCars)=>{
      res.json(deletedCars);
  });
});


///////UPDATE/EDIT ROUTE///Edit Cars

app.put('/cars/:id', (req, res)=>{
  Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCar)=>{
      res.json(updatedCar);
  });
});



//========Listening=======
app.listen(3000, ()=>{
  console.log('listening...');
})
 

////////////////////////////////////////////////////////////////

mongoose.connect('mongodb://localhost:27017/carapp')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

