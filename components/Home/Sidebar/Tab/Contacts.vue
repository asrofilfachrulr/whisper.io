<template>
  <div class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-2">
    <div v-for="(contact, k) in contacts" :key="k">
      <p>{{ contact.full_name }}</p>
      <p class="text-xs italic text-slate-200/70">@{{ contact.username }}</p>
      <div class="divider m-0"></div>
    </div>
    <div class="spacer-vertical"></div>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters["contacts/items"];
    },
  },
};
</script>

<style>
</style>