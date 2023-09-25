// store/chat.js

export const state = () => ({
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
})

export const getters = {
  messages: (state) => state.messages
}

export const mutations = {
  // Define mutations to update chat data if needed
}

export const actions = {
  // Define actions to interact with the chat data if needed
}
