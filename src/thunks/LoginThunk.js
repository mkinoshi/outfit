export const LoginThunk = (dispatch) => {
  Expo.Facebook.logInWithReadPermissionsAsync('788110874701317', {
        permissions: ['public_profile']
  })
  .then((data) => {
    console.log(data);
    if (data.type === 'success') {
      return fetch(`https://graph.facebook.com/me?access_token=${data.token}`)
    }
    return null;
  })
  .then((response) => response.json())
  .then((resp) => {
    console.log(resp);
    console.log(resp.name);
    dispatch({type: 'GET_USER_DATA_DONE'})
  })
  .catch((err) => {
    dispatch({type: 'GET_USER_DATA_ERROR'});
  })
}