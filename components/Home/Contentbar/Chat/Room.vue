<template>
  <div
    ref="chatroom"
    id="chatroom"
    class="flex-grow basis-auto shrink px-4 hide-scrollbar pt-2"
    style="max-height: 80%; scroll-behavior: unset"
  >
    <div v-for="(message, i) in messages" :key="i">
      <div v-if="isDateShown(i)" class="flex justify-center w-full">
        <div class="badge badge-neutral p-4 mx-auto my-4">
          {{ message.time.toLocaleString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'}) }}
        </div>
      </div>
      <div
        :class="[
          'chat my-6',
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
          style="max-width: 45ch; min-width: calc(2rem + 8ch);"
        >
          <span
            v-if="isLastMessageAndLoading(i)"
            :class="[
              'loading loading-spinner loading-xs absolute bottom-2',
              message.sender === userId ? '-left-8' : '-right-8',
            ]"
          ></span>
          <span
            :class="[
              'whitespace-pre-line font-medium',
              isLastMessageAndLoading(i) ? 'opacity-60' : '',
            ]"
          >{{ message.content }}
          <span
          :class="['text-[0.7rem] opacity-80 text-slate-100 font-semibold float-right']"
          >{{
            message.time
              .toLocaleTimeString("en-GB")
              .split(":")
              .splice(0, 2)
              .join(":")
          }}</span>
        </span>
        </div>
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
    isLastMessageAndLoading(i) {
      return i === this.messages.length - 1 && this.loadingState.sendingMsg;
    },
    isDateShown(i) {
      if(i == 0) return true
      const prevDate = this.messages[i-1].time.toLocaleDateString('en-GB')
      const currDate = this.messages[i].time.toLocaleDateString('en-GB')

      return prevDate !== currDate
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