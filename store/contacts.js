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
  PUSH_CONTACT(state, contact){
    state.items.push(contact)
  },
  SET_CONTACTS(state, contacts){
    state.items = contacts
  },

  DELETE_CONTACT_BY_ID(state, id) {
    for(let i = 0; i < state.items.length; i++)
      if(state.items[i].id === id){
        state.items.splice(i,1)
        break;
      }
  },

  _CLEAR_DATA(state) {
    state.items = [] 
  }
}

export const getters = {
  items: (state) => state.items,
  contactById: (state) => (id) => {
    for(let i = 0; i < state.items.length; i++)
      if(state.items[i].id === id)
        return state.items[i]
  },
  lastSeenById: (state) => (id) => {
    for(let i = 0; i < state.items.length; i++)
    if(state.items[i].id === id)
      return state.items[i].last_seen
  },

  // retrieve multiple values
  getValueById: (state) => (id, props) => {
    for(let i = 0; i < state.items.length; i++)
      if(state.items[i].id === id){
        const result = {}
        props.forEach((prop) => {
          result[prop] = state.items[i][prop]
        })

        return result
      }
  }
}