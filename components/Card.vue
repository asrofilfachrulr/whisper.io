<template>
  <div class="card max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
    <div class="flex">
      <div class="flex-shrink-0 flex justify-center items-center">
        <img class="w-fit h-fit ps-4" :src="imageUrl" alt="Card image" />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-violet-600 font-semibold"
        >
          {{ cardTitle }}
        </div>
        <p class="mt-2 text-gray-500">
          {{ cardBody }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      default: "https://placehold.co/150",
    },
    cardTitle: {
      default: "title",
    },
    cardBody: {
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat",
    },
  },
};
</script>

<style scoped>
.card {
  cursor: default;
}
</style>