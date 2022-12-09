import {useState} from 'react'

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
          <div><img src={props.car.image} height="250"/></div>
          <div>{props.car.year}</div>,
          <div>{props.car.make}</div>,
          <div>{props.car.model}</div>,
          <div>{props.car.price}</div>,
          <button onClick={(event)=>{props.handleNewDelete(props.car)}}>Delete</button>
          <button onClick={handleShowEdit}>Edit</button>

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
