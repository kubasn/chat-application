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
    login: "Lukas Schneider",
    email: "ls@gmail.com",
    password: "batman123",
    avatarID: `https://api.multiavatar.com/asdt.png`,
    lastRoom: 1,
    status: "active",
    rooms: [1],
    role: "user",
  },
  {
    userID: 4,
    login: "Sophie Müller",
    email: "sm@gmail.com",
    password: "batman123",
    avatarID: `https://api.multiavatar.com/zxc.png`,
    lastRoom: 1,
    status: "active",
    rooms: [1],
    role: "user",
  },
  {
    userID: 5,
    login: "Florian Hofmann",
    email: "fh@gmail.com",
    password: "batman123",
    avatarID: `https://api.multiavatar.com/uytu.png`,
    lastRoom: 1,
    status: "active",
    rooms: [1],
    role: "user",
  },
  {
    userID: 6,
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
    roomName: "Bundesliga Fans",
    picture:
      "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
    roomDescription: "Room made specialify for CSS league group. Since 2023.",
    messageHistoryID: 1,
    users: [1, 2,3,4,5],
    creationDate: "2023-04-28T12:00",
    league:'bundesliga',
    messages: [
      {
        senderID: 2,
        senderName: "Lukas Schneider",
        content: "Ich kann es kaum erwarten, dass das nächste Spiel beginnt! Wer denkt ihr, wird gewinnen?",
        timestamp: "2023-04-28T13:00",
        id: 1,
      },
      {
        senderID: 1,
        senderName: " Sophie Müller",

        content: "Bayern München hat in dieser Saison eine starke Mannschaft, aber ich würde Borussia Dortmund nicht unterschätzen",
        timestamp: "2023-04-28T14:00",
        id: 2,
      },
      {
        senderID: 1,
        senderName: "Florian Hofmann",

        content: "Stimmt, Dortmund hat einige talentierte junge Spieler. Es wird bestimmt ein spannendes Spiel!",
        timestamp: "2023-04-29T12:00",
        id: 3,
      },

      {
        senderID: 2,
        senderName: "Lukas Schneider",
        content: "Habt ihr das letzte Spiel von RB Leipzig gesehen? Sie haben wirklich gut gespielt!",
        timestamp: "2023-04-29T13:00",
        id: 4,
      },
      {
        senderID: 1,
        senderName: "Sophie Müller",
        content: "Ja, sie haben eine beeindruckende Leistung gezeigt. Ich bin gespannt, wie sie sich im Laufe der Saison entwickeln.",
        timestamp: "2023-04-30T12:00",
        id: 6,
      },
    ],
  },
  {
    roomID: 2,
    roomName: "Ekstraklasa fans",
    picture:
      "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    roomDescription: "Room made especially for polish league fans",
    messageHistoryID: 2,
    league:'ekstraklasa',
    users: [1, 3],
    creationDate: "2023-04-08T12:00",
    messages: [
      {
        id: 1,
        senderID: 1,
        senderName: "olgap",

        content: "Ale ostatnio był dobry mecz",
        timestamp: "2023-04-05T12:00",
        id: 2,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: " Raków zdobył puchar polski ",
        timestamp: "2023-04-06T12:00",
        id: 3,
      },
      {
        senderID: 1,
        senderName: "olgap",

        content: "Mecz skończył się wynikiem 3:0 dla Rakowa",
        timestamp: "2023-04-12T12:00",
        id: 4,
      },
      {
        senderID: 2,
        senderName: "kubasn",
        content: "W zespole Wisły było niestety dużo kontuzji",
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
