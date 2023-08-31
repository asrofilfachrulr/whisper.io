<template>
  <button
    class="btn rounded-md"
    style="transition: none !important"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>