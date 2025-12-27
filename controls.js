import fs from "fs"

import express, { Router } from "express";
import { JSDOM } from "jsdom";
import axios from "axios";

var router = express.Router();

router.post("/send-url", (req, res) => {
    var sss = acshen(req.body.url)
    console.log(sss);
    res.send(sss)
});

async function acshen(url) {
    let data;
    // console.log(url);
    const response = await axios.get(url, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        },
        responseType: "html",
    });

    const dom = new JSDOM(response.data);

    return  dom.window.document.getElementsByTagName("body").textContent.trim()
}

export default router;
