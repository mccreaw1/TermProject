import PropTypes from 'prop-types'
// import loremBook from 'lorem-ipsum.jpg'


function Header(props) {
  return (
    <>
      <header style ={{ backgroundColor: props.bgColor}}>
          <div className='container-default'>
              <h3 style ={{color: props.color}}>{props.text}</h3>
          </div>
          
      </header>
    </>
      
    
  )
}

Header.defaultProps = {
    text: "***  Banshi's  ***",
    bgColor: 'tan',
    textcolor: 'white'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
