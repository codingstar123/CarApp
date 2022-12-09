import {useState} from 'react'
import '../App.css';

const Car = (props)=>{

  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit =()=>{
    setShowEdit(!showEdit);
  }

    return(
      <>
        {
        (props.car.availableToPurchase)?
        <>
          <div className="card display" style={{width:"20rem", backgroundColor:"lightgrey"}}>
            <img src={props.car.image} className="card-img-top" alt="toyota supra"/>

            <div className="card-body">
              <h5 className="card-title">{props.car.make},{props.car.model}</h5>
              <p className="card-text">{props.car.year}</p>
              <p className="card-text">{props.car.price}</p>
              <button onClick={(event)=>{props.handleNewDelete(props.car)}}
              type="button" className="btn btn-danger" >Delete</button>
              <button type="button" className="btn btn-primary" onClick={handleShowEdit}>Edit</button>
            </div>
          </div>

  {/* This is the Edit Section */}
          {
            showEdit?
          <div>
            <h2>Edit Car</h2>
            <form onSubmit={(event)=>{props.handleUpdateSubmit(props.car)}}>
              Year:<input type="number" defaultValue={props.car.year} onChange={props.handleUpdateYear}/>
              Make:<input type="text" defaultValue={props.car.make} onChange={props.handleUpdateMake}/>
              Model:<input type="text" defaultValue={props.car.model} onChange={props.handleUpdateModel}/>
              Price:<input type="number" defaultValue={props.car.price} onChange={props.handleUpdatePrice}/>
              Image:<input type="text" defaultValue={props.car.image} onChange={props.handleUpdateImage}/>
              Availability:<input type="checkbox" defaultChecked={props.car.availableToPurchase} onChange={props.handleUpdateAvail}/>
              <input type="submit" value="Update Car"/>
              </form>
          </div>
          :
          null}
        </>
        :
        <></>
      }
      </>
    )
}

export default Car;
