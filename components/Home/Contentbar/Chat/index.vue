<template>
  <div class="w-full h-full relative">
    <template v-if="chatId">
      <ChatTopbar />
      <ChatRoom />
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
export default {
  data() {
    return {
      textAreaChat: "",
      isSendingMessage: false,
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

      const message = {
        sender: this.$auth.user.id,
        time: new Date(),
        content: this.textAreaChat.trimEnd(),
      };

      this.$store.commit("chats/PUSH_MESSAGE", message);

      this.textAreaChat = "";

      // hacky to trigger blur event so height of textarea is adjusted again
      // but still has the focus again
      this.$nextTick(() => {
        this.$refs.textarea_chat.blur();
        this.$refs.textarea_chat.focus();
      });

      this.$socket.emit("send-message", message);
    },
    receiveMessage() {
      this.$socket.on("receive-message", (msg) => {
        this.$store.commit("chats/PUSH_MESSAGE", {
          sender: "user-456",
          content: msg.content,
          time: msg.time,
        });
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
  },
  mounted() {
    document.addEventListener("keydown", this.handleEscapeKey);
    this.receiveMessage();
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscapeKey);
  },
};
</script>

<style>
</style>