// import { Server } from "socket.io";
// export default function ioHandler(req, res) {
//   const io = new Server(res.socket.server);
//   const port = 8080;
//   async function mongoConnect() {
//     const mongoose = require("mongoose");
//     const msg = new mongoose.Schema({
//       text: String,
//       id: Number,
//     });
//     const msgModel = mongoose.model("msgSchema", msg);
//     await mongoose.connect("mongodb://127.0.0.1/Data", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     await console.log("Successfully connected to mongoose!");
//   }
//   mongoConnect();
//   io.on("connection", (socket) => {
//     socket.emit("a user connected");
//     socket.on("messages", async () => {
//       let data = await msgModel.find({});
//       console.log("data requested [MESSAGES]");
//       console.log("Handing over: \n" + data);
//       socket.emit("messages", data);
//     });
//   });
//   server.listen(port, () => {
//     console.log(`next server running on port http://localhost:` + port);
//   });
// }
