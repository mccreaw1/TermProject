import "./App.css";
import { useState } from "react";
// import Modal from "react-modal";
import Title from "./components/Title";
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import BookList from "./components/BookList";
import FeedbackData from "./data/FeedbackData";

// Modal.setAppElement("#root");

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log('App', id)
    if(window.confirm('Are you sure to delete?'))
    setFeedback(feedback.filter((item)=> item.id !== id))
  }

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <Title />
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <BookList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
      <div className="container">
      <Login />
      </div>

      <List />
    </>
  );
}

// function MyButton() {
//   return <button onClick={login}>Log in</button>;
//   function login() {
//     return <h3>This is supposed to display</h3>;
//   }
// }



export default App;
