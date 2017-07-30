// const dbURL = 'http://localhost:3000';
const dbURL = 'https://vast-beach-20437.herokuapp.com/';
// https://vast-beach-20437.herokuapp.com/

import axios from 'axios';

export const getUserThunk = (userId, name) => (dispatch) => {
  console.log('sending info');
  console.log(userId);
  console.log(name);
  axios.post(dbURL + '/getUser', {
          facebookId: userId,
          name: name
       })
       .then((response) => {
          console.log(response);
          console.log(response.data);
          dispatch({type: 'LOAD_USER_DONE', data: response.data})
       })
       .catch((err) => {
         dispatch({type: 'LOAD_USER_ERROR'})
       })
}
