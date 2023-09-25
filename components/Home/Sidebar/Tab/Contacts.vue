<template>
  <div class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-2">
    <div v-for="(i, k) in dummies" :key="k">
      <p>{{ i.full_name }}</p>
      <p class="text-xs italic text-slate-200/70">@{{ i.username }}</p>
      <div class="divider m-0"></div>
    </div>
    <div class="spacer-vertical"></div>
  </div>
</template>

<script>
export default {
  props: ["dummies"],
};
</script>

<style>
</style>