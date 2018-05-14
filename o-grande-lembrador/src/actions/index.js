export const ADD_LEMBRETE = 'ADD_LEMBRETE';

const addLembrete = (lembrete) => {
  return {
    type: ADD_LEMBRETE,
    lembrete
  }
}
