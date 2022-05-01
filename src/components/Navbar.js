// import Login from '.Login'
// import LoginModal from "./LoginModal";
import Card from "./shared/Card";
import { Link } from 'react-router-dom'



function Navbar() {

    return (

      <>
      <div className="navbar center">
        <ul className="nav-list">
          <li>
          <Link to='/'><button>Home</button></Link>
          <Link to='/review'><button>Book Review</button></Link>
          <Link to='/books'><button>Buy Books</button></Link>
          <Link to='/list'><button>Project</button></Link>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/register'><button>Register</button></Link>
          </li>
        
        </ul>
      </div>
      </>
    );
  }

  export default Navbar