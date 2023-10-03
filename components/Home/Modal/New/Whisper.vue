<template>
  <dialog id="new_whisper_modal" class="modal">
    <div
      class="modal-box w-11/12 md:w-6/12 lg:w-4/12 max-w-lg max-h-[450px] overflow-hidden flex flex-col gap-5 min-h-[450px]"
    >
      <h3 class="font-bold text-lg">New Whisper</h3>
      <div class="flex justify-between">
        <input
          v-model="searchName"
          type="text"
          placeholder="Recepient username or id"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <ul
        class="flex flex-col gap-3 scrollbar-accent max-h-[300px]"
        v-if="contacts.length"
      >
        <li
          class="cursor-pointer"
          v-for="(contact, i) in filteredContacts"
          :key="i"
          @click="handleClick(contact)"
        >
          <p class="text-sm">{{ contact.full_name }}</p>
          <p class="text-xs italic mt-1">@{{ contact.username }}</p>
        </li>
      </ul>
      <div
        class="flex w-full justify-center items-center flex-col gap-2 mt-16"
        v-else
      >
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/ios/150/66666E/empty-box.png"
          alt="empty-box"
        />
        <span class="text-base font-bold text-[#66666E]">No contact</span>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button></button>
    </form>
  </dialog>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      searchName: "",
      filteredContacts: [],
    };
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts/items"];
    },
  },
  methods: {
    closeModal() {
      document.getElementById("new_whisper_modal").close();
    },
    filterContacts() {
      this.filteredContacts =
        this.removeWhiteSpaces(this.searchName) === ""
          ? this.contacts
          : this.contacts.filter((contact) => {
              const normalize = (str) =>
                this.removeWhiteSpaces(str).toLowerCase();

              if (
                normalize(contact.full_name).includes(
                  normalize(this.searchName)
                ) ||
                contact.username.includes(normalize(this.searchName))
              )
                return true;
              return false;
            });
    },
    removeWhiteSpaces(str) {
      return str.replace(/\s/g, "");
    },
    handleClick(contact) {
      // search for current chat room, otherwise create new then select it
      const participants = [this.$auth.user.id, contact.id];
      let chatId =
        this.$store.getters["chats/isAnyChatByParticipants"]([...participants].sort())

      if(!chatId){
        chatId = uuidv4()
          this.$store.commit("chats/PUSH_CHAT", {
            id: chatId,
            participants,
            full_name: contact.full_name,
            time: new Date(),
            isRead: true,
            messages: []
        })
      }

      this.$store.commit("chats/SELECT_CHAT", { id: chatId });
      document.getElementById("new_whisper_modal").close()
    },
  },
  watch: {
    searchName() {
      this.filterContacts();
    },
    contacts() {
      this.filterContacts();
    },
  },
  mounted() {
    this.filterContacts();
  },
};
</script>

<style scoped>
input {
  background: transparent;
}
</style>