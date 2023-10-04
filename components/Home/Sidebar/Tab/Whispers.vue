<template>
  <div class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-4">
    <div
      class="cursor-pointer"
      @click="clickChat(i)"
      v-for="(chat, i) in chats"
      :key="i"
    >
      <p :class="[!chat.isRead ? 'font-bold text-white' : 'text-slate-50/90']">
        {{ senderName(chat.id) }}
        <span
          :class="[
            'text-xs  float-right',
            !chat.isRead ? 'font-semibold text-white' : 'text-slate-200/70',
          ]"
        >
          {{
            `${chat.time.toLocaleTimeString("en-GB").split(":")[0]}:${
              chat.time.toLocaleTimeString("en-GB").split(":")[1]
            }`
          }}
        </span>
      </p>
      <p
        :class="[
          'text-xs  mt-2 text-ellipsis whitespace-nowrap overflow-hidden min-h-[16px]',
          !chat.isRead
            ? 'font-bold text-white w-10/12 inline-block'
            : 'text-slate-50/80',
        ]"
      >
        {{ chat.messages.length ? chat.messages[chat.messages.length - 1].content : '' }}
      </p>
      <span
        v-if="!chat.isRead"
        class="float-right badge badge-primary mt-1"
      ></span>
      <div class="divider m-0 mt-1 mb-1"></div>
    </div>
    <div class="spacer-vertical"></div>
  </div>
</template>

<script>
export default {
  computed: {
    chats() {
      return this.$store.getters["chats/items"];
    },
  },
  methods: {
    senderName(chatId){
      const senderId = this.$store.getters["chats/senderIdByChatId"](this.$auth.user.id, chatId)
      const sender = this.$store.getters["contacts/contactById"](senderId)
      return sender ? sender.full_name : senderId;
    },
    clickChat(idx) {
      this.$store.commit("chats/SELECT_CHAT", {
        id: this.chats[idx].id,
      });
      this.$store.commit("page/home/SET_MOBILE_CONTEXT", 'contentbar')
    },
  },
};
</script>

<style>
</style>