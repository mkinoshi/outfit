const LoginReducer = (state = {
  user: {},
  isLoggedIn: true,
  facebookId: ''
}, action) => {
  switch(action.type) {
    case 'GET_USER_DATA_DONE':
      return {
        ...state,
        isLoggedIn: true,
        facebookId: action.userId
      };
    case 'OPEN_LOGIN':
      return {
        ...state,
        isLoggedIn: false
      }
    case 'GET_USER_DATA_ERROR':
      return state;
    default:
      return state;
  }
}

export default LoginReducer;