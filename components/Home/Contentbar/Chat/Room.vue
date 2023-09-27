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
          'chat-bubble text-sm text-white font-medium',
          message.sender === userId
            ? 'chat-bubble-primary'
            : 'chat-bubble-secondary',
        ]"
        style="max-width: 40ch"
      >
        <p class="whitespace-pre-line">{{ message.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style>
</style>