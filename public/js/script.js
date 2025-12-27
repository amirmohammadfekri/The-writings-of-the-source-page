const button = document.getElementById("btn");
const URL = document.getElementById("URL");
const body = document.getElementsByTagName("body");

axios.defaults.baseURL = "http://localhost:3000";


button.addEventListener("click", async () => {
    let data = await axios.post("/send-url",{consl:"hdkajf"});
});
