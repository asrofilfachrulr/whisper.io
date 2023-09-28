<template>
  <dialog id="home_modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Dummy Data on Vuex</h3>
      <p class="py-4">What actions you gonna do?</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-error me-2" @click="clearData">
            Clear All Data
          </button>
          <button class="btn btn-primary" @click="loadChatDummy">
            Load Chat Dummy
          </button>
          <button class="btn btn-primary" @click="loadContactDummy">
            Load Contact Dummy
          </button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button></button>
    </form>
  </dialog>
</template>

<script>
export default {
  methods: {
    clearData() {
      console.log("[WARN] Clearing all contacts data...");
      this.$store.commit("contacts/_CLEAR_DATA");
      console.log("[WARN] Clearing all chats data...");
      this.$store.commit("chats/_CLEAR_DATA");
    },
    loadContactDummy() {
      console.log("[INFO] Load contact dummy");
      const contacts = this.$store.getters["contactDummy/items"];
      console.log("[INFO] Set contact dummy to contacts");
      this.$store.commit(
        "contacts/SET_CONTACTS",
        contacts.map((contact) => ({
          id: contact.id,
          full_name: contact.full_name,
          last_seen: "online",
          username: contact.username,
        }))
      );
    },
    loadChatDummy() {
      this.loadContactDummy();
      console.log("[INFO] Load chat dummy");
      const chat = this.$store.getters["chatDummy/item"];
      console.log("[INFO] Set chat dummy to chats");
      this.$store.commit("chats/PUSH_CHAT", chat);
    },
  },
};
</script>

<style>
</style>