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
      <HomeContainer>
        <div class="flex h-full w-full">
          <HomeSidebar />
          <HomeContent />
        </div>
      </HomeContainer>
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
  },
};
</script>