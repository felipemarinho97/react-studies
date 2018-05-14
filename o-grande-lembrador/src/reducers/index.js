import { ADD_LEMBRETE } from '../actions'

const criaLembrete = (text, id) => {
  return {
    text,
    id
  }
}

const lembretes = (state = [], action) => {
  switch (action.type) {
    case ADD_LEMBRETE:
      return [...state, criaLembrete(action.text, state.lenght)]
      break;
    default:
      return state;
  }

}

export default lembretes;
