const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8085;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/fe/build"));

app.get("/fe", function (req, res) {
  res.sendfile(path.join(__dirname + "/fe/build"), "index.html");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
