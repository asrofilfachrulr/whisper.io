export const state = () => ({
  status: 'disconnected' // default
})

export const mutations = {
  SET_STATUS(state, status){
    state.status = status
  }
}

export const getters = {
  status: (state) => state.status
}