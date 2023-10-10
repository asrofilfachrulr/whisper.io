const defaultEvent = {
  name: '',
  data: {},
}

const defaultAlert = {
  data: {},
  type: '', // info - success - warning - error
  show: false,
}

const defaultLoading = {
  status: false,
  text: 'loading'
}

export const state = () => ({
  event: defaultEvent,
  modalId: {
    "yesno-confirmation": 'yesno-confirmation-modal',
    "action": "action-modal"
  },
  mobileNavigation: {
    context: 'sidebar'  // only 'sidebar' or 'contentbar'
  },
  client: {
    width: 0
  },
  alert: defaultAlert,
  loading: defaultLoading
})

export const mutations = {
  NEW_EVENT(state, event) {
    state.event = event
  },
  CLEAR_EVENT(state) {
    state.event = defaultEvent
  },

  NEW_ALERT(state, alert) {
    state.alert = alert
    console.log("[INFO] An Alert has been created")
  },
  CLEAR_ALERT(state) {
    state.alert = defaultAlert
  },

  NEW_LOADING(state, loading) {
    state.loading = loading
  },
  SET_LOADING_TEXT(state, text){
    state.loading.text = text
  },
  CLEAR_LOADING(state) {
    state.loading = defaultLoading
  },

  SET_MOBILE_CONTEXT(state, ctx) {
    if (ctx != 'sidebar' && ctx != 'contentbar')
      state.mobileNavigation.context = 'sidebar'  // fallback
    else state.mobileNavigation.context = ctx
  },

  SET_CLIENT_WIDTH(state, w) {
    state.client.width = w
  }
}

export const getters = {
  eventName: (state) => state.event.name,
  eventData: (state) => state.event.data,
  eventCallback: (state) => state.event.callback,

  alertType: (state) => state.alert.type,
  alertData: (state) => state.alert.data,
  alertShow: (state) => state.alert.show,

  isLoading: (state) => state.loading.status,
  loadingText: (state) => state.loading.text,

  modalIdByName: (state) => (name) => state.modalId[name],

  getMobileContext: (state) => state.mobileNavigation.context,
  getClientWidth: (state) => state.client.width
}

export const namespaced = true