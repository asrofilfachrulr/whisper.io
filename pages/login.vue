<template>
  <main>
    <div
      class="flex w-full h-screen items-center justify-center relative min-h-fit"
      id="login-page-div"
    >
      <AlertGeneral
        v-if="checkMessage()"
        :class="'absolute top-8 left-auto right-auto'"
        :message="message"
        @closeAlert="resetMessage"
      />
      <div
        class="card w-full sm:w-96 text-neutral-content px-2 py-1 backdrop-blur-3xl bg-indigo-800/40 rounded-none md:rounded-md"
      >
        <div class="card-body items-center text-center">
          <div class="card-title text-center mb-4">Login to Your Account</div>
          <form class="form-control w-full max-w-xs" @submit.prevent="login">
            <label class="label">
              <span class="label-text">Email or Username</span>
            </label>
            <input
              type="text"
              class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
              v-model="identifier"
              autofocus
              required
            />
            <label class="label mt-4">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
              v-model="password"
              required
            />
            <div class="card-actions justify-end mt-8 w-full">
              <ButtonSolid :class="'btn-primary w-full'" :type="'submit'">
                Login
              </ButtonSolid>
            </div>
          </form>
          <div class="divider">OR</div>
          <span class="mx-auto w-full mt-4 text-sm">
            <NuxtLink
              to="/register"
              :class="'underline underline-offset-4 hover:text-violet-700'"
              >sign up</NuxtLink
            >
            instead</span
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  transition: {
    name: "fade",
  },
  data() {
    return {
      message: {
        content: "",
        type: "",
      },
      afterRegisMsg: {
        content: "Registration succeed, please login",
        type: "info",
      },
      identifier: "",
      password: "",
    };
  },
  head() {
    return {
      title: "Login Page",
      meta: [
        {
          hid: "Whisper.io Login Page",
          name: "Whisper.io Login Page",
          content: "Whisper.io Login Page",
        },
      ],
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.identifier,
            password: this.password,
          },
        });
      } catch (error) {
        console.log(error);
        this.setMessage(`login failed: ${error}`, "error");
      }
    },
    resetMessage() {
      this.message = {
        content: "",
        type: "",
      };
    },
    setMessage(content, type) {
      this.message = {
        content,
        type,
      };
    },
    checkMessage() {
      if (this.message.content != "" && this.message.type != "") return true;
      return false;
    },
  },
  computed: {
    registrationSuccess() {
      // Check if the 'registrationSuccess' query parameter is present
      return this.$route.query.registrationSuccess === "true";
    },
  },
  middleware: "login",
  mounted() {
    this.message = this.registrationSuccess ? this.afterRegisMsg : this.message;
  },
};
</script>

<style scoped>
#login-page-div {
  background-image: linear-gradient(135deg, #251152 10%, #241c29 100%);
}
</style>