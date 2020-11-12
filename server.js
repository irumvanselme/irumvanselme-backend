import "./Models/Db.js";
import express from "express";
import cors from "cors";
import message_routes from "./Routes/Message.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/messages", message_routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
