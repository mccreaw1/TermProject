import "./App.css";
import { useState, props } from "react";

// import Modal from "react-modal";

// import ToDoList from "./components/ToDoList";
// import Header from "./components/Header";
// import LoginModal from "./components/LoginModal";
// import Home from "./components/Home";
// import RemoveBook from "./components/RemoveBook";
// import DisplaySale from "./components/DisplaySale";

import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home1 from "./pages/Home1";
import Books from "./components/Books";
import book from "./data/book";
import BookList from "./components/BookList";
import FeedbackData from "./data/FeedbackData";
import ToDoList from "./pages/ToDoList6";
import Login from "./components/Login";
import Register from "./pages/Register";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeChange from "./pages/ThemeChange";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // const [book, setBook] = useState(BookData);

  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="container-default pt-2">
        <Navbar />
        <Title />
        
        {/* <Books book={book}/> */}
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route path="/list" element={<ToDoList />} />
          <Route path="/review" element={<BookList feedback={feedback} handleDelete={deleteFeedback} />}/>
          <Route path="/books" element={<Books book={book}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>

        {/* <DisplaySale /> */}
        {/* <RemoveBook /> */}

      </div>
    </Router>
  );
}

export default App;
