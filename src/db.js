let users = [
  {
    userID: 1,
    login: "olgap",
    email: "olgap@gmail.com",
    password: "qwerty",
    avatarID: `https://api.multiavatar.com/Mavericat.png`,
    lastRoom: 2,
    status: "active",
    rooms: [1, 2],
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
    login: "LukasTornado42",
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
    login: "SophieMagnetik88",
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
    login: "FlorianHofmann",
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
    login: "AnaFutbolera92",
    email: "af@gmail.com",
    password: "batman123",
    avatarID: `https://api.multiavatar.com/czsw.png`,
    lastRoom: 1,
    status: "active",
    rooms: [3],
    role: "user",
  },
  {
    userID: 7,
    login: "DavidGolazo23",
    email: "dg@gmail.com",
    password: "batman123",
    avatarID: `https://api.multiavatar.com/bcfr.png`,
    lastRoom: 1,
    status: "active",
    rooms: [3],
    role: "user",
  },
  {
    userID: 8,
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
    roomDescription: "Room made specially for bundesliga league lovers. Since 2021.",
    users: [1, 2,3,4,5],
    creationDate: "2023-04-28T12:00",
    league:'bundesliga',
    messages: [
      {
        senderID: 3,
        senderName: "LukasTornado42",
        content: "Ich kann es kaum erwarten, dass das nächste Spiel beginnt! Wer denkt ihr, wird gewinnen?",
        timestamp: "2023-04-28T13:00",
        id: 1,
      },
      {
        senderID: 4,
        senderName: " SophieMagnetik88",

        content: "Bayern München hat in dieser Saison eine starke Mannschaft, aber ich würde Borussia Dortmund nicht unterschätzen",
        timestamp: "2023-04-28T14:00",
        id: 2,
      },
      {
        senderID: 5,
        senderName: "FlorianHofmann",

        content: "Stimmt, Dortmund hat einige talentierte junge Spieler. Es wird bestimmt ein spannendes Spiel!",
        timestamp: "2023-04-29T12:00",
        id: 3,
      },

      {
        senderID: 3,
        senderName: "LukasTornado42",
        content: "Habt ihr das letzte Spiel von RB Leipzig gesehen? Sie haben wirklich gut gespielt!",
        timestamp: "2023-04-29T13:00",
        id: 4,
      },
      {
        senderID: 4,
        senderName: "SophieMagnetik88",
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
    roomDescription: "Room made specially for polish league fans",
    league:'ekstraklasa',
    users: [1,2, 3],
    creationDate: "2023-04-08T12:00",
    messages: [
      {
        id: 1,
        senderID: 1,
        senderName: "olgap",
        content: "Ale ostatnio był dobry mecz",
        timestamp: "2023-04-05T12:00",
      },
      {
        id: 2,
        senderID: 1,
        senderName: "olgap",
        content: " Raków zdobył puchar polski ",
        timestamp: "2023-04-06T12:00",
      },
      {
        id: 3,
        senderID: 1,
        senderName: "olgap",
        content: "Mecz skończył się wynikiem 3:0 dla Rakowa",
        timestamp: "2023-04-12T12:00",
      },
      {
        id:4,
        senderID: 2,
        senderName: "kubasn",
        content: "W zespole Wisły było niestety dużo kontuzji",
        timestamp: "2023-04-27T12:00",
      },
    ],
  },
  {
    roomID: 3,
    roomName: "LaLiga fans",
    picture:
      "https://fastly.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY",
    roomDescription: "Room made specially for laliga league fans",
    league:'laliga',
    users: [6,7],
    creationDate: "2023-04-08T12:00",
    messages: [
      {
        id: 1,
        senderID: 6,
        senderName: "AnaFutbolera92",
        content: "¡Hola! ¿Viste los resultados de LaLiga de este fin de semana?",
        timestamp: "2023-04-05T12:00",
      },
      {
        id: 2,
        senderID: 7,
        senderName: "DavidGolazo23",
        content: "¡Hola! Sí, los estuve siguiendo de cerca. El partido entre el Barcelona y el Real Madrid fue increíble, ¿no te parece?",
        timestamp: "2023-04-06T12:00",
      },
      {
        id: 3,
        senderID: 6,
        senderName: "AnaFutbolera92",
        content: "¡Totalmente! No puedo creer que el Barcelona haya ganado 3-1. Messi y Griezmann estuvieron imparables en ese partido.",
        timestamp: "2023-04-12T12:00",
      },
      {
        id: 4,
        senderID: 7,
        senderName: "DavidGolazo23",
        content: "Sí, y no podemos olvidarnos de la gran actuación de Ter Stegen en el arco. Salvó al menos un par de goles cantados del Real Madrid.",
        timestamp: "2023-04-27T12:00",
      },
    ],
  },
];

export { users, rooms };
