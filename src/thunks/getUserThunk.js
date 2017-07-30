const dbURL = 'http://localhost:3000';
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
          dispatch({type: 'LOAD_USER_DONE', data: response.data.user})
       })
       .catch((err) => {
         dispatch({type: 'LOAD_USER_ERROR'})
       })
}