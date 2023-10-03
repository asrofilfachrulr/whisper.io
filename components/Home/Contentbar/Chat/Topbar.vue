<template>
  <div
    class="flex flex-col justify-start w-full min-h-[65px] bg-zinc-800 relative z-50 p-4 drop-shadow-2xl py-2 flex-grow-0 basis-auto shrink"
    style="border-bottom: 1px solid #535353"
  >
    <p class="text-base font-semibold relative">
      <span
        v-if="lastSeen != 'online'"
        class="float-left badge badge-outline absolute top-1/2 left-0 h-3 w-3 p-0 -translate-x-0 -translate-y-1/2"
      ></span>
      <span
        v-else
        class="float-left badge badge-accent absolute top-1/2 left-0 h-3 w-3 p-0 -translate-x-0 -translate-y-1/2"
      ></span>
      &nbsp;&nbsp;&nbsp;&nbsp; {{ senderName }}
    </p>
    <span class="text-xs mt-1 text-slate-100/70">{{ lastSeen }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$auth.user.id;
    },
    chatId() {
      return this.$store.getters["chats/selectedChatId"];
    },
    senderName() {
      const senderId = this.$store.getters["chats/senderIdOnSelectedChat"](this.$auth.user.id)
      const sender = this.$store.getters["contacts/contactById"](senderId)
      return sender ? sender.full_name : senderId;
    },
    lastSeen() {
      const participants = this.$store.getters["chats/participantsByChatId"](
        this.chatId
      );

      const senderId =
        participants[0] !== this.userId ? participants[0] : participants[1];

      return this.$store.getters["contacts/lastSeenById"](senderId);
    },
  },
};
</script>

<style>
</style>