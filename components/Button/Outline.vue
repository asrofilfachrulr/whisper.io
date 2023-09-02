<template>
  <button
    class="text-center transition-all duration-500 ease-in-out text-white px-4 py-3 rounded-md font-semibold active:bg-zinc-700"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  border: 1px solid var(--clr-accent);
  color: white;
}

button:hover,
button:active {
  box-shadow: 0px 0px 10px 3px var(--clr-accent);
  -webkit-box-shadow: 0px 0px 10px 3px var(--clr-accent);
  -moz-box-shadow: 0px 0px 10px 3px var(--clr-accent);
}
</style>