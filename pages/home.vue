<template>
  <div class="index relative">
    <main class="h-screen w-screen flex flex-col justify-center items-center">
      <span class="mb-4">USER HOME PAGE</span>
      <CardPlain
        :item="{
          title: `Hello, ${$auth.user.full_name}`,
          description: `You successfuly logged with e-mail ${$auth.user.email}. 
          User-ID: ${$auth.user.id}`,
        }"
      >
      </CardPlain>
    </main>
    <ButtonOutline :class="'absolute top-4 right-4'" @click="logout">
      Logout
    </ButtonOutline>
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
  middleware: "home",
  methods: {
    logout() {
      this.$cookies.remove("jwt-token");
      this.$router.push("/");
    },
  },
};
</script>