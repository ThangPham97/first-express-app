const express = require("express");
const app = express();

app.use(() => {
    console.log("We got a new request")
});

app.listen(5500, () => {
    console.log("Listen on port 5500")
});