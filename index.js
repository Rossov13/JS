const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.post("*", async ( req, res) => {
    res.send("Hello post");
});
app.get("*", async (req, res) => {
    res.send("Hello get");
});

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});