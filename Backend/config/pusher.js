import Pusher from "pusher";

// const pusher = new Pusher({
//   appId: process.env.PUSHER_APP_ID,
//   key: process.env.PUSHER_KEY,
//   secret: process.env.PUSHER_SECRET,
//   cluster: process.env.PUSHER_CLUSTER,
//   useTLS: true,
// });

const pusher = new Pusher({
  appId: "1247353",
  key: "b2745f13cadca5dfc316",
  secret: "b1ec9b645b8454f2f9c",
  cluster: "ap2",
  useTLS: true,
});

export default pusher;
