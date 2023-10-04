const defaultEvent = {
  name: '',
  data: {},
}

export const state = () => ({
  event: defaultEvent,
  modalId: {
    "yesno-confirmation": 'yesno-confirmation-modal',
    "action": "action-modal"
  },
  mobileNavigation:{
    context: 'sidebar'  // only 'sidebar' or 'contentbar'
  },
  client: {
    width: 0
  }
})

export const mutations = {
  NEW_EVENT(state, event) {
    state.event = event
  },
  CLEAR_EVENT(state) {
    state.event = defaultEvent
  },

  SET_MOBILE_CONTEXT(state, ctx){
    if(ctx != 'sidebar' && ctx != 'contentbar')
      state.mobileNavigation.context = 'sidebar'  // fallback
    else state.mobileNavigation.context = ctx
  },

  SET_CLIENT_WIDTH(state, w){
    state.client.width = w
  }
}

export const getters = {
  eventName: (state) => state.event.name,
  eventData: (state) => state.event.data,
  eventCallback: (state) => state.event.callback,

  modalIdByName: (state) => (name) => state.modalId[name],

  getMobileContext: (state) => state.mobileNavigation.context,
  getClientWidth: (state) => state.client.width
}