<template>
  <dialog id="yesno-confirmation-modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Confirmation</h3>
      <p class="py-4">
        {{ $store.getters["page/home/eventData"]?.message || "Are you sure?" }}
      </p>
      <div class="modal-action">
        <form method="dialog" class="gap-4 flex">
          <button class="btn btn-outline">Cancel</button>
          <button :class="['btn btn-accent', $store.getters['page/home/eventData']?.type === 'danger' ? 'btn-error' : '']" @click="handleAction">
            {{ $store.getters["page/home/eventData"]?.action || "Yes" }}
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
    handleAction(){
      this.$store.getters['page/home/eventCallback']()
    }
  }
};
</script>

<style>
</style>