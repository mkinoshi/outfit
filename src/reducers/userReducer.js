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
    case 'LOG_OUT':
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
    case 'UPDATE_HISTORY':   
      return {
        ...state,
        user: {
          ...state.user,
          history: state.user.history.concat([action.card])
        }
      }
    case 'UPDATE_MY_POSTS':
      return {
        ...state,
        user: {
          ...state.user,
          myCards: state.user.myCards.concat([action.card])
        }
      }
    default:
      return state;
  }
}

export default userReducer;