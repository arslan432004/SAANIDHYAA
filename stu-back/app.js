import express from "express";
import morgan from "morgan";
import authenticate from "./routes/authenticate.js";

const app = express(); 
app.use(morgan("combined")); // Used morgan logger for the requests and responses.

app.use(express.json()); 

app.use("/api/auth", authenticate); 

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;