<template>
  <div class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-2">
    <div
      v-for="(contact, k) in contacts"
      :key="k"
      class="min-h-[55px] relative cursor-pointer"
      @click="handleSelectContact(contact)"
    >
      <p>{{ contact.full_name }}</p>
      <p class="text-xs italic text-slate-200/70">@{{ contact.username }}</p>
      <div class="absolute w-full h-4 bottom-0">
        <div class="divider m-0"></div>
      </div>
    </div>
    <div class="spacer-vertical"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      modalName: "action",
    };
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts/items"];
    },
    modalId() {
      return this.$store.getters["page/home/modalIdByName"](this.modalName);
    },
  },
  methods: {
    handleSelectContact(contact) {
      const openChatCallback = async () => {
        let chatId = this.$store.getters["chats/isAnyChatByParticipants"](
          [...[this.$auth.user.id, contact.id]].sort()
        );

        if (!chatId) {
          await this.$store.dispatch("chats/add", contact.id);
          chatId = this.$store.getters["chats/isAnyChatByParticipants"](
            [...[this.$auth.user.id, contact.id]].sort()
          );
        }

        this.$store.commit("chats/SELECT_CHAT", { id: chatId });
        this.$store.commit("page/home/SET_MOBILE_CONTEXT", "contentbar");
      };

      const removeContactCallback = () => {
        const modalName = "yesno-confirmation";
        const modalId =
          this.$store.getters["page/home/modalIdByName"](modalName);

        const cb = () => {
          this.$store.dispatch("contacts/delete", contact.id);
        };

        this.$store.commit("page/home/NEW_EVENT", {
          name: modalName,
          callback: cb,
          data: {
            message: `Are you sure to delete ${contact.full_name} from your contact?`,
            type: "danger",
          },
        });

        this.$nextTick(() => {
          document.getElementById(modalId).show();
        });
      };

      this.$store.commit("page/home/NEW_EVENT", {
        name: this.modalName,
        data: {
          title: "Contact Action",
          buttons: [
            {
              class: "btn-accent",
              text: "OPEN CHAT",
              callback: openChatCallback,
            },
            {
              class: "btn-error",
              text: "REMOVE",
              callback: removeContactCallback,
            },
          ],
        },
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