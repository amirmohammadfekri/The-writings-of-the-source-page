import fs from "fs";

import axios from "axios";
import {JSDOM} from "jsdom"

async function send() {
    let data
    const response = await axios.get("https://ganje.host/blog/introduction-of-http-status-code-types/", {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        },
        responseType: "html",
    });

    const dom = new JSDOM(response.data)

    // console.log(dom.window.document.querySelector("html").textContent);

    fs.writeFileSync("./text.txt",dom.window.document.querySelector("body").textContent.trim(),"utf8")
    
    
}

send();

