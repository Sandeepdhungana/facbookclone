// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const useSocket = (socketUrl) => {
//   const [socket, setSocket] = useState(null);
//   useEffect(() => {
//     const newSocket = io(socketUrl);
//     setSocket(newSocket);

//     return () => newSocket.close();
//   }, [socketUrl]);

//   return socket;
// };

// export default useSocket;
