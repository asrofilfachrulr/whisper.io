<template>
  <div
    class="w-full md:inline-block md:w-2/6 flex flex-col h-full overflow-hidden relative home-sidebar"
    style="border-right: 1px solid rgb(64, 65, 66)"
  >
    <div class="upper-menu h-5/6">
      <HomeSidebarTabTitle
        :sidebarTabCurrent="sidebarTabCurrent"
        @changeTabs="changeTabs"
      />
      <HomeSidebarTabWhispers
        :dummies="dummies"
        v-if="sidebarTabCurrent === 'whispers'"
      />
      <HomeSidebarTabContacts
        :dummies="dummies"
        v-else-if="sidebarTabCurrent === 'contacts'"
      />
    </div>
    <div class="lower-menu h-1/6 pb-4 bg-zinc-800 z-50 relative">
      <div class="divider m-0"></div>
      <HomeSidebarOptions :sidebarTabCurrent="sidebarTabCurrent" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarTabCurrent: "whispers",
    };
  },
  computed: {
    dummies() {
      return this.$store.state.contactDummy.contacts;
    },
  },
  methods: {
    changeTabs(current) {
      this.sidebarTabCurrent = current;
    },
  },
};
</script>

<style scoped>
.tab-content {
  padding-inline-start: 1rem;
  padding-block-start: 1rem;
  overflow: hidden scroll;
  max-height: 100%;
}

.tab-lifted.tab-active:not(.tab-disabled):not([disabled]) {
  background-color: #350b48;
}
</style>