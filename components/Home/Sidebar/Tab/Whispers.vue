<template>
  <div class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-4">
    <div class="cursor-pointer" @click="clickChat(i)" v-for="i in 10" :key="i">
      <p
        :class="[
          !dummies[i - 1].isRead ? 'font-bold text-white' : 'text-slate-50/90',
        ]"
      >
        {{ dummies[i - 1].full_name }}
        <span
          :class="[
            'text-xs  float-right',
            !dummies[i - 1].isRead
              ? 'font-semibold text-white'
              : 'text-slate-200/70',
          ]"
        >
          {{
            `${dummies[i - 1].time.toLocaleTimeString("en-GB").split(":")[0]}:${
              dummies[i - 1].time.toLocaleTimeString("en-GB").split(":")[1]
            }`
          }}
        </span>
      </p>
      <p
        :class="[
          'text-xs  mt-2 text-ellipsis whitespace-nowrap overflow-hidden',
          !dummies[i - 1].isRead
            ? 'font-bold text-white w-10/12 inline-block'
            : 'text-slate-50/80',
        ]"
      >
        {{ dummies[i - 1].message }}
      </p>
      <span
        v-if="!dummies[i - 1].isRead"
        class="float-right badge badge-primary mt-1"
      ></span>
      <div class="divider m-0 mt-1 mb-1"></div>
    </div>
    <div class="spacer-vertical"></div>
  </div>
</template>

<script>
export default {
  props: ["dummies"],
  methods: {
    clickChat(idx) {
      console.log("[EVENT] select chat");
      this.$store.commit("activity/SELECT_CHAT", {
        id: this.dummies[idx - 1].id,
        name: this.dummies[idx - 1].full_name,
        lastSeen: "Yesterday at 08:46",
        messages: this.$store.getters["chatDummy/messages"],
      });
    },
  },
};
</script>

<style>
</style>