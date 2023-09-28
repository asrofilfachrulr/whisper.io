<template>
  <div class="index relative">
    <ButtonOutline :class="'absolute top-4 right-4'" @click="logout">
      Logout
    </ButtonOutline>
    <main
      class="h-screen w-screen flex flex-col justify-center items-center relative"
    >
      <HomeDebugLoginfo :class="'absolute bottom-2 right-4'" />
      <button
        class="btn absolute bottom-16 right-4 hidden md:inline-flex"
        onclick="home_modal.showModal()"
      >
        Dummy Data
      </button>
      <HomeModalDummyData />
      <component v-if="homeEventName" :is="modalComponent" />
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
import HomeModalNewWhisper from "../components/Home/Modal/New/Whisper";
import HomeModalNewContact from "../components/Home/Modal/New/Contact";
import ModalEmpty from "../components/Modal/Empty";

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
  computed: {
    homeEventName() {
      return this.$store.getters["page/home/getEventName"];
    },
    modalComponent() {
      if (this.homeEventName === "new-whisper") return HomeModalNewWhisper;
      else if (this.homeEventName === "new-contact") return HomeModalNewContact;
      else return ModalEmpty;
    },
  },
  middleware: ["auth"],
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>