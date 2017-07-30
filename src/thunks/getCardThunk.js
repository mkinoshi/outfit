import axios from 'axios';
const dbURL = 'https://vast-beach-20437.herokuapp.com';
// const dbURL = 'http://localhost:3000';
export const getCardThunk = (id) => (dispatch) => {
  console.log("dispatching get cards!", id)
  axios.get(dbURL + '/getTenCards/'+id)
       .then((response) => {
         dispatch({type: 'LOADED_CARDS', cards: response.data.cards})
       })
      .catch((err) => {
        console.log(err);
      })
}