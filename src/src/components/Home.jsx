import Header from "./Header";
import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  state = { color: "white" };
  render() {
    setTimeout(() => {
      this.setState({ color: "black" });
    }, 4000);
    return (
      <div>
        <h1>
          <Header text="Home Page Under Construction" />
        </h1>
        <UpdateHome color={this.state.color} />
      </div>
    );
  }
}
class UpdateHome extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    // console.log('Home.Component will be updated soon');
  }
  render() {
    return (
      <div>
        <Container style={{ color: this.props.color }}>
          {/* <h1 style={{ color: this.props.color}}>Loading... </h1> */}
          <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>Books at Banshi's</h1>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-4">
                <h3>Creative Business Startups</h3>
                <img src="images/Book1.jpg" alt="" Book image />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className="col-sm-4">
                <h3>The Best Stock Images</h3>
                <img src="images/Book2.jpg" alt="" Book image />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className="col-sm-4">
                <h3>Edit This Book Cover</h3>
                <img src="images/Book3.jpg" alt="Nothing to See" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
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
