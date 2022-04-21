// Temporary placeholder for subscription page

import SubscribeForm from "../SubscribeForm";

const initialState = {message: <SubscribeForm />};



const reducer = (state = initialState, action) => {
  const newState = { ...state }
  if (action.type === "Message_change") 
   newState.message = "Thank you for subscribing to Banshi's";
    
    return newState;

};

export default reducer;
