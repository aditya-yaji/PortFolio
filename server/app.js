require("dotenv").config();
const { json } = require("express");
const express = require("express");
const path = require("path");
const jsonData = require("./m-chimp");
const https = require("https");
const app = express();
const port = process.env.PORT || 3000;

//static setup
app.use(express.static("public"));

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.post("/sign", (req, res) => {
  jsonData(req.body, (sData, options) => {
    const request = https.request(
      process.env.MAILCHIMP_URL,
      options,
      (response) => {
        if (response.statusCode === 200) {
          res.sendFile(path.resolve("public/success.html"));
        } else {
          res.sendFile(path.resolve("public/failure.html"));
        }

        response.on("data", (data) => {
          console.log(JSON.parse(data));
        });
      }
    );

    request.write(sData);
    request.end();
  });
});

app.post("/home", (req, res) => {
  res.redirect("/");
});

app.listen(port, (_) => {
  console.log(`Listening at port ${port}`);
});
