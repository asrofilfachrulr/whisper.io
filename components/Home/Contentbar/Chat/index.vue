<template>
  <div class="w-full h-full relative">
    <template v-if="chatId">
      <ChatTopbar />
      <ChatRoom :loadingState="loadingState" />
      <div
        class="absolute bottom-4 w-full flex justify-center items-center gap-4"
      >
        <textarea
          placeholder="Enter message..."
          ref="textarea_chat"
          class="textarea textarea-bordered textarea-xs w-10/12 resize-none text-base hide-scrollbar"
          style="min-height: 60px !important; height: 60px; max-height: 200px"
          v-model="textAreaChat"
          @input="textAreaDynamicHeight"
          @focus="textAreaDynamicHeight"
          @blur="textAreaDynamicHeight"
          @keypress.enter.exact="sendMessage"
        ></textarea>

        <button
          :class="[
            'btn h-5 btn-primary',
            isTextAreaEmpty()
              ? 'btn-disabled opacity-100 cursor-not-allowed'
              : '',
          ]"
          @click="sendMessage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
            />
          </svg>
        </button>
      </div>
    </template>
    <ChatEmpty v-else />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      textAreaChat: "",
      loadingState: {
        sendingMsg: false,
      },
    };
  },
  methods: {
    isTextAreaEmpty() {
      // Use a regular expression to match the entire string
      const whitespaceOrEmptyRegex = /^(\s*|)$/;

      // Test if the string only contains whitespace or is empty
      return whitespaceOrEmptyRegex.test(this.textAreaChat);
    },
    textAreaDynamicHeight() {
      this.$refs.textarea_chat.style.height = "auto";
      this.$refs.textarea_chat.style.height =
        this.$refs.textarea_chat.scrollHeight + "px";
    },
    sendMessage(event) {
      if (this.isTextAreaEmpty()) return;

      event.preventDefault();

      const recepientId = this.participants[0] !== this.$auth.user.id ? this.participants[0] : this.participants[1]
      
      const messageId = `@message-${uuidv4()}` 
      const message = {
        messageId,
        chatId: this.chatId,
        sender: this.$auth.user.id,
        recepient: recepientId,
        time: new Date(),
        content: this.textAreaChat.trimEnd(),
      };

      this.$store.commit("chats/PUSH_MESSAGE", {
        sender_id: message.sender,
        time: message.time,
        content: message.content,
        isRead: true,
        isDelivered: true,
        id: messageId,
        chat_id: this.chatId
      });

      this.textAreaChat = "";

      // trigger blur event so height of textarea is adjusted again
      // but still has the focus again after that
      this.$nextTick(() => {
        this.$refs.textarea_chat.blur();
        this.$refs.textarea_chat.focus();
      });

      this.loadingState.sendingMsg = true;
      this.$socket.emit("send-message", message, (response) => {
        console.log("[PLUGINS: INFO] Response Status Sending Message: ", response.status)
        this.loadingState.sendingMsg = false;
        console.log(response)
        if (!response.status) {
            this.$store.commit('page/home/NEW_ALERT', {
            data: {
              title: 'Send message failed',
              description: response.message || '',
            },
            type: 'error',
            show: true
          })
          this.$store.commit('chats/DELETE_MESSAGE_BY_ID_ON_SELECTED_CHAT', messageId)
        }
      });
    },
    handleEscapeKey(event) {
      if (event.keyCode === 27) this.$store.commit("chats/UNSELECT_CHAT");
    },
  },
  watch: {
    textAreaChat() {
      this.textAreaDynamicHeight();
    },
  },
  computed: {
    chatId() {
      return this.$store.getters["chats/selectedChatId"];
    },
    participants(){
      return this.$store.getters["chats/participantsByChatId"](this.chatId)
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleEscapeKey);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscapeKey);
  },
};
</script>

<style>
</style>