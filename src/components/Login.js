import { useState } from "react";

function Login() {
  const [user, setUser] = useState('')
  const [pswd, setPswd] = useState('')
  // add method to pass username and password;
  const handleChange = (event) => {
    // const userName = event.target.userName;
    // const password = event.target.password;
    // setInputs((values) => ({ ...values, [userName]: password }));
  };

  const handleUserChange =(e) => {
    setUser(e.target.value)
  }

  const handlePasswordChange =(e) => {
    setPswd(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(user);
  };

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
            onChange={handleUserChange}
            type="text"
            placeholder="Enter Username"
            value={user}
            
            required
          />
          <br />

          <label htmlFor="password">
            <b>Password</b>
            <br />
          </label>
          <input
          onChange={handlePasswordChange}
            type="password"
            placeholder="Enter Password"
            // name="password"
            value={pswd}
            // onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Login;
