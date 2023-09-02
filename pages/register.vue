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
          <div class="card-title text-center mb-4">Create a New Account</div>
          <form class="form-control w-full max-w-xs" @submit.prevent="register">
            <div class="mb-4">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
                required
                autofocus
                v-model="email"
              />
            </div>
            <div class="mb-4">
              <label class="label">
                <span class="label-text">Full Name</span>
              </label>
              <input
                type="text"
                class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
                required
                v-model="fullName"
              />
            </div>
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
              required
              v-model="password"
            />
            <div class="card-actions justify-end mt-8 w-full">
              <ButtonSolid :class="'btn-primary w-full'" :type="'submit'"
                >Register</ButtonSolid
              >
            </div>
          </form>
          <div class="divider">OR</div>
          <!-- <ButtonSolid :class="'bg-red-600 hover:bg-red-800 text-white w-full'">
            <div class="inline-flex justify-between w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-google flex-shrink-0"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                />
              </svg>
              <span class="flex-grow">Register with Google</span>
            </div>
          </ButtonSolid> -->
          <span class="mx-auto w-full mt-4 text-sm">
            <NuxtLink
              to="/login"
              :class="'underline underline-offset-4 hover:text-violet-700'"
              >login</NuxtLink
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
      email: "",
      fullName: "",
      password: "",
    };
  },
  head() {
    return {
      title: "Register",
      meta: [
        {
          hid: "Whisper.io Register New User",
          name: "Whisper.io Register New User",
          content: "Whisper.io Register New User",
        },
      ],
    };
  },
  methods: {
    async register() {
      try {
        console.log("registering..");
        const response = await this.$axios.post("/register", {
          email: this.email,
          full_name: this.fullName,
          password: this.password,
        });

        console.log("response register: ", response);

        // After successful registration
        this.$router.push({
          path: "/login",
          query: { registrationSuccess: true },
        });
      } catch (error) {
        this.setMessage(`registing failed: ${error}`, "error");
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
  middleware: "login",
};
</script>

<style scoped>
#login-page-div {
  background-image: linear-gradient(135deg, #251152 10%, #241c29 100%);
}
</style>