<template>
  <div class="flex flex-col relative">
    <div
      class="flex flex-col justify-start w-full min-h-12 bg-zinc-800 relative z-50 p-4 drop-shadow-2xl py-2 flex-grow-0 basis-auto shrink"
      style="border-bottom: 1px solid #535353"
    >
      <p class="text-base font-semibold relative">
        <span
          class="float-left badge badge-outline absolute top-1/2 left-0 h-3 w-3 p-0 -translate-x-0 -translate-y-1/2"
        ></span>
        &nbsp;&nbsp;&nbsp;&nbsp; John Seo
      </p>
      <span class="text-xs mt-1 text-slate-100/70"
        >Last seen yesterday at 08:46</span
      >
    </div>
    <div
      class="flex-grow basis-auto shrink px-4 hide-scrollbar pt-2"
      style="max-height: 80%"
    >
      <div
        v-for="(item, i) in chat.messages"
        :key="i"
        :class="[
          'chat my-4',
          item.sender === userId ? 'chat-end' : 'chat-start',
        ]"
      >
        <div
          :class="[
            'chat-bubble text-sm text-white font-medium',
            item.sender === userId
              ? 'chat-bubble-primary'
              : 'chat-bubble-secondary',
          ]"
          style="max-width: 40ch"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-4 w-full flex justify-center items-center gap-4"
    >
      <input
        type="text"
        placeholder="Write message..."
        class="input input-bordered w-10/12 leading-6"
      />
      <button class="btn btn-primary h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-send"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "user-123",
      chat: {
        id: "chat-341231",
        participants: ["user-123", "user-456"],
        messages: [
          {
            id: "message-30182310",
            time: new Date("2023-09-22T08:00:00"),
            sender: "user-123",
            isRead: false,
            content: "Hi, how's your day going?",
          },
          {
            id: "message-30182311",
            time: new Date("2023-09-22T08:05:00"),
            sender: "user-456",
            isRead: true,
            content: "I'm doing well, thanks for asking!",
          },
          {
            id: "message-30182312",
            time: new Date("2023-09-22T08:10:00"),
            sender: "user-123",
            isRead: false,
            content: "What have you been up to lately?",
          },
          {
            id: "message-30182313",
            time: new Date("2023-09-22T08:15:00"),
            sender: "user-456",
            isRead: true,
            content: "I've been working on some exciting projects.",
          },
          {
            id: "message-30182314",
            time: new Date("2023-09-22T08:20:00"),
            sender: "user-123",
            isRead: false,
            content: "That sounds interesting! Tell me more.",
          },
          {
            id: "message-30182315",
            time: new Date("2023-09-22T08:25:00"),
            sender: "user-456",
            isRead: true,
            content: "I'm working on a new website and a mobile app.",
          },
          {
            id: "message-30182316",
            time: new Date("2023-09-22T08:30:00"),
            sender: "user-123",
            isRead: false,
            content:
              "Wow, that sounds like a lot of work. Any specific features you are adding?",
          },
          {
            id: "message-30182317",
            time: new Date("2023-09-22T08:35:00"),
            sender: "user-456",
            isRead: true,
            content:
              "Yes, I am adding real-time chat functionality to the app.",
          },
          {
            id: "message-30182318",
            time: new Date("2023-09-22T08:40:00"),
            sender: "user-123",
            isRead: false,
            content:
              "That will be really useful! When do you plan to launch it?",
          },
          {
            id: "message-30182319",
            time: new Date("2023-09-22T08:45:00"),
            sender: "user-456",
            isRead: true,
            content: "I'm aiming to launch it next month.",
          },
          {
            id: "message-30182320",
            time: new Date("2023-09-22T08:50:00"),
            sender: "user-123",
            isRead: false,
            content:
              "Great! Let me know if you need any help with testing or feedback.",
          },
          {
            id: "message-30182321",
            time: new Date("2023-09-22T08:55:00"),
            sender: "user-456",
            isRead: true,
            content: "Thanks, I'll definitely reach out for feedback.",
          },
          {
            id: "message-30182322",
            time: new Date("2023-09-22T09:00:00"),
            sender: "user-123",
            isRead: false,
            content: "How's the weather there today?",
          },
          {
            id: "message-30182323",
            time: new Date("2023-09-22T09:05:00"),
            sender: "user-456",
            isRead: true,
            content: "It's a sunny day with clear skies!",
          },
          {
            id: "message-30182324",
            time: new Date("2023-09-22T09:10:00"),
            sender: "user-123",
            isRead: false,
            content: "Lucky you! It's raining here.",
          },
          {
            id: "message-30182325",
            time: new Date("2023-09-22T09:15:00"),
            sender: "user-456",
            isRead: true,
            content: "Rainy days can be cozy too!",
          },
          {
            id: "message-30182326",
            time: new Date("2023-09-22T09:20:00"),
            sender: "user-123",
            isRead: false,
            content: "True, I do enjoy some hot tea on rainy days.",
          },
          {
            id: "message-30182327",
            time: new Date("2023-09-22T09:25:00"),
            sender: "user-456",
            isRead: true,
            content: "That sounds lovely. What kind of tea do you prefer?",
          },
          {
            id: "message-30182328",
            time: new Date("2023-09-22T09:30:00"),
            sender: "user-123",
            isRead: false,
            content: "I love chamomile tea. How about you?",
          },
          {
            id: "message-30182329",
            time: new Date("2023-09-22T09:35:00"),
            sender: "user-456",
            isRead: true,
            content: "I enjoy green tea. It's so refreshing!",
          },
          {
            id: "message-30182330",
            time: new Date("2023-09-22T09:40:00"),
            sender: "user-123",
            isRead: false,
            content:
              "Green tea is a great choice. Do you have a favorite brand?",
          },
          {
            id: "message-30182331",
            time: new Date("2023-09-22T09:45:00"),
            sender: "user-456",
            isRead: true,
            content: "I like organic brands. They feel healthier.",
          },
          {
            id: "message-30182332",
            time: new Date("2023-09-22T09:50:00"),
            sender: "user-123",
            isRead: false,
            content: "That's a good choice. It's important to stay healthy!",
          },
          {
            id: "message-30182333",
            time: new Date("2023-09-22T09:55:00"),
            sender: "user-456",
            isRead: true,
            content: "Absolutely! Regular exercise helps too.",
          },
          {
            id: "message-30182334",
            time: new Date("2023-09-22T10:00:00"),
            sender: "user-123",
            isRead: false,
            content: "I try to hit the gym whenever I can.",
          },
          {
            id: "message-30182335",
            time: new Date("2023-09-22T10:05:00"),
            sender: "user-456",
            isRead: true,
            content: "That's a great way to stay in shape!",
          },
          {
            id: "message-30182336",
            time: new Date("2023-09-22T10:10:00"),
            sender: "user-123",
            isRead: false,
            content: "Indeed, it keeps me energized too.",
          },
          {
            id: "message-30182337",
            time: new Date("2023-09-22T10:15:00"),
            sender: "user-456",
            isRead: true,
            content: "I need to get back to my workout routine as well.",
          },
          {
            id: "message-30182338",
            time: new Date("2023-09-22T10:20:00"),
            sender: "user-123",
            isRead: false,
            content: "You'll feel great once you do!",
          },
          {
            id: "message-30182339",
            time: new Date("2023-09-22T10:25:00"),
            sender: "user-456",
            isRead: true,
            content: "I hope so! Thanks for the motivation.",
          },
          {
            id: "message-30182340",
            time: new Date("2023-09-22T10:30:00"),
            sender: "user-123",
            isRead: false,
            content: "You're welcome! Keep me posted on your progress.",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>