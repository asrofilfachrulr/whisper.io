<template>
  <div class="w-fit px-4">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-800 hover:translate-x-2 hover:translate-y-2 transition-transform duration-500"
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-violet-700">
          {{ item.title }}
        </div>
        <p class="text-gray-300 text-base">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      default: {
        title: "title",
        description: "description",
      },
    },
  },
};
</script>
