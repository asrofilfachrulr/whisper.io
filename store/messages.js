export const actions = {
  async fetchData({ commit }, id) {
    try {
      console.log("[FETCH] Fetching messages...")
      const response = await this.$axios.get("/messages", {
        params: {
          chatId: id
        },
      })
      if (response.status === 200) {
        console.log("[FETCH] Messages fetched...")

        let { messages } = response.data
        
        if(messages.length == 0) return

        messages = messages.map(msg => ({...msg, time: new Date(msg.time)}))
        
        commit('chats/SET_MESSAGE_BY_CHATID', { id, messages }, { root: true })
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e)
      console.log("[FETCH] Fail to fetch messages...")
      commit('page/home/NEW_ALERT', {
        data: {
          title: 'Fetch messages failed',
          description: e.data?.message || '',
        },
        type: 'error',
        show: true
      }, { root: true })
    }
  },

}