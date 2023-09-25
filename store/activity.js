export const state = () => ({
  chat: {
    isSelectedAny: false,
    selectedChat: {}
  }
})

export const mutations = {
  UNSELECT_CHAT(state){
    state.chat.isSelectedAny = false
    state.chat.selectedChat = {}
  },
  SELECT_CHAT(state, selected) {
    state.chat.isSelectedAny = true
    state.chat.selectedChat = {
      id: selected.id,
      name: selected.name,
      lastSeen: selected.lastSeen,
      messages: selected.messages

    }
  }
}
export const actions = {}

export const getters = {
  chat_isSelectedAny: (state) => state.chat.isSelectedAny,
  chat: (state) => state.chat.selectedChat
}