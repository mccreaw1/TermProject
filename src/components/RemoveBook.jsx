import React from "react";
import Header from "./Header";

class RemoveBook extends React.Component {
    constructor() {
        super();
        this.state ={delete: false,
        };
    }
    render () {
            return (
            <div>
                <h2><Header text ="Book List"/></h2>
                <button className="btn" onClick={()=> this.setState({ delete: true })}>
                    Remove Book
                </button>
                {this.state.delete ? null : <BookTest/>}
            </div>
        );
    }
}

class BookTest extends React.Component {
    componentWillUnmount() {
        alert('Book removed successfully!');
    }
    render() {
        return (
            <div>
                <h3>Book Name: Poor Little Amy</h3>
                <h3>Genre: Childrens stories</h3>
            </div>
        )
    }
}

export default RemoveBook