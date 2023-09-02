<template>
  <div
    class="alert rounded-md w-10/12 text-sm sm:text-base h-fit sm:w-96 md:h-fit z-50 grid"
    :class="`alert-${message.type}`"
    style="grid-template-columns: 1fr 10fr 1fr"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{{ message.content }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 ml-8 hover:cursor-pointer"
      @click="$emit('closeAlert')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>