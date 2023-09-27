<template>
  <div
    ref="chatroom"
    id="chatroom"
    class="flex-grow basis-auto shrink px-4 hide-scrollbar pt-2"
    style="max-height: 80%; scroll-behavior: unset"
  >
    <div
      v-for="(message, i) in messages"
      :key="i"
      :class="[
        'chat my-4',
        message.sender === userId ? 'chat-end' : 'chat-start',
      ]"
    >
      <div
        :class="[
          'chat-bubble text-sm text-white font-medium relative',
          isLastMessageAndLoading(i)
            ? ''
            : message.sender === userId
            ? 'chat-bubble-primary'
            : 'chat-bubble-secondary',
        ]"
        style="max-width: 40ch"
      >
        <span
          v-if="isLastMessageAndLoading(i)"
          :class="['loading loading-spinner loading-xs absolute bottom-2', message.sender === userId ? '-left-8' : '-right-8']"
        ></span>
        <p
          :class="[
            'whitespace-pre-line',
            isLastMessageAndLoading(i) ? 'opacity-60' : '',
          ]"
        >{{ message.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loadingState"],
  computed: {
    userId() {
      return this.$auth.user.id;
    },
    messages() {
      return this.$store.getters["chats/selectedChat"].messages;
    },
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.chatroom.scrollTop = this.$refs.chatroom.scrollHeight;
      });
    },
    isLastMessageAndLoading(i){
      return (i === this.messages.length - 1) && this.loadingState.sendingMsg
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  watch: {
    messages() {
      this.scrollToBottom();
    },
  },
};
</script>

<style></style>