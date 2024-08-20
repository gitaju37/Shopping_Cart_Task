import propTypes from 'prop-types'
import { useState } from 'react'

const Card = ( { products, cart, setCart } ) => {
  const [removecart, setRemovecart]=useState(true)
  return (
    <div className="mb-5">
    <div className="card" style={{ width: "16rem", height:"30rem" }}>
      {products.sale ? ( <div className="badge bg-dark text-white position-absolute"
      style={{top:"0.5rem", right:"0.5rem"}}>sale</div> ) : ( "" )}
        <img src={products.image} className="card-img-top" alt="..."/>
          <div className="card-body p-4">
          <h5 className="card-title">{products.name}</h5>
          {products.reviews ? ( <div className="d-flex justify-content-center small text-warning mb-2">
            <div><i className="bi bi-star-fill"></i></div>
            <div><i className="bi bi-star-fill"></i></div>
            <div><i className="bi bi-star-fill"></i></div>
            <div><i className="bi bi-star-fill"></i></div>
            <div><i className="bi bi-star-fill"></i></div>
              </div> ) : ( "" )}
          {products.original ? ( <div>
            <span className="text-muted text-decoration-line-through">{products.originalPrice}</span><span>  </span>{products.price}
            </div>)
            :(products.price)}
        </div>
        <div className='card-button mb-5'>
          <div>
            {removecart ? <button className="btn btn-success" href="#" onClick={() => {
              setCart(()=> cart + 1 );
              setRemovecart( false );
            }}>Add to Cart</button>
              : <button className="btn btn-danger" href="#" onClick={() => {
                setCart(()=> (cart - 1) );
                setRemovecart( true );
              }}>Remove From Card</button>}
            </div>

        </div>
        
          
      </div>
    </div>   
  )
}
Card.propTypes = {
  products: propTypes.object.isRequired,
  cart: propTypes.number,
  setCart: propTypes.func
}



export default Card
