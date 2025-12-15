import fs from "fs";

import axios from "axios";

function send() {
    const response = axios.get("https://www.roxo.ir/strange-behaviors-of-the-javascript", {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        },
        responseType: "html",
    });

    console.log(response.Promise);
    
    fs.writeFileSync("./index.html",response.data + `<script src="./app.js"></script>`,"utf8")
    
}

send();

