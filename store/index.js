export const state = () => ({
  text: 'test'
})

export const mutations = {
  setText(state, payload){
    state.text = payload
  }
}
export const getters = {
  TEXT: s => s.text
}
