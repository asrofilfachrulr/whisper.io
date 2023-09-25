<template>
  <div class="index relative">
    <ButtonOutline :class="'absolute top-4 right-4'" @click="logout">
      Logout
    </ButtonOutline>
    <main
      class="h-screen w-screen flex flex-col justify-center items-center relative"
    >
      <span class="mb-4 absolute bottom-0 right-4 text-slate-100 italic text-sm"
        >logged as {{ $auth.user.full_name }} ({{ $auth.user.id }}) <br />
        with email: {{ $auth.user.email }}</span
      >
      <!-- Open the modal using ID.showModal() method -->
      <button
        class="btn absolute bottom-16 right-4 hidden md:inline-flex"
        onclick="home_modal.showModal()"
      >
        Dummy Data
      </button>
      <dialog id="home_modal" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Dummy Data on Vuex</h3>
          <p class="py-4">What actions you gonna do?</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn btn-error me-2" @click="clearData">
                Clear All Data
              </button>
              <button class="btn btn-primary" @click="loadDummy">
                Load Dummy
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button></button>
        </form>
      </dialog>
      <Home>
        <div class="h-full w-full overflow-hidden block md:flex flex-nowrap">
          <HomeSidebar :id="'home-sidebar'" />
          <HomeContentbar :id="'home-contentbar'" />
        </div>
      </Home>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "Whisper.io User Home",
          name: "Whisper.io User Home",
          content: "Whisper.io User Home",
        },
      ],
    };
  },
  data() {
    return {};
  },
  middleware: ["auth"],
  methods: {
    logout() {
      this.$auth.logout();
    },
    clearData() {
      console.log("[WARN] Clearing all contacts data...");
      this.$store.commit("contacts/_CLEAR_DATA");
      console.log("[WARN] Clearing all chats data...");
      this.$store.commit("chats/_CLEAR_DATA");
    },
    loadDummy() {
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

      console.log("[INFO] Load chat dummy");
      const chat = this.$store.getters["chatDummy/item"];
      console.log("[INFO] Set chat dummy to chats");
      this.$store.commit("chats/PUSH_CHAT", chat);
    },
  },
};
</script>