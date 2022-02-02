import 'dotenv/config';
import express from "express";
import cors from "cors";

//Components
import Connection from "./database/db.js";
import Routes from "./routes/Route.js";

const app = express();
app.use('/images', express.static('images'))

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors());
app.use("/", Routes);

Connection();

app.listen(5000, () => console.log("App is running on port 5000"));

