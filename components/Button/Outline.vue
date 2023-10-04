<template>
  <button
    class="text-center transition-all duration-500 ease-in-out text-white px-4 py-3 rounded-md font-semibold active:bg-zinc-700 btn-outline btn"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>