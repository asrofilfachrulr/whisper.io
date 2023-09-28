const defaultEvent = {
  name: '',
  data: {},
}

export const state = () => ({
  event: defaultEvent
})

export const mutations = {
  NEW_EVENT(state, { name, data }) {
    state.event = {
      name,
      data
    }
  },
  CLEAR_EVENT(state) {
    state.event = defaultEvent
  }
}

export const getters = {
  getEventName: (state) => state.event.name
}