import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";
// import path from "path";
// require('dotenv').config({ path: "C:/Users/gkdkd/git/study-warehouse/web/wetube/.env" });

dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";


// console.log(process.env);
const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
