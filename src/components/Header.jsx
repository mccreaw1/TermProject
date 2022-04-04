import PropTypes from 'prop-types'
import loremBook from '../images/lorem-ipsum.jpg'


function Header(props) {
  return (
    <>
      <header style ={{ backgroundColor:'black', color: 'red'}}>
          <div className='container'>
              <h3>{props.text}</h3>
          </div>
          
      </header>
      <div className='container '>
        <img src={loremBook} alt='Book of the month'/>
      </div>
    </>
      
    
  )
}

Header.defaultProps = {
    text: "***  Banshi's Monthly Book Review  ***",
    bgColor: 'rgb(0,0,0,0.4)',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
