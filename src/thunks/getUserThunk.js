// const dbURL = 'http://localhost:3000';
const dbURL = 'https://vast-beach-20437.herokuapp.com';
import axios from 'axios';

export const getUserThunk = (userId, name) => (dispatch) => {
  axios.post(dbURL + '/getUser', {
          facebookId: userId,
          name: name
       })
       .then((response) => {
          console.log("this is response");
          dispatch({type: 'LOAD_USER_DONE', data: response.data})
       })
       .catch((err) => {
         dispatch({type: 'LOAD_USER_ERROR'})
       })
}