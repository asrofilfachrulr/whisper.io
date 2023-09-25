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
        ></textarea>

        <button class="btn btn-primary h-5">
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
    };
  },
  methods: {
    textAreaDynamicHeight() {
      this.$refs.textarea_chat.style.height = "auto";
      this.$refs.textarea_chat.style.height =
        this.$refs.textarea_chat.scrollHeight + "px";
    },
    handleEscapeKey(event) {
      if (event.keyCode === 27) this.$store.commit("chats/UNSELECT_CHAT");
    },
  },
  computed: {
    chatId() {
      return this.$store.getters["chats/selectedChatId"];
    },
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