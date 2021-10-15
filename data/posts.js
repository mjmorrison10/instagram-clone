import { USERS } from "./users";

export const POSTS = [
  {
    ImageUrl: "https://i.ibb.co/182bP1y/4k.png",
    user: USERS[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "Bart Simpster",
        comment: "Wow! This build looks fire! Super excited about it!",
      },
      {
        user: "Hayley Williams",
        comment: "That is so awesome! ♥",
      },
    ],
  },
  {
    ImageUrl: "https://i.ibb.co/182bP1y/4k.png",
    user: USERS[1].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "Bart Simpster",
        comment: "Cool cool cool!",
      },
      {
        user: "Hayley Williams",
        comment: "Hey!!!! ♥",
      },
    ],
  },
];
