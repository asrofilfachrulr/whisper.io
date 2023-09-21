<template>
  <div
    class="w-full md:w-11/12 lg:w-10/12 2xl:w-8/12 h-full md:h-4/6 lg:h-5/6 bg-zinc-800 home-container rounded-none md:rounded-xl"
    style="min-height: 600px; max-height: 800px"
  >
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 768px) {
  .home-container {
    max-height: 100% !important;
  }
}
</style>