<template>
  <div
    class="flex flex-col h-full overflow-hidden relative home-sidebar"
    style="border-right: 1px solid rgb(64, 65, 66)"
  >
    <div class="upper-menu h-5/6">
      <div class="tabs bg-zinc-800 h-14 items-center px-4">
        <a
          :class="[
            'tab tab-lifted  text-base',
            sidebarTabCurrent === 'whispers' ? 'tab-active font-semibold' : '',
          ]"
          @click="changeTabs('whispers')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
            />
          </svg>
          &nbsp; Whispers</a
        >
        <a
          :class="[
            'tab tab-lifted text-base',
            sidebarTabCurrent === 'contacts' ? 'tab-active font-semibold' : '',
          ]"
          @click="changeTabs('contacts')"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
            />
          </svg>
          &nbsp; Contacts</a
        >
      </div>
      <div
        class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-4"
        v-if="sidebarTabCurrent === 'whispers'"
      >
        <div v-for="i in 10" :key="i">
          <p
            :class="[
              !dummies[i - 1].isRead
                ? 'font-bold text-white'
                : 'text-slate-50/90',
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
                `${
                  dummies[i - 1].time.toLocaleTimeString("en-GB").split(":")[0]
                }:${
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
      <div
        class="tab-content px-4 hide-scrollbar text-sm flex flex-col gap-2"
        v-else-if="sidebarTabCurrent === 'contacts'"
      >
        <div v-for="(i, k) in dummies" :key="k">
          <p>{{ i.full_name }}</p>
          <p class="text-xs italic text-slate-200/70">@{{ i.username }}</p>
          <div class="divider m-0"></div>
        </div>
        <div class="spacer-vertical"></div>
      </div>
    </div>
    <div class="lower-menu h-1/6 pb-4 bg-zinc-800 z-50 relative">
      <div class="divider m-0"></div>
      <div class="flex flex-col gap-4 justify-end h-full w-full px-4 pb-4">
        <button class="w-fit text-sm" v-if="sidebarTabCurrent === 'whispers'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"
            />
            <path
              d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"
            />
          </svg>
          &nbsp; New Whisper
        </button>
        <button class="w-fit text-sm" v-if="sidebarTabCurrent === 'contacts'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            />
            <path
              fill-rule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          &nbsp; New Contact
        </button>
        <button class="text-sm w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-sliders2-vertical"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"
            />
          </svg>
          &nbsp; Settings
        </button>
        <button class="text-sm w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
          &nbsp; Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarTabCurrent: "whispers",
      dummies: [
        {
          full_name: "John Seo",
          time: new Date("2023-09-21T08:00:00Z"),
          message:
            "Great! I will work on it and provide you with an update by tomorrow. Thanks for your patience.",
          username: "johnseo",
          isRead: false,
        },
        {
          full_name: "Lucky Joao",
          time: new Date("2023-09-21T08:15:00Z"),
          message:
            "Hey there! What's up, bro? I hope you're doing well. It's been a while since we caught up.",
          username: "luckydraw",
          isRead: true,
        },
        {
          full_name: "Marcel Glik",
          time: new Date("2023-09-21T08:30:00Z"),
          message:
            "No, I can't make it to the meeting tomorrow. I have another commitment that I can't reschedule.",
          username: "glikcel",
          isRead: false,
        },
        {
          full_name: "Alice Smith",
          time: new Date("2023-09-21T08:45:00Z"),
          message:
            "Hello there! I hope you had a fantastic weekend. Let's catch up sometime soon!",
          username: "alicesmith",
          isRead: true,
        },
        {
          full_name: "Ella Davis",
          time: new Date("2023-09-21T09:00:00Z"),
          message:
            "I'm really looking forward to the upcoming weekend. I have some exciting plans with friends.",
          username: "elladavis",
          isRead: false,
        },
        {
          full_name: "David Johnson",
          time: new Date("2023-09-21T09:15:00Z"),
          message:
            "Sure, I'd be happy to help you with that problem. Let's schedule a time to discuss it.",
          username: "davidj",
          isRead: true,
        },
        {
          full_name: "Sophia Kim",
          time: new Date("2023-09-21T09:30:00Z"),
          message:
            "Good morning, everyone! I hope you have a productive day ahead.",
          username: "sophiak",
          isRead: false,
        },
        {
          full_name: "Oliver Lee",
          time: new Date("2023-09-21T09:45:00Z"),
          message:
            "I've been exploring the new features in the latest software update, and they are impressive!",
          username: "oliverl",
          isRead: true,
        },
        {
          full_name: "Emma Wilson",
          time: new Date("2023-09-21T10:00:00Z"),
          message:
            "Let's plan to meet for coffee later this week. What day works best for you?",
          username: "emmawilson",
          isRead: false,
        },
        {
          full_name: "Noah Brown",
          time: new Date("2023-09-21T10:15:00Z"),
          message:
            "I'm thinking of going hiking this weekend. Anyone interested in joining me?",
          username: "noahb",
          isRead: true,
        },
      ],
    };
  },
  methods: {
    changeTabs(current) {
      this.sidebarTabCurrent = current;
    },
  },
};
</script>

<style scoped>
.collapse > input,
.collapse-title {
  min-height: unset !important;
}

.tab-content {
  padding-inline-start: 1rem;
  padding-block-start: 1rem;
  overflow: hidden scroll;
  max-height: 100%;
}

.tab-lifted.tab-active:not(.tab-disabled):not([disabled]) {
  background-color: #350b48;
}

.badge-primary {
  background-color: var(--clr-accent-lighter) !important;
  border-color: var(--clr-accent-lighter) !important;
}
</style>