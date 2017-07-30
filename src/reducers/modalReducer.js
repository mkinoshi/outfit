const modalReducer = (state = {
  isModalOpen: false
}, action) => {
  switch(action.type) {
    case 'OPEN_FIRST_MODAL':
      return {
        ...state,
        isModalOpen: true
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false
      }
    default:
      return state;
  }
}

export default modalReducer;