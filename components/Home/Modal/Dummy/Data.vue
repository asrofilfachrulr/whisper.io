<template>
  <dialog id="home_modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Clear Data</h3>
      <p class="py-4">Do you want to <span class="font-semibold text-red-700">clear all data</span> right now?</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-error me-2" @click="clearData">
            Confirm
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
  },
};
</script>

<style>
</style>