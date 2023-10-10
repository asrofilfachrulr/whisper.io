<template>
  <div
    class="flex justify-between w-full min-h-[65px] bg-zinc-800 relative z-30 p-4 drop-shadow-2xl py-2 flex-grow-0 basis-auto shrink"
    style="border-bottom: 1px solid #535353"
  >
    <div class="left flex justify-start">
      <button v-if="clientWidth < 768" class="w-10 h-full px-2" @click="$store.commit('page/home/SET_MOBILE_CONTEXT', 'sidebar')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-short w-full h-full"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </button>
      <div class="flex flex-col items-start">
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
    </div>
    <div class="flex justify-end">
      <button
        v-if="isContactExist && clientWidth >= 768"
        @click="handleAddContact"
        class="btn btn-link text-violet-600"
        style="text-decoration: none"
      >
        <span> Add to contact </span>
      </button>
      <ButtonSolid :class="'btn-error'" @click="handleRemoveChat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
          />
          <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
          />
        </svg>
      </ButtonSolid>
    </div>
    <button
      v-if="isContactExist && clientWidth < 768"
      @click="handleAddContact"
      class="btn btn-link w-full absolute bg-violet-900 left-0 rounded-none"
      style="text-decoration: none; color: white; bottom: -48px"
    >
      <span> Add to contact </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalName: "yesno-confirmation",
    };
  },
  computed: {
    userId() {
      return this.$auth.user.id;
    },
    chatId() {
      return this.$store.getters["chats/selectedChatId"];
    },
    clientWidth() {
      return this.$store.getters["page/home/getClientWidth"];
    },
    senderId() {
      return this.$store.getters["chats/senderIdOnSelectedChat"](this.userId);
    },
    senderName() {
      const sender = this.$store.getters["contacts/contactById"](this.senderId);
      return sender ? sender.full_name : this.senderId;
    },
    lastSeen() {
      return (
        this.$store.getters["contacts/lastSeenById"](this.senderId) || "online"
      );
    },
    isContactExist() {
      return this.senderName === this.senderId;
    },
    modalId() {
      return this.$store.getters["page/home/modalIdByName"](this.modalName);
    },
  },
  methods: {
    async handleAddContact() {
      let user;
      try {
        const response = await this.$axios.get(`user/public/${this.senderId}`);
        if (!response.data.user) throw "response invalid";

        user = response.data.user;

        if (!user.id || !user.full_name || !user.username)
          throw "incomplete data";
      } catch (e) {
        return;
      }

      const cb = () => {
        const contact = {
          id: this.senderId,
          username: user.username,
          full_name: user.full_name,
        };

        this.$store.dispatch("contacts/add", contact);

        this.$store.commit("page/home/CLEAR_EVENT");
      };

      this.$store.commit("page/home/NEW_EVENT", {
        name: this.modalName,
        data: {
          action: "Add",
          message: "Are you sure to add this contact?",
        },
        callback: cb,
      });

      this.$nextTick(() => {
        document.getElementById(this.modalId).show();
      });
    },

    async handleRemoveChat() {
      const cb = async () => {
        await this.$store.dispatch("chats/delete", this.chatId);

        this.$store.commit("page/home/CLEAR_EVENT");
      };

      this.$store.commit("page/home/NEW_EVENT", {
        name: this.modalName,
        data: {
          message: "Are you sure to remove this chat?",
          action: "Remove",
          type: "danger",
        },
        callback: cb,
      });

      this.$nextTick(() => {
        document.getElementById(this.modalId).show();
      });
    },
  },
};
</script>

<style>
</style>