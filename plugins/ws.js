import io from 'socket.io-client'

const socket = io(process.env.SOCKET_IO_URL)


export default function({store}, inject){
  socket.on('connect', () => {
    console.log('[PLUGINS: INFO] CONNECTED TO SOCKET IO SERVER')
    store.commit("socket/SET_STATUS", "connected")
  })
  
  socket.on('disconnect', () => {
    console.log('[PLUGINS: INFO] DISCONNECTED FROM SOCKET IO SERVER')
    store.commit("socket/SET_STATUS", "disconnected")
  })
  inject('socket', socket)
}