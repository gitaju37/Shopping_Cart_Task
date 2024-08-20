import propTypes from 'prop-types'


const Navbar = ({cart} ) => {
   
  return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor:"#95e4f4"}}>
          <div className="container-fluid">
              <a className="navbar-brand" href="#">APPlE SHOP</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Shop
                          </a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">All Products</a></li>
                              <li><a className="dropdown-item" href="#">Popular Item</a></li>
                              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
          <form className="d-flex justify-content-around">
              <button className="btn btn-outline-dark">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
              </button>
          </form>
      </nav>
  )
}
Navbar.propTypes = {
    cart: propTypes.number.isRequired,
    setCart:propTypes.func
}

export default Navbar
