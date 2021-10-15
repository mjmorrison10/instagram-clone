import { USERS } from "./users";

export const POSTS = [
  {
    ImageUrl: "https://onlyibizaboatparty.com/img/clubberPack.jpg",
    user: USERS[0].user,
    likes: 7870,
    caption: "Party at a rave! 😂",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "Bart Simpster",
        comment: "Wow! This build looks fire! Super excited about it!",
      },
  
    ],
  },
  {
    ImageUrl:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
    user: USERS[1].user,
    likes: 8392032,
    caption: "Beautiful sunset",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "Roger Williams",
        comment: "Hey!!!! ♥",
      },
      {
        user: "Michael Morrison",
        comment: "Beautiful!!!!",
      },
      {
        user: "Rudi Kutcha",
        comment: "Such a beautiful photo Hayley!",
      },
      {
        user: "Alex Frontier",
        comment: "Where did you take this photo!? So gorgeous!",
      },
    ],
  },
  {
    ImageUrl: "https://i.ibb.co/182bP1y/4k.png",
    user: USERS[2].user,
    likes: 83284,
    caption: "How I spend my time.",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "Bart Simpster",
        comment: "Wow! This build looks fire! Super excited about it!",
      },
      {
        user: "Hayley Williams",
        comment: "That is so awesome! ♥",
      },
      {
        user: "Alex Baron",
        comment: "Awesome coding skills!",
      },
    ],
  },
];
