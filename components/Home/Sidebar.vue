<template>
  <div
    class="flex flex-col h-full w-auto p-4 overflow-hidden relative home-sidebar"
    style="border-right: 1px solid rgb(64, 65, 66)"
  >
    <div class="upper-menu h-5/6">
      <div class="tabs sticky top-0 z-20 bg-zinc-800">
        <a
          :class="[
            'tab tab-md tab-lifted ',
            sidebarTabCurrent === 'whispers' ? 'tab-active' : '',
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
            'tab tab-md tab-lifted',
            sidebarTabCurrent === 'contacts' ? 'tab-active' : '',
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
        class="tab-content text-sm flex flex-col gap-4"
        v-if="sidebarTabCurrent === 'whispers'"
      >
        <p class="mt-2">+ New Whisper</p>
        <div v-for="i in 3" :key="i">
          <p>
            {{ dummies[i - 1].full_name }}
            <span class="text-xs text-slate-200/70 float-right">
              {{
                `${
                  dummies[i - 1].time.toLocaleTimeString("en-GB").split(":")[0]
                }:${
                  dummies[i - 1].time.toLocaleTimeString("en-GB").split(":")[1]
                }`
              }}
            </span>
          </p>
          <p class="text-xs text-slate-50/80 mt-2">
            {{ dummies[i - 1].message }}
          </p>
          <div class="divider m-0 mt-1 mb-1"></div>
        </div>
      </div>
      <div
        class="tab-content text-sm flex flex-col gap-4"
        style="max-height: 100%"
        v-else-if="sidebarTabCurrent === 'contacts'"
      >
        <a class="mt-2"
          ><svg
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
          &nbsp; New Contact</a
        >
        <div v-for="(i, k) in dummies" :key="k">
          <p class>{{ i.full_name }}</p>
          <p class="text-xs italic text-slate-200/70 mt-1">@{{ i.username }}</p>
          <div class="divider m-0 mt-1 mb-1"></div>
        </div>
      </div>
    </div>
    <div class="lower-menu h-1/6 pb-4">
      <div class="flex flex-col gap-4 justify-end h-full w-full">
        <a class="text-sm"
          ><svg
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
          &nbsp; Settings</a
        >
        <a class="text-sm"
          ><svg
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
          &nbsp; Logout</a
        >
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
          full_name: "Alice Smith",
          time: new Date("2023-09-21T12:30:00Z"),
          message: "Hello there!",
          username: "alicesmith",
        },
        {
          full_name: "Ella Davis",
          time: new Date("2023-09-21T13:15:00Z"),
          message: "I'm excited for the weekend!",
          username: "elladavis",
        },
        {
          full_name: "David Johnson",
          time: new Date("2023-09-21T14:20:00Z"),
          message: "Can you help me with this problem?",
          username: "davidj",
        },
        {
          full_name: "Sophia Kim",
          time: new Date("2023-09-21T15:45:00Z"),
          message: "Good morning, everyone!",
          username: "sophiak",
        },
        {
          full_name: "Oliver Lee",
          time: new Date("2023-09-21T16:10:00Z"),
          message: "I love the new features in the update!",
          username: "oliverl",
        },
        {
          full_name: "Emma Wilson",
          time: new Date("2023-09-21T17:25:00Z"),
          message: "Let's meet for coffee later.",
          username: "emmawilson",
        },
        {
          full_name: "Noah Brown",
          time: new Date("2023-09-21T18:00:00Z"),
          message: "Any plans for the weekend?",
          username: "noahb",
        },
        {
          full_name: "Mia Garcia",
          time: new Date("2023-09-21T19:30:00Z"),
          message: "I'm looking forward to the party!",
          username: "miag",
        },
        {
          full_name: "Lucas Martinez",
          time: new Date("2023-09-21T20:15:00Z"),
          message: "I'll be there in 10 minutes.",
          username: "lucasm",
        },
        {
          full_name: "Ava Hernandez",
          time: new Date("2023-09-21T21:05:00Z"),
          message: "What's for dinner tonight?",
          username: "avah",
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
  overflow: hidden auto;
}

.tab-lifted.tab-active:not(.tab-disabled):not([disabled]) {
  background-color: #350b48;
}

.tab-content::-webkit-scrollbar {
  width: 5px;
}

.tab-content::-webkit-scrollbar-thumb {
  background-color: #4a1461;
  border-radius: 5px;
  height: 50px !important;
}

.tab-content::-webkit-scrollbar:hover {
  width: 5px;
}

.tab-content::-webkit-scrollbar-thumb:hover {
  background-color: #5e0783;
}

.tab-content {
  scrollbar-width: thin; /* "auto" or "thin" can be used */
  scrollbar-color: #4a1461 rgba(0, 0, 0, 0); /* thumb and track color */
}

.tab-content::-webkit-scrollbar-thumb:hover {
  background-color: #5e0783;
}
</style>