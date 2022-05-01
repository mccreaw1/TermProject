/* eslint-disable jsx-a11y/alt-text */
import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"

  
function BookCard (props ) {

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `Buy Banshi's Books`
  })

    return (
    <div className="col-md-6 col-xl-6">
      <div className="card mb-3">
        <Card.Header className="text-center" style={{color: 'red', fontSize: '20px', }}>{props.book.headerText}</Card.Header>
        <img className="card-img-top" src={`/images/${props.book.image}.jpg` }/>
        <div className="card-body">
          <h4 className="card-title text-center">{props.book.name}</h4>
          <h3 className="text-center">${props.book.price} </h3>
          <p className="card-text">
            {props.book.description}
          </p>
          <h6 className="card-text">Quantity Available: {props.book.avail}</h6>

        <button onClick={() => setCount(1) }>Add</button>
        <button onClick={() => setCount(0)}>Remove</button>
        <h3> {count} '{props.book.name}'in cart</h3>
        
        </div>
      </div>
    </div>
    )
}

export default BookCard