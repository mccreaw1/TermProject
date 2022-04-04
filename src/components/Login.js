import { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState("MyState");
    // add method to pass username and password;
    const handleChange = (event) => {
      // maybe remove name to leave user and pswd
      // const name = event.targert.name; 
      const userName = event.target.userName;
      const password = event.target.password;
      setInputs(values => ({...values, [userName]: password}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (

      <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h2>Please Login</h2>
            <br />
            <label htmlFor="userName">
              <b>Username</b>
              <br />
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="userName"
              value={inputs.userName || ""}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="password">
              <b>Password</b>
              <br />
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              required
            />
            <br />
  
            <button type="submit">Submit</button>
          </div>
  
          <div className="container">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <br />
          </div>
        </form>
        </div>
      
    );
  }

  export default Login;