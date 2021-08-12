const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", function (socket) {
  console.log("User Connected");
  socket.on("POST_SENT", (post) => {
    console.log("The post is", post);
    io.emit("POST_RECEIVED", post);
  });

  socket.on("disconnect", () => {
    console.log("User Is disconnected");
  });
});
