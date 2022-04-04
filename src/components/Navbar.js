// import Login from '.Login'


function Navbar() {

    function handleClick() {
        alert(`Please login below!`)
    }


    return (
      <div className="navbar">
        <ul className="nav-list">
          <li>
            <button onClick={handleClick}>Home</button>
            <button onClick={handleClick}>Books</button>
            <button onClick={handleClick}>Log in</button>
          </li>
        </ul>
      </div>
    );
  }

  export default Navbar