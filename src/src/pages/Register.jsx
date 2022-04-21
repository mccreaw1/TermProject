import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThemeChange from './ThemeChange'


class Register extends Component {

    styles = {
        fontStyle: 'normal',
        color: 'black'
    }

  render() {
    return (
      <div className='App'>
        <h4 style={this.styles}>{this.props.message}</h4>
        <ThemeChange onClick={this.ButtonChange}>Subscribe</ThemeChange>
      </div>
    )
  }
}

const mapStatetoProps = state => {
    return {
        message: state.message
    }
} 

// This should dispatch the action tyoe to the reducer where the 
// reducer if statement catches the change and the new message 
// is posted
const mapDispatchToProps = dispatch => {
  return {
  ButtonChange: () => dispatch({ type: "Message_change" })
  }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(Register)
