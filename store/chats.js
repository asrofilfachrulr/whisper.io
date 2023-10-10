/*
  items: [
    { 
      id: '',                   ==> id chat room
      participants: ['', ''],   ==> private msg, each ids of user
      time: Date Obj,           ==> last chat time
      isRead: true,
      messages: [
        {
          sender: '',           ==> sender user id
          content: '',
          time: Date Obj
        }
      ]
    },
    ...
  ],
  selectedChatId                ==> id of selected chat room
*/

import isEqual from 'lodash/isEqual'

export const state = () => ({
  items: [],
  selectedChatId: '',
})

export const mutations = {
  // new chat also with the message(s)
  PUSH_CHAT(state, chat) {
    if(state.items.some(item => item.id === chat.id)) return

    state.items.push(chat)
  },

  // push message to current selected chat
  PUSH_MESSAGE(state, msg) {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === state.selectedChatId) {
        state.items[i].messages.push(msg)
        break
      }
  },

  // push message to existing chat by chat id
  PUSH_MESSAGE_BY_ID(state, { id, msg }) {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id) {
        state.items[i].messages.push(msg)
        break
      }
  },

  SET_MESSAGE_BY_CHATID(state, { id, messages }) {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id) {
        state.items[i].messages = messages
        break
      }
  },

  UNSELECT_CHAT(state) {
    state.selectedChatId = ''
  },
  SELECT_CHAT(state, { id }) {
    state.selectedChatId = id
  },

  // Ensure to unselect chat first!
  DELETE_SELECTED_CHAT(state){
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === state.selectedChatId) {
        state.items.splice(i,1)
        state.selectedChatId = ''
        break
      }
  },

  DELETE_MESSAGE_BY_ID_ON_SELECTED_CHAT(state, id){
    for (let i = 0; i < state.items.length; i++){
      if (state.items[i].id === state.selectedChatId) {
        for(let j = state.items[i].messages.length - 1; j >= 0; j--){
          if(state.items[i].messages[j].id === id){
            state.items[i].messages.splice(j,1)
            break
          }
        }
        break
      }
    }
  },

  _CLEAR_DATA(state) {
    state.items = []
    state.selectedChatId = ''
  },
}

export const actions = {
  async fetchData({commit}) {
    try {
      console.log("[FETCH] Fetching chats...")
      const response = await this.$axios.get("/chats")
      if(response.status === 200){
        console.log("[FETCH] Chats fetched...")
        const {chats} = response.data
        chats.forEach(chat => {
          commit('PUSH_CHAT', chat)
        })
      } else {
        throw response;
      }
    } catch(e) {
      console.log("[FETCH] Fail to fetch chats...")
      commit('page/home/NEW_ALERT', {
        data: {
          title: 'Fetch chats failed',
          description: e.data?.message || '',
        },
        type: 'error',
        show: true
      }, { root: true })      
    }
  },

  async delete({commit}, id) {
    try {
      console.log("[API] delete chat...")
      const response = await this.$axios.delete("/chat", {
        data: {
          chatId:id
        }
      })

      if(response.status === 200){
        console.log("[API] chat deleted...")
        commit("DELETE_SELECTED_CHAT")
      } else 
        throw response
    } catch(e) {
      console.log("[API] fail to delete chat...")
      commit('page/home/NEW_ALERT', {
        data: {
          title: 'Delete Failed',
          description: e.data?.message || '',
        },
        type: 'error',
        show: true
      }, { root: true })
    }
  },

  async add({commit}, id) {
    try {
      console.log("[API] adding chat...")
      const response = await this.$axios.post("/chat", {
        participantId: id
      })
      if(response.status === 201){
        console.log("[API] chat added...")
        const {chat} = response.data
        commit("PUSH_CHAT", chat)
      } else 
        throw response
    } catch (e) {
      console.log("[API] fail to add chat...")
      commit('page/home/NEW_ALERT', {
        data: {
          title: 'New Chat Failed',
          description: e.data?.message || '',
        },
        type: 'error',
        show: true
      }, { root: true })
    }
  }
}

export const getters = {
  items: (state) => state.items,

  fullNameByChatId: (state) => (id) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id)
        return state.items[i].full_name
  },

  participantsByChatId: (state) => (id) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id)
        return state.items[i].participants
  },

  senderIdOnSelectedChat: (state) => (userId) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === state.selectedChatId){
        const participants = state.items[i].participants
        return participants[0] !== userId ? participants[0] : participants[1]
      }
  },

  senderIdByChatId: (state) => (userId, chatId) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === chatId){
        const participants = state.items[i].participants
        return participants[0] !== userId ? participants[0] : participants[1]
      }
  },

  selectedChatId: (state) => state.selectedChatId,

  chatById: (state) => (id) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id)
        return state.items[i]
  },

  selectedChat: (state) => {
    if (!state.selectedChatId) return {}

    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === state.selectedChatId)
        return state.items[i]
  },
  isAnyChatByParticipants: (state) => (participants) => {
    for(let i = 0; i < state.items.length; i++) {
      const chat = state.items[i]

      if (isEqual([...chat.participants].sort(), participants)) return chat.id
    }
    return null
  }
}