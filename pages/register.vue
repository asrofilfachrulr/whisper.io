<template>
  <div
    class="flex w-full h-screen items-center justify-center relative"
    id="login-page-div"
  >
    <div
      class="alert alert-error absolute top-8 left-auto right-auto rounded-md w-fit h-fit"
      :class="message ? 'grid' : 'hidden'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ message }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 ml-8 hover:cursor-pointer"
        @click="message = ''"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <div
      class="card w-full sm:w-96 text-neutral-content px-2 py-1 backdrop-blur-3xl bg-indigo-800/40 rounded-none md:rounded-md"
    >
      <div class="card-body items-center text-center">
        <div class="card-title text-center mb-4">Create a New Account</div>
        <div class="form-control w-full max-w-xs">
          <div class="mb-4">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
            />
          </div>
          <div class="mb-4">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
            />
          </div>
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            class="text-sm font-mono input input-bordered w-full max-w-xs text-white focus:border-2 focus:border-violet-500 rounded-md"
          />
        </div>
        <div class="card-actions justify-end mt-8 w-full">
          <button
            class="btn rounded-md btn-primary w-full"
            @click="message = 'Your password is incorrect!'"
          >
            Register
          </button>
        </div>
        <div class="divider"></div>
        <button
          class="btn rounded-md w-full justify-between bg-red-600 hover:bg-red-800 text-white"
        >
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
        </button>
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
</template>

<script>
export default {
  transition: {
    name: "fade",
  },
  data: function () {
    return { message: "" };
  },
};
</script>

<style scoped>
#login-page-div {
  background-image: linear-gradient(135deg, #251152 10%, #241c29 100%);
}
</style>