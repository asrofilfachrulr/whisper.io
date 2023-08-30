<template>
  <div class="flex w-full h-screen items-center justify-center">
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <!-- <h2 class="card-title">Login</h2> -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email/Username</span>
          </label>
          <input
            type="text"
            placeholder="john@doe.com"
            class="input input-bordered w-full max-w-xs text-white"
          />
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="***"
            class="input input-bordered w-full max-w-xs text-white"
          />
        </div>
        <div class="card-actions justify-end mt-8 w-full">
          <button class="btn btn-primary w-full">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: "fade",
  },
};
</script>