let users = [{
    userID: 1,
    login: "olgap",
    email:"olgap@gmail.com",
    password: "qwerty",
    avatarID:"https://api.multiavatar.com/Binx Bond.png",
    lastRoom:2,
    status:"active",
    rooms:[1,2]
  },{
    userID: 2,
    login: "kubasn",
    email:"kubasn@gmail.com",
    password: "12523",
    avatarID:"https://api.multiavatar.com/Binx Bond.png",
    lastRoom:4,
    status:"active",
    rooms:[1]
  }]


let rooms = [{
    roomID: 1,
    roomName:'CSS lovers',
    roomDescription:'Room made specialify for CSS lvoers group. Since 2023.',
    messageHistoryID: 1,
    users:[1,2],
    creationDate:'2023-03-28T12:00',
    messages:[{
      senderID:2,
      senderName:"kubasn",
      content:'vcvbg rwe we',
      timestamp:'2023-01-28T12:00',
      id:1
  },{
    senderID:1,
    senderName:"olgap",

    content:'qweery awdawd',
    timestamp:'2023-02-28T12:00',
    id:2},
    {
      senderID:1,
      senderName:"olgap",

      content:' bxsdfgsf ',
      timestamp:'2023-04-14T12:00',
      id:3},
  
      {
        id:4,
        senderID:1,
        senderName:"olgap",
  
        content:'awdaw ad awd awd ',
        timestamp:'2023-04-18T12:00',
        }
  
  
  
  
  
  ]
  },
  {
    roomID: 2,
    roomName:'HTML lovers',
    roomDescription:'Room made specialify for HTML lvoers group. Since 2023.',
    messageHistoryID: 2,
    users:[1],
    creationDate:'2023-04-08T12:00',
    messages:[{
      id:1,
      senderID:1,
      senderName:"olgap",

      content:'awdaw sefsef awd awd ',
      timestamp:'2023-04-05T12:00',
      id:2},{
      senderID:1,
      senderName:"olgap",

      content:' teryerty ',
      timestamp:'2023-04-6T12:00',
      id:3},{
      senderID:1,
      senderName:"olgap",

      content:'qweery xv',
      timestamp:'2023-04-12T12:00',
      id:4},{
      senderID:2,
      senderName:"kubasn",
      content:'vcvbg zxcv we',
      timestamp:'2023-04-27T12:00',
  }]
  }


]



// let messageHistoryDB = [{
//     roomID:1,
//     messages:[{
//         id:1,
//         senderID:1,
//         senderName:"olgap",
//         content:'awdaw ad awd awd ',
//         timestamp:'27/04/2023',
//         id:2},{
//         senderID:1,
//         senderName:"olgap",

//         content:' bxsdfgsf ',
//         timestamp:'17/04/2023',
//         id:3},{
//         senderID:1,
//         senderName:"olgap",

//         content:'qweery awdawd',
//         timestamp:'07/04/2023',
//         id:4},{
//         senderID:2,
//         senderName:"kubasn",
//         content:'vcvbg rwe we',
//         timestamp:'27/05/2023',
//     }]
    
    
//     },
//     {
//         roomID:2,
//         messages:[{
//             id:1,
//             senderID:1,
//             senderName:"olgap",
//             content:'awdaw ad awd awd ',
//             timestamp:'27/04/2023',
//             id:2},{
//             senderID:1,
//             senderName:"olgap",
//             content:' bxsdfgsf ',
//             timestamp:'17/04/2023',
//             id:3},{
//             senderID:1,
//             senderName:"olgap",
//             content:'qweery awdawd',
//             timestamp:'07/04/2023',
//             id:4},{
//             senderID:2,
//             content:'vcvbg rwe we',
//             timestamp:'27/05/2023',
//         }]
        
        
//         }
// ]


export {users,rooms}