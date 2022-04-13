import PropTypes from 'prop-types'
// import loremBook from 'lorem-ipsum.jpg'


function Header(props) {
  return (
    <>
      <header style ={{ backgroundColor: props.bgColor}}>
          <div className='container-default'>
              <h3>{props.text}</h3>
          </div>
          
      </header>
      {/* Image needs to be moved and add logic to render when no prop present */}
      {/* <div className='container '>
        <img src={loremBook} alt='Book of the month'/>
      </div> */}
    </>
      
    
  )
}

Header.defaultProps = {
    text: "***  Banshi's Monthly Book Review  ***",
    bgColor: 'tan' 
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
