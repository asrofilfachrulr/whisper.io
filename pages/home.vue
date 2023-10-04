<template>
  <div class="index relative">
    <main
      class="h-screen w-screen flex flex-col justify-center items-center relative"
    >
      <HomeDebugLoginfo v-if="clientWidth >= 768" :class="'absolute bottom-2 right-4'" />
      <button v-if="!isDebugging"
        class="btn absolute bottom-16 right-4 hidden md:inline-flex"
        onclick="home_modal.showModal()"
      >
        Clear Data
      </button>
      <HomeModalDummyData />
      <component v-if="homeEventName" :is="modalComponent" />
      <Home>
        <div v-if="clientWidth >= 768" class="h-full w-full overflow-hidden block md:flex flex-nowrap">
          <HomeSidebar :id="'home-sidebar'" />
          <HomeContentbar :id="'home-contentbar'" />
        </div>
        <div v-else class="h-full w-full overflow-hidden block md:flex flex-nowrap">
          <HomeSidebar v-if="mobileContext === 'sidebar'" :id="'home-sidebar'" />
          <HomeContentbar v-else-if="mobileContext === 'contentbar'" :id="'home-contentbar'" />
        </div>
      </Home>
    </main>
  </div>
</template>

<script>
import HomeModalNewWhisper from "../components/Home/Modal/New/Whisper";
import HomeModalNewContact from "../components/Home/Modal/New/Contact";
import HomeModalConfirmationYesNo from "../components/Home/Modal/Confirmation/YesNo";
import HomeModalAction from "../components/Home/Modal/Action"
import ModalEmpty from "../components/Modal/Empty";
import { v4 as uuidv4 } from "uuid";

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
    return {
    
    };
  },
  computed: {
    chatId(){
      return this.$store.getters["chats/selectedChatId"]
    },
    mobileContext() {
      return this.$store.getters["page/home/getMobileContext"]
    },

    clientWidth(){
      return this.$store.getters["page/home/getClientWidth"]
    },

    homeEventName() {
      return this.$store.getters["page/home/eventName"];
    },
    modalComponent() {
      switch(this.homeEventName){
        case "new-whisper": return HomeModalNewWhisper;
        case "new-contact": return HomeModalNewContact;
        case "yesno-confirmation": return HomeModalConfirmationYesNo;
        case "action" : return HomeModalAction;
        default: return ModalEmpty;
      }
    },
    socketStatus() {
      return this.$store.getters["socket/status"];
    },
    isDebugging(){
      return this.$route.query.debug
    },
  },
  watch: {
    socketStatus(newVal, oldVal) {
      console.log(
        `[PLUGINS: INFO] Socket Status Change: ${oldVal} => ${newVal}`
      );
      if (newVal === "connected" && oldVal === "disconnected")
        this.registerId();
    },
  },
  middleware: ["auth"],
  methods: {
    setupSocketForChat() {
      this.registerId();
      this.waitIncomingMessage();
    },
    waitIncomingMessage() {
      console.log("[PLUGINS: INFO] Waiting for incoming message...");
      this.$socket.on("receive-message", (data) => {
        console.log("[PLUGINS: INFO] RECEIVED NEW MESSAGE: ", data);
        const participants = [this.$auth.user.id, data.sender];
        let chatId = this.$store.getters["chats/isAnyChatByParticipants"](
          [...participants].sort()
        );
        const msg = {
          sender: data.sender,
          content: data.content,
          time: new Date(data.time),
        };
        if (!chatId) {
          chatId = uuidv4();
          this.$store.commit("chats/PUSH_CHAT", {
            id: chatId,
            participants,
            time: msg.time,
            isRead: false,
            messages: [msg],
          });
        } else {
          this.$store.commit("chats/PUSH_MESSAGE_BY_ID", { id: chatId, msg });
        }
      });
    },
    registerId() {
      console.log("[PLUGINS: INFO] Registering id to create room");
      this.$socket.emit("register-id", this.$auth.user.id);
    },
    loadContactDummy() {
      console.log("[INFO] Load contact dummy");
      const contacts = this.$store.getters["contactDummy/items"];
      console.log("[INFO] Set contact dummy to contacts");
      this.$store.commit(
        "contacts/SET_CONTACTS",
        contacts.map((contact) => ({
          id: contact.id,
          full_name: contact.full_name,
          last_seen: "online",
          username: contact.username,
        }))
      );
    },
    loadChatDummy() {
      this.loadContactDummy();
      console.log("[INFO] Load chat dummy");
      const chat = this.$store.getters["chatDummy/item"];
      console.log("[INFO] Set chat dummy to chats");
      this.$store.commit("chats/PUSH_CHAT", chat);
    },
    updateInnerWidth(){
      this.$store.commit("page/home/SET_CLIENT_WIDTH", window.innerWidth)
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateInnerWidth);
    this.setupSocketForChat();
    
    if(this.isDebugging){
      this.$store.commit("contacts/_CLEAR_DATA");
      this.$store.commit("chats/_CLEAR_DATA");

      this.loadContactDummy()
      this.loadChatDummy()
    }

    console.log("[DEBUG] initial Window innerWidth: ", window.innerWidth)
    this.$store.commit("page/home/SET_CLIENT_WIDTH", window.innerWidth)
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.updateInnerWidth);
  }
};
</script>