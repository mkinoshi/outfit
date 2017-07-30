import axios from 'axios';
const dbURL = 'https://vast-beach-20437.herokuapp.com';
// const dbURL = 'http://localhost:3000';
export const getVoteThunk = (cardId, userId, vote) => (dispatch) => {
  console.log("dispatching vote", cardId, userId, vote)
  axios.post(dbURL + '/vote', {
          cardId: cardId,
          userId: userId,
          vote: vote
        })
       .then((response) => {
         console.log("here are cards");
         console.log(response.data.card);
         dispatch({type: 'UPDATE_HISTORY', card: response.data.card})
         dispatch({type: 'INCREMENT_CARD'})
       })
      .catch((err) => {
        console.log(err);
      })
}