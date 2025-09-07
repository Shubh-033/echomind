import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import debateRoutes from "./routes/debate.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/debate", debateRoutes);

app.get("/", (req, res) => {
  res.send("EchoMind API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
