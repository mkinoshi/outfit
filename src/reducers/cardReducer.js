const cardReducer = (state = {
  cards: [],
  currentCard: 0
}, action) => {
  switch(action.type) {
    case 'LOADED_CARDS':
      return {
        ...state,
        cards: state.cards.concat(action.cards)
      }
    case 'INCREMENT_CARD':
      return {
        ...state,
        currentCard: state.currentCard + 1
      }
    default:
      return state
  }
}

export default cardReducer;