import fs from "fs";

import express, { Router } from "express";
import { JSDOM } from "jsdom";
import axios from "axios";

var router = express.Router();

router.post("/send-url", async (req, res) => {
    const response = await axios.get(req.body.url, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        },
        responseType: "html",
    });

    fs.writeFileSync("./htht.html",response.data)

    const dom = new JSDOM(response.data);

    console.log(dom.window.document.querySelector("body").textContent);

    res.send(dom.window.document.querySelectorAll("body").textContent)
});

export default router;
