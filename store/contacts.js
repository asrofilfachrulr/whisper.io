/*
  {
    items: [
      {
        id: '',
        full_name: '',
        username: '',
      }
    ]
  }
*/

export const state = () => ({
  items: [

  ]
})

export const mutations = {
  PUSH_CONTACT(state, contact) {
    state.items.push(contact)
  },
  SET_CONTACTS(state, contacts) {
    state.items = contacts
  },

  DELETE_CONTACT_BY_ID(state, id) {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id) {
        state.items.splice(i, 1)
        break;
      }
  },

  _CLEAR_DATA(state) {
    console.log("[WARN} Clear all contact data")
    state.items = []
  }
}

export const actions = {
  async fetchData({ commit }) {
    try {
      console.log("[FETCH] Fetching contacts...");
      const { data } = await this.$axios.get('/contacts')
      console.log("[FETCH] Contacts fetched...");
      commit('SET_CONTACTS', data.contacts)
    } catch (e) {
      console.log("[FETCH] Fail to fetch contacts...");
      commit('page/home/NEW_ALERT', {
        data: {
          title: 'Fetch Failed',
          description: e.data?.message || '',
        },
        type: 'error',
        show: true
      }, { root: true })

      console.log(e)
    }
  },

  async delete({ commit }, id) {
    try {
      console.log("[API] Deleting contact..")
      const response = await this.$axios.delete('/contact', {
        data: {
          userId: id
        }
      })
      if (response.status === 200) {
        console.log("[API] Contact deleted..")
        commit('DELETE_CONTACT_BY_ID', id)
      }
      else
        throw response
    } catch (e) {
      console.log(e)
      console.log("[API] Fail to delete contact..")
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

  async add({ commit }, contact) {
    try {
      console.log("[API] Adding contact..")
      const response = await this.$axios.post('/contact', { userId: contact.id }
      )
      if (response.status === 201) {
        console.log("[API] Contact added..")
        commit('PUSH_CONTACT', contact)
      }
      else
        throw response
    } catch (e) {
      console.log(e)
      console.log("[API] Fail to add contact..")
      commit('page/home/NEW_ALERT', {
        data: {
          title: 'Add Failed',
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
  contactById: (state) => (id) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id)
        return state.items[i]
  },
  lastSeenById: (state) => (id) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id)
        return state.items[i].last_seen
  },

  // retrieve multiple values
  getValueById: (state) => (id, props) => {
    for (let i = 0; i < state.items.length; i++)
      if (state.items[i].id === id) {
        const result = {}
        props.forEach((prop) => {
          result[prop] = state.items[i][prop]
        })

        return result
      }
  }
}