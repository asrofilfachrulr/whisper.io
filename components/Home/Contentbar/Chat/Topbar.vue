<template>
  <div
    class="flex flex-col justify-start w-full min-h-12 bg-zinc-800 relative z-50 p-4 drop-shadow-2xl py-2 flex-grow-0 basis-auto shrink"
    style="border-bottom: 1px solid #535353"
  >
    <p class="text-base font-semibold relative">
      <span
        class="float-left badge badge-outline absolute top-1/2 left-0 h-3 w-3 p-0 -translate-x-0 -translate-y-1/2"
      ></span>
      &nbsp;&nbsp;&nbsp;&nbsp; {{ chat.name }}
    </p>
    <span class="text-xs mt-1 text-slate-100/70">{{ chat.lastSeen }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    chat() {
      return this.$store.getters["activity/chat"];
    },
  },
};
</script>

<style>
</style>