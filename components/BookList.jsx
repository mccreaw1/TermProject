import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

import React from 'react'

function BookList({feedback, handleDelete}) {
  // Check if no book feedback exists and post message
    if(!feedback || feedback.length ===0) {
        return <p><h3>No book reviews available. <br/>Please refresh page.</h3></p>
    }
  return (
    <div className='feedback-list'>
      {feedback.map((item)=> (
          <FeedbackItem key={item.id} item={item} 
          handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

BookList.propTypes = {
    feedback: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default BookList
