import React from 'react'
import Header from './Header';

class DisplaySale extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
    super(props);
    this.state = { message: "Here is a message in white ",
                   color: 'white',
                  comp: <Header text="Banshi's SALE! 50% OFF ALL BOOKS ENDS SOON!" bgColor="red"/> }
    console.log(`Dispaly Sale message in white text`)
    }
    componentDidMount() {
        // The state will change after 5 seconds
        setTimeout(() => {
            this.setState({ color : 'black' , message: "", comp:<Header text="USE CODE 'BOOK50' FOR DISCOUNT!"/>});
        }, 6000)
        
    }
  render() {
      console.log('Sale message component called')
    return (
      <div>
        <h2 style={{ color: this.state.color }}> {this.state.comp}  </h2>
      </div>
    )
  }
}
export default DisplaySale