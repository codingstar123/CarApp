import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
//the component part
import Car from './component/part'


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
  //=======Update Cars================
  const [updateYear,setUpdateYear] = useState();
  const [updateMake, setUpdateMake] = useState(); // which brand it is, toyota, BMW...
  const [updateModel,setUpdateModel]= useState(); //Rav4, Supra, M4...
  const [updatePrice, setUpdatePrice] = useState(); //how much is it
  const [updateImage, setUpdateImage] = useState(); // what's the car look like
  const [updateAvail, setUpdateAvail] = useState();




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
    setNewAvail(event.target.checked);
  }
  //======onChange{}; HandlerFunction Update =========
  const handleUpdateYear =(event)=>{
    setUpdateYear(event.target.value);
  }
  const handleUpdateMake =(event)=>{
    setUpdateMake(event.target.value);
  }
  const handleUpdateModel =(event)=>{
    setUpdateModel(event.target.value);
  }
  const handleUpdatePrice =(event)=>{
    setUpdatePrice(event.target.value);
  }
  const handleUpdateImage =(event)=>{
    setUpdateImage(event.target.value);
  }
  const handleUpdateAvail =(event)=>{
    setUpdateAvail(event.target.checked);
  }


  //Post=adding to the database
  const handleNewSubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/cars', {
      year:newYear,
      make:newMake,
      model:newModel,
      price:newPrice,
      image:newImage,
      availableToPurchase:newAvail
      }
    ).then(()=>{
      axios
        .get('http://localhost:3000/cars')
        .then((response)=>{
          setCars(response.data)
        })
    })
    }

  //The Update Submit ============
  const handleUpdateSubmit =(car)=>{
    axios.put(`http://localhost:3000/cars/${car._id}`, {
      year:updateYear,
      make:updateMake,
      model:updateModel,
      price:updatePrice,
      image:updateImage,
      availableToPurchase:updateAvail
      }
    ).then(()=>{
      axios
        .get('http://localhost:3000/cars')
        .then((response)=>{
          setCars(response.data) //
        })
    })
    }

  //Delete=Deleting the data
  const handleNewDelete = (car) =>{
  axios
      .delete(`http://localhost:3000/cars/${car._id}`)
      .then(()=>{
          axios
              .get('http://localhost:3000/cars')
              .then((response)=>{
                setCars(response.data)
              })
      })
}

  //========Middle Ware=======
  //show get request
  useEffect(()=>{
    axios
      .get('http://localhost:3000/cars') //check the backend route
      .then((response)=>{
        setCars(response.data) //
      })
  },[])


  //=========Main===========


  return (
    <main>
    {/* This is the Create section */}
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
        <input type="submit" value="Update Car"/>
      </form>
    </div>
    {/* This is the Show section */}
    <div>
      <h2>Cars</h2>
      {
        cars.map((car)=>{
          return <>
          <Car car={car} handleUpdateSubmit={handleUpdateSubmit}
          handleUpdateYear={handleUpdateYear}
          handleUpdateMake={handleUpdateMake}
          handleUpdateModel={handleUpdateModel}
          handleUpdatePrice={handleUpdatePrice}
          handleUpdateImage={handleUpdateImage}
          handleUpdateAvail={handleUpdateAvail}
          handleNewDelete={handleNewDelete} />

            </>
          })
      }
    </div>

    </main>

  );
}

export default App;
