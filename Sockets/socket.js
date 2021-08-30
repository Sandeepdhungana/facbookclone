const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ socketId, userId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", function (socket) {
  socket.on("POST_SUBMISSON_DATA_RECEIVED", function (data) {
    io.emit("POST_SUBMISSION_DATA", data);
  });

  socket.on("COMMENT_RECEIVED", (comments) => {
    io.emit("COMMENT_SENT", comments);
    // console.log(comments);
  });

  socket.on("ADD_USER", (userId) => {
    addUser(userId, socket.id);

    io.emit("ONLINE_USERS", users);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("ONLINE_USERS", users);
    console.log("User is disconnected");
  });
});
