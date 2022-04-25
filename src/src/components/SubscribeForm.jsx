import { useState } from 'react'
// import ThemeChange from './ThemeChange'

function SubscribeForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('') 

  const handleOnSubmit = async (e) => {
    console.log("In handleSubmit()")
    e.preventDefault()
    console.log("Ran e.preventDefault()")
    let result = await fetch(
      'http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({firstName,lastName,email,userName,password}),
        headers: {
          'Content-Type': 'application/json'
        } 
      }
    )
    console.log(`Completed fetch`)
    result = await result.json()
    console.warn(result)
    if(result) {
      alert("Data saved succesfully")
      setFirstName(``)
      setLastName(``)
      setEmail(``)
      setUserName(``)
      setPassword(``)
    }
    else {
      alert("Data not saved, something went wrong.")
    }
  }

    return (
      <>
        <div><h2>Banshi's New User Subscription</h2></div>
        <form className="login">

          <div className="container">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}              
            />
          </div>

          <div className="container">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}              
            />
          </div>

          <div className="container">
            <label htmlFor="email">eMail</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}              
            />
          </div>

          <div className="container">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}              
            />
          </div>

          <div className="container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}              
            />
          </div>

  
          <div className="subscription-form-field-group">
          <button type="submit" onClick={handleOnSubmit}>Subscribe</button>
            {/* <input type="submit"  /> */}
          </div>
        </form>
      </>
    );
  }

  export default SubscribeForm