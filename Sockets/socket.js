const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", function (socket) {
  console.log("User Connected");
  socket.on("POST_SUBMISSON_DATA_RECEIVED", function (data) {
    io.emit("POST_SUBMISSION_DATA", data);
  });

  socket.on("COMMENT_RECEIVED", (comments) => {
    io.emit("COMMENT_SENT", comments);
    // console.log(comments);
  });

  socket.on("disconnect", () => {
    console.log("User is disconnected");
  });
});
