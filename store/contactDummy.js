import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
  contacts:[
    {
      id: uuidv4(),
      full_name: "John Seo",
      time: new Date("2023-09-21T08:00:00Z"),
      message:
        "Great! I will work on it and provide you with an update by tomorrow. Thanks for your patience.",
      username: "johnseo",
      isRead: false,
    },
    {
      id: uuidv4(),
      full_name: "Lucky Joao",
      time: new Date("2023-09-21T08:15:00Z"),
      message:
        "Hey there! What's up, bro? I hope you're doing well. It's been a while since we caught up.",
      username: "luckydraw",
      isRead: true,
    },
    {
      id: uuidv4(),
      full_name: "Marcel Glik",
      time: new Date("2023-09-21T08:30:00Z"),
      message:
        "No, I can't make it to the meeting tomorrow. I have another commitment that I can't reschedule.",
      username: "glikcel",
      isRead: false,
    },
    {
      id: uuidv4(),
      full_name: "Alice Smith",
      time: new Date("2023-09-21T08:45:00Z"),
      message:
        "Hello there! I hope you had a fantastic weekend. Let's catch up sometime soon!",
      username: "alicesmith",
      isRead: true,
    },
    {
      id: uuidv4(),
      full_name: "Ella Davis",
      time: new Date("2023-09-21T09:00:00Z"),
      message:
        "I'm really looking forward to the upcoming weekend. I have some exciting plans with friends.",
      username: "elladavis",
      isRead: false,
    },
    {
      id: uuidv4(),
      full_name: "David Johnson",
      time: new Date("2023-09-21T09:15:00Z"),
      message:
        "Sure, I'd be happy to help you with that problem. Let's schedule a time to discuss it.",
      username: "davidj",
      isRead: true,
    },
    {
      id: uuidv4(),
      full_name: "Sophia Kim",
      time: new Date("2023-09-21T09:30:00Z"),
      message:
        "Good morning, everyone! I hope you have a productive day ahead.",
      username: "sophiak",
      isRead: false,
    },
    {
      id: uuidv4(),
      full_name: "Oliver Lee",
      time: new Date("2023-09-21T09:45:00Z"),
      message:
        "I've been exploring the new features in the latest software update, and they are impressive!",
      username: "oliverl",
      isRead: true,
    },
    {
      id: uuidv4(),
      full_name: "Emma Wilson",
      time: new Date("2023-09-21T10:00:00Z"),
      message:
        "Let's plan to meet for coffee later this week. What day works best for you?",
      username: "emmawilson",
      isRead: false,
    },
    {
      id: uuidv4(),
      full_name: "Noah Brown",
      time: new Date("2023-09-21T10:15:00Z"),
      message:
        "I'm thinking of going hiking this weekend. Anyone interested in joining me?",
      username: "noahb",
      isRead: true,
    },
  ]
})

export const mutations = {
  // Define mutations to update chat data if needed
}

export const actions = {
  // Define actions to interact with the chat data if needed
}
