<template>
  <div class="flex flex-wrap justify-center items-center gap-8">
    <div
      v-for="(item, index) in gridItems"
      :key="index"
      class="w-full md:w-1/3 px-4"
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-800">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-violet-700">
            {{ item.title }}
          </div>
          <p class="text-gray-300 text-base">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gridItems: {
      default: [
        {
          title: "title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.",
        },
        {
          title: "title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.",
        },
        {
          title: "title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.",
        },
      ],
    },
  },
};
</script>
