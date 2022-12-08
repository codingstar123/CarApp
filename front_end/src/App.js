import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'



function App() {

  //========Hooks============

  //=======Create New Car===========

  const [newYear,setNewYear] = useState('');
  const [newMake, setNewMake] = useState(''); // which brand it is, toyota, BMW...
  const [newModel,setNewModel]= useState(''); //Rav4, Supra, M4...
  const [newPrice, setNewPrice] = useState(''); //how much is it
  const [newImage, setNewImage] = useState(''); // what's the car look like
  const [newAvail, setNewAvail] = useState(false); //is the car still available? yes, or no
  const [cars, setCars] = useState([]);





  //=======onChange {} ; HandlerFunctions========
  const handleNewYear =(event)=>{
    setNewYear(event.target.value);
  }
  const handleNewMake =(event)=>{
    setNewMake(event.target.value);
  }
  const handleNewModel =(event)=>{
    setNewModel(event.target.value);
  }
  const handleNewPrice =(event)=>{
    setNewPrice(event.target.value);
  }
  const handleNewImage =(event)=>{
    setNewImage(event.target.value);
  }
  const handleNewAvail =(event)=>{
    setNewAvail(event.target.value);
  }
  const handleNewSubmit =(event)=>{
    axios.post('http://localhost:3000', {
      year:newYear,
      make:newMake,
      model:newModel,
      price:newPrice,
      image:newImage,
      avail:newAvail
      }
    ).then(()=>{
      axios
        .get('http://localhost:3000')
        .then((response)=>{
          setCars(response.data)
        })
    })
    }


  //========Middle Ware=======
  // useEffect(()=>{
  //   axios
  //     .get('http://localhost:3000'); //check the backend route
  //     .then((response)=>{
  //       setCars(response.data); //
  //     })
  // },[])


  //=========Main===========


  return (
    <main>
    <h1>We have the best cars!</h1>
    <div>
      <h2>Create New Car </h2>
      <form onSubmit={handleNewSubmit}>
        Year:<input type="number" onChange={handleNewYear}/>
        Make:<input type="text" onChange={handleNewMake}/>
        Model:<input type="text" onChange={handleNewModel}/>
        Price:<input type="number" onChange={handleNewPrice}/>
        Image:<input type="text" onChange={handleNewImage}/>
        Availability:<input type="checkbox" onChange={handleNewAvail}/>
        <input type="submit" value="Create Car"/>
      </form>
    </div>
    </main>

  );
}

export default App;
