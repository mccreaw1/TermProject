import "./App.css";
import { useState } from "react";
// import Modal from "react-modal";
import Title from "./components/Title";
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import Books from "./data/book";
import Home from "./components/Home";
import RemoveBook from "./components/RemoveBook";

import BookList from "./components/BookList";
import FeedbackData from "./data/FeedbackData";
import DisplaySale from "./components/DisplaySale";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [book, setBook] = useState();
  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container-default">
        <Navbar />
      </div>
      <Title />
      <div className="container-default">
        <DisplaySale />
      </div>
      <div className="container-default">
        <Home />
      </div>
      <div className="container-default">
      <RemoveBook/>
      </div>
      <div className="container-default">
        {/* <Header />
        <BookList feedback={feedback} handleDelete={deleteFeedback}/> */}
      </div>

      <div className="container-default">
        <List />
      </div>
    </>
  );
}

export default App;
