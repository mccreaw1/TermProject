import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";

import React from "react";

function BookList({ feedback, handleDelete }) {
  // Check if no book feedback exists and post message
  if (!feedback || feedback.length === 0) {
    return (
      <p>
        <h3>
          No book reviews available. <br />
          Please refresh page.
        </h3>
      </p>
    );
  }
  return (
    <>
      <Header text="Book Review of the Month" bgColor= "#ff5665" color="white"/>
      <Container>
      <Row className="justify-content-md-center" >
        <img src="images/lorem-ipsum.jpg" alt="Lorem Ipsum Report" style= {{width: 250}} />
      </Row>
      </Container>
      <div className="feedback-list ">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

BookList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default BookList;
