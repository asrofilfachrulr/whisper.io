<template>
  <button class="btn rounded-md" @click="$emit('click')">
    <slot />
  </button>
</template>