let users = [
  {
    userID: 1,
    login: "olgap",
    email: "olgap@gmail.com",
    password: "qwerty",
    avatarID: `https://api.multiavatar.com/Mavericat.png`,
    lastRoom: 2,
    status: "active",
    rooms: [1, 2, 3],
    role: "user",
  },
  {
    userID: 2,
    login: "kubasn",
    email: "kubasn@gmail.com",
    password: "12523",
    avatarID: `https://api.multiavatar.com/Desmond.png`,
    lastRoom: 2,
    status: "active",
    rooms: [1, 2],
    role: "user",
  },
  {
    userID: 3,
    login: "marekw",
    email: "marekw@gmail.com",
    password: "batman123",
    avatarID: `https://api.multiavatar.com/Pat.png`,
    lastRoom: 1,
    status: "active",
    rooms: [1],
    role: "user",
  },
  {
    userID: 4,
    login: "admin",
    email: "admin@gmail.com",
    password: "adminadmin",
    avatarID: `https://api.multiavatar.com/Admin.png`,
    lastRoom: 1,
    status: "active",
    rooms: [1],
    role: "admin",
  },
];

let rooms = [
  {
    roomID: 1,
    roomName: "CSS lovers",
    picture:
      "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
    roomDescription: "Room made specialify for CSS lvoers group. Since 2023.",
    messageHistoryID: 1,
    users: [1, 2],
    creationDate: "2023-03-28T12:00",
    messages: [
      {
        senderID: 2,
        senderName: "kubasn",
        content: "vcvbg rwe we",
        timestamp: "2023-01-28T12:00",
        id: 1,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: "qweery awdawd",
        timestamp: "2023-02-28T12:00",
        id: 2,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: " bxsdfgsf ",
        timestamp: "2023-04-14T12:00",
        id: 3,
      },

      {
        senderID: 2,
        senderName: "kubasn",
        content: "vcvbg rwe we",
        timestamp: "2023-01-28T12:00",
        id: 4,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: "qweery awdawd",
        timestamp: "2023-02-28T12:00",
        id: 5,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: " bxsdfgsf ",
        timestamp: "2023-04-14T12:00",
        id: 6,
      },

      {
        id: 7,
        senderID: 1,
        senderName: "olgap",

        content: "awdaw ad awd awd ",
        timestamp: "2023-04-18T12:00",
      },
    ],
  },
  {
    roomID: 2,
    roomName: "HTML lovers",
    picture:
      "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    roomDescription: "Room made specialify for HTML lvoers group. Since 2023.",
    messageHistoryID: 2,
    users: [1, 3],
    creationDate: "2023-04-08T12:00",
    messages: [
      {
        id: 1,
        senderID: 1,
        senderName: "olgap",

        content: "awdaw sefsef awd awd ",
        timestamp: "2023-04-05T12:00",
        id: 2,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: " teryerty ",
        timestamp: "2023-04-06T12:00",
        id: 3,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: "qweery xv",
        timestamp: "2023-04-12T12:00",
        id: 4,
      },
      {
        senderID: 2,
        senderName: "kubasn",
        content: "vcvbg zxcv we",
        timestamp: "2023-04-27T12:00",
      },
    ],
  },
  {
    roomID: 3,
    type: "private",
    roomName: "Chat betwen users",
    picture:
      "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    roomDescription: "Private chat",
    messageHistoryID: 1,
    users: [1, 2],
    creationDate: "2023-03-28T12:00",
    messages: [
      {
        senderID: 2,
        senderName: "kubasn",
        content: "hello",
        timestamp: "2023-01-28T12:00",
        id: 1,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: "hello1",
        timestamp: "2023-02-28T12:00",
        id: 2,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: " hello2 ",
        timestamp: "2023-04-14T12:00",
        id: 3,
      },

      {
        id: 4,
        senderID: 1,
        senderName: "olgap",

        content: "hello3 ",
        timestamp: "2023-04-18T12:00",
      },
    ],
  },
];

export { users, rooms };
