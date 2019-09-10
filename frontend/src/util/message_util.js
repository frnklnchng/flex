import axios from 'axios';
import jwt_decode from 'jwt-decode';
//should only make the requests
export const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';

//fetch all messages
export const fetchAllMessages = () => dispatch => {
  return (
    axios.get('/api/messages')
    .then((response) => {
      dispatch(getAllMessages(response.data));
        // console.log(response.data)
      })
    .catch((error) => {
      console.log(error);
    })
  )
}
export const postMessage = (message) => dispatch => {
  return (
    axios.post('/api/messages/post', message)
      .then((response) => {
        // console.log(response.data)
        // dispatch(postMessage(response.data));
      })
      .catch((error) => {
        console.log(error);
      })
  )
}

// export const storeMessage

export const getAllMessages = (allMsgs) => {
  return {
    type: GET_ALL_MESSAGES,
    payload: allMsgs,
  }
} 
