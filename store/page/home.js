const defaultEvent = {
  name: '',
  data: {},
}

export const state = () => ({
  event: defaultEvent,
  modalId: {
    "yesno-confirmation": 'yesno-confirmation-modal',
    "action": "action-modal"
  }
})

export const mutations = {
  NEW_EVENT(state, event) {
    state.event = event
  },
  CLEAR_EVENT(state) {
    state.event = defaultEvent
  }
}

export const getters = {
  eventName: (state) => state.event.name,
  eventData: (state) => state.event.data,
  eventCallback: (state) => state.event.callback,

  modalIdByName: (state) => (name) => state.modalId[name]
}