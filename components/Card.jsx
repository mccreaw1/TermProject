/* eslint-disable jsx-a11y/alt-text */


function Card (props ) {

    return (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <img className="card-img-top" src={`img/${props.book.image}.png` }/>
        <div className="card-body">
          <h4 className="card-title text-center">{props.book.name}</h4>
          <h3 className="text-center">${props.book.price} </h3>
          <p className="card-text">
            {props.book.description}
          </p>
          <h6 className="card-text">Quantity Available: {props.book.avail}</h6>
        </div>
      </div>
    </div>
    )
}