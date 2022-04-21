import BookCard from "./BookCard";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";

function Books(props) {
  return (
    <>
      <h1 id="book" className="display-3 my-3 text-center text-muted">
        <Header text="Books Available at Banshi's"/>
      </h1>
      <div className="row">
        {props.book.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      

    </>
  );
}

export default Books;
