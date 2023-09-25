<template>
  <div
    ref="chatroom"
    class="flex-grow basis-auto shrink px-4 hide-scrollbar pt-2"
    style="max-height: 80%; scroll-behavior: unset"
  >
    <div
      v-for="(item, i) in $store.getters['activity/chat'].messages"
      :key="i"
      :class="['chat my-4', item.sender === userId ? 'chat-end' : 'chat-start']"
    >
      <div
        :class="[
          'chat-bubble text-sm text-white font-medium',
          item.sender === userId
            ? 'chat-bubble-primary'
            : 'chat-bubble-secondary',
        ]"
        style="max-width: 40ch"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
    },
  },
  mounted() {
    this.$refs.chatroom.scrollTop = this.$refs.chatroom.scrollHeight;
  },
};
</script>

<style>
</style>