import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
// import {useState} from 'react';


function FeedbackItem({item, handleDelete}) {
    // const [rating, setRating] = useState(1)
    // const [text, setText] = useState('New book of the week')

    // const handleClick = (id) => {
    //     console.log(`Delete ${id}`)
    // }

  return (
     
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='red'/>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Add</button> */}
    </Card>
    
  )
}

FeedbackItem.propsTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
