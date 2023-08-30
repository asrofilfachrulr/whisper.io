<template>
  <div
    class="card-custom transition-all duration-700 max-w-sm bg-transparent rounded-lg shadow-md overflow-hidden"
  >
    <div class="flex h-full">
      <div class="flex-shrink-0 flex justify-center items-center ps-4">
        <img
          class="w-fit h-fit opacity-40 transition-all duration-400"
          :src="imageUrl"
          alt="Card image"
        />
      </div>
      <div class="p-6">
        <div
          class="transition-colors duration-1000 uppercase tracking-wide text-base lg:text-lg font-semibold title"
        >
          {{ cardTitle }}
        </div>
        <p
          class="mt-2 text-gray-400 text-sm transition-opacity duration-500 opacity-40 xl:text-base font-semibold body"
        >
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
.card-custom {
  cursor: default;
  box-shadow: 0px 0px 10px 0px var(--clr-accent);
  -webkit-box-shadow: 0px 0px 10px 0px var(--clr-accent);
  -moz-box-shadow: 0px 0px 10px 0px var(--clr-accent);
}

.title {
  color: var(--clr-accent-darker);
}

.card-custom:hover,
.card-custom:active {
  box-shadow: 0px 0px 10px 4px var(--clr-accent);
  -webkit-box-shadow: 0px 0px 10px 4px var(--clr-accent);
  -moz-box-shadow: 0px 0px 10px 4px var(--clr-accent);
  /* transform: scale(1.01); */
}

.card-custom:hover img,
.card-custom:hover .body {
  opacity: 1;
}

.card-custom:active img,
.card-custom:active .body {
  opacity: 1;
}

.card-custom:hover .card-title {
  color: var(--clr-accent);
}

.card-custom:active .card-title {
  color: var(--clr-accent);
}
</style>