<template>
  <div
    class="collapse collapse-arrow bg-base-200 mb-4 border-2 border-violet-700"
  >
    <input
      type="radio"
      name="accordion"
      :checked="isChecked"
      @click="isChecked = !isChecked"
    />
    <div class="collapse-title text-base md:text-lg font-medium">
      {{ title }}
    </div>
    <div class="collapse-content">
      <p class="text-sm md:text-base text-gray-300">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
  data: function () {
    return { isChecked: false };
  },
};
</script>