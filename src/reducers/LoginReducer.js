const LoginReducer = (state = {
  user: {},
  isLoggedIn: false
}, action) => {
  switch(action.type) {
    case 'GET_USER_DATA_DONE':
      return state;
    case 'GET_USER_DATA_ERROR':
      return state;
    default:
      return state;
  }
}

export default LoginReducer;
