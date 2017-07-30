const userReducer = (state = {
  user: {},
  isLoggedIn: true,
  facebookId: ''
}, action) => {
  switch(action.type) {
    case 'GET_USER_DATA_DONE':
      return {
        ...state,
        isLoggedIn: true,
        facebookId: action.userId,
        name: action.name
      };
    case 'OPEN_LOGIN':
      return {
        ...state,
        isLoggedIn: false
      }
    case 'GET_USER_DATA_ERROR':
      return state;
    case 'LOAD_USER_DONE':
      return {
        ...state,
        user: action.data
      }
    case 'LOAD_USER_ERROR':
      return state;
    default:
      return state;
  }
}

export default userReducer;