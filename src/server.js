import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import video from "./routers/videoRouter";
import user from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", global);
app.use("/videos", video);
app.use("/users", user);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🥳`);

app.listen(PORT, handleListening);
