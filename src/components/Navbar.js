// import Login from '.Login'
import LoginModal from "./LoginModal";


function Navbar() {

    function handleClick() {
        alert('Please Login')
    }
  

    return (
      <div className="navbar">
        <ul className="nav-list">
          <li>
            <button onClick={handleClick}>Home</button>
            <button onClick={handleClick}>Review</button>
            <button onClick={handleClick}>Books</button>
            <button onClick={handleClick}>Project TODO</button>
            <LoginModal/>      
          </li>
        </ul>
      </div>
    );
  }

  export default Navbar