const users = [
  {
    userID: 1,
    login: "olgap",
    email: "olgap@gmail.com",
    password: "qwerty",
    avatarID: "https://api.multiavatar.com/Binx Bond.png",
    lastRoom: 2,
    status: "active",
    rooms: [1, 2],
  },
  {
    userID: 2,
    login: "kubasn",
    email: "kubasn@gmail.com",
    password: "12523",
    avatarID: "https://api.multiavatar.com/Binx Bond.png",
    lastRoom: 4,
    status: "active",
    rooms: [1],
  },
];
const rooms = [
  {
    roomID: 1,
    roomName: "CSS lovers",
    roomDescription: "Room made specialify for CSS lvoers group. Since 2023.",
    messageHistoryID: 1,
    users: [1, 2],
    creationDate: "03/04/2023",
  },
  {
    roomID: 2,
    roomName: "HTML lovers",
    roomDescription: "Room made specialify for HTML lvoers group. Since 2023.",
    messageHistoryID: 2,
    users: [1, 5, 4],
    creationDate: "03/04/2023",
  },
];

const messageHistoryDB = [
  {
    roomID: 1,
    messages: [
      {
        id: 1,
        senderID: 1,
        content: "awdaw ad awd awd ",
        timestamp: "27/04/2023",
        id: 2,
      },
      {
        senderID: 1,
        content: " bxsdfgsf ",
        timestamp: "17/04/2023",
        id: 3,
      },
      {
        senderID: 1,
        content: "qweery awdawd",
        timestamp: "07/04/2023",
        id: 4,
      },
      {
        senderID: 2,
        content: "vcvbg rwe we",
        timestamp: "27/05/2023",
      },
    ],
  },
  {
    roomID: 2,
    messages: [
      {
        id: 1,
        senderID: 1,
        content: "awdaw ad awd awd ",
        timestamp: "27/04/2023",
        id: 2,
      },
      {
        senderID: 1,
        content: " bxsdfgsf ",
        timestamp: "17/04/2023",
        id: 3,
      },
      {
        senderID: 1,
        content: "qweery awdawd",
        timestamp: "07/04/2023",
        id: 4,
      },
      {
        senderID: 2,
        content: "vcvbg rwe we",
        timestamp: "27/05/2023",
      },
    ],
  },
];
export { users, rooms, messageHistoryDB };
