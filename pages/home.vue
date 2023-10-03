<template>
  <div class="index relative">
    <ButtonOutline :class="'absolute top-4 right-4 z-30'" @click="logout">
      Logout
    </ButtonOutline>
    <main
      class="h-screen w-screen flex flex-col justify-center items-center relative"
    >
      <HomeDebugLoginfo :class="'absolute bottom-2 right-4'" />
      <button
        class="btn absolute bottom-16 right-4 hidden md:inline-flex"
        onclick="home_modal.showModal()"
      >
        Dummy Data
      </button>
      <HomeModalDummyData />
      <component v-if="homeEventName" :is="modalComponent" />
      <Home>
        <div class="h-full w-full overflow-hidden block md:flex flex-nowrap">
          <HomeSidebar :id="'home-sidebar'" />
          <HomeContentbar :id="'home-contentbar'" />
        </div>
      </Home>
    </main>
  </div>
</template>

<script>
import HomeModalNewWhisper from "../components/Home/Modal/New/Whisper";
import HomeModalNewContact from "../components/Home/Modal/New/Contact";
import ModalEmpty from "../components/Modal/Empty";
import { v4 as uuidv4 } from 'uuid';


export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "Whisper.io User Home",
          name: "Whisper.io User Home",
          content: "Whisper.io User Home",
        },
      ],
    };
  },
  data() {
    return {};
  },
  computed: {
    homeEventName() {
      return this.$store.getters["page/home/getEventName"];
    },
    modalComponent() {
      if (this.homeEventName === "new-whisper") return HomeModalNewWhisper;
      else if (this.homeEventName === "new-contact") return HomeModalNewContact;
      else return ModalEmpty;
    },
  },
  middleware: ["auth"],
  methods: {
    logout() {
      this.$auth.logout();
    },
    waitIncomingMessage() {
      console.log("[PLUGINS: INFO] Waiting for incoming message...")
      this.$socket.on("receive-message", (data) => {
        console.log("[PLUGINS: INFO] RECEIVED NEW MESSAGE: ", data)
        const participants = [this.$auth.user.id, data.sender]
        let chatId = this.$store.getters["chats/isAnyChatByParticipants"]([...participants].sort())
        const msg = {
          sender: data.sender,
          content: data.content,
          time: new Date(data.time),
        }
        if(!chatId) {
          chatId = uuidv4()
          const contact = this.$store.getters["contacts/contactById"](data.sender)
          const fullname = contact ? contact.full_name : data.sender
          this.$store.commit("chats/PUSH_CHAT", {
            id: chatId,
            participants,
            full_name: fullname,
            time: msg.time,
            isRead: false,
            messages: [
              msg
            ]
          })
        } else {
          this.$store.commit("chats/PUSH_MESSAGE_BY_ID", {id: chatId, msg});
        }
      });
    },
  },
  mounted(){
    // registering id
    this.$socket.emit('register-id', this.$auth.user.id)

    // listening to incoming message
    this.waitIncomingMessage()
  }
};
</script>