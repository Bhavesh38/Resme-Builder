import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";


const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


//middleware and routes

app.use('/user', authRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(process.env.PORT || 3001, () => console.log("Server is running on port ", process.env.PORT))).catch(error => console.log(error));


// mongoose.connect(process.env.MONGO_URL, () => console.log(`DB is successfully connected`));
// const port = process.env.PORT
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })