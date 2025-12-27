import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import { JSDOM } from "jsdom";

import controls from "./controls.js"

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(controls)

app.get("/", (req, res) => {
    console.log("hello");
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.listen(3000);


