<template>
  <dialog id="action-modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ $store.getters["page/home/eventData"].title || 'Action Menu' }}</h3>
      <p class="py-4" v-if="$store.getters['page/home/eventData'].message">
        {{ $store.getters["page/home/eventData"].message }}
      </p>
      <div class="modal-action">
        <form method="dialog" class="gap-4 flex">
          <button
            v-for="(btn, b) in $store.getters['page/home/eventData'].buttons"
            :key="b"
            :class="['btn', btn.class]"
            @click="btn.callback"
          >
            {{ btn.text }}
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
};
</script>

<style>
</style>