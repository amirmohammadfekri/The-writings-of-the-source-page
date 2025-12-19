import fs from "fs"

const dataText = document.getElementsByTagName("body");

fs.writeFileSync("./text.txt",dataText.innerText)