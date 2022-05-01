import Header from "../components/Header";
import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  state = { color: "black" };
  
  render() {
    return (
      <div>
        <Container style={{ color: this.props.color }}>
          {/* <h1 style={{ color: this.props.color}}>Loading... </h1> */}
          <div className="container-fluid p-4 bg-secondary text-black text-center">
            <h1>Featured Books at Banshi's</h1>
            <p>Choose from a large slection of unpopular books.</p>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-4">

                {/* Remove the data below and create seperate json */}
                <h4 className="text-center"><strong>Creative Business Startups</strong></h4> {/*book.title */}
                <img src="images/Book1.jpg" alt="" Book image />
                <p> {/*book.description */}
                 Thinking about starting a business as a side hussle? 
                </p>
                <p> {/*book.summary */}
                  Everything you need to know is covered in this ficticious book. 
                  This is an eye catching cover that is great to have in any book collection.
                </p>
              </div>
              <div className="col-sm-4">
                <h4 className="text-center"><strong>The Best Stock Images</strong></h4>
                <img src="images/Book2.jpg" alt="" Book image />
                <p>
                  Looking for free stock images to create
                </p>
                <p>
                  This book will guide you through the pitfalls and perils of finding FREE
                  stock images to use for your design.
                </p>
              </div>
              <div className="col-sm-4">
                <h4 className="text-center"><strong>Edit This Book Cover</strong></h4>
                <img src="images/Book3.jpg" alt="Nothing to See" />
                <p>
                  Edit book covers with no hassle following this no nonsense guide
                </p>
                <p>
                  Create the book cover you desire through vague instruction that will bewilder 
                  the most intelligent person. 
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Home;
