import Header from './Header';
import React from 'react';
// import AlertDismissible from './AlertMessage';


class Home extends React.Component {
   state = { color: 'white' };
   render() {
      setTimeout(() => {
         this.setState({ color: 'black' });
      }, 4000);
      return (
         <div>
            <h1><Header text="Home Page Under Construction"/></h1>
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
            <h1 style={{ color: this.props.color}}>Loading... </h1>
            
         </div>
         
      );
   }
}
export default Home;