const express = require("express")
console.log("boo")

const app = express()
const port = 3000

app.get("/", (req, res) => res.send("hello"))

app.listen(port, () => console.log("notre application node est démarée sur : http://localhost:"+port))